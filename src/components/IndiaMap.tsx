import { useMemo, useState } from "react";
import { geoMercator, geoPath } from "d3-geo";
import type { FeatureCollection } from "geojson";
import india from "@/lib/india-states.json";
import { BRANCHES, COORDS, MAP_NAME, TERRITORIES, fmt } from "@/lib/idps-data";


const W = 600, H = 680;

const rawGeo = india as unknown as FeatureCollection<
  any,
  { NAME_1: string }
>;

// D3 expects clockwise exterior rings for ordinary
// small spherical polygons. Reverse the GeoJSON rings
// to avoid rendering the complementary region.
const geo = {
  ...rawGeo,
  features: rawGeo.features.map((feature) => {
    const geometry = feature.geometry as any;

    if (!geometry) return feature;

    if (geometry.type === "Polygon") {
      return {
        ...feature,
        geometry: {
          ...geometry,
          coordinates: geometry.coordinates.map(
            (ring: number[][]) => [...ring].reverse()
          ),
        },
      };
    }

    if (geometry.type === "MultiPolygon") {
      return {
        ...feature,
        geometry: {
          ...geometry,
          coordinates: geometry.coordinates.map(
            (polygon: number[][][]) =>
              polygon.map((ring) => [...ring].reverse())
          ),
        },
      };
    }

    return feature;
  }),
} as FeatureCollection<any, { NAME_1: string }>;


const toMap = (s: string) => MAP_NAME[s] ?? s;

export function IndiaMap({ selected, onSelect }: { selected: string; onSelect: (s: string) => void }) {
  const [zoom, setZoom] = useState(1);
  const [tip, setTip] = useState<{ x: number; y: number; title: string; sub: string } | null>(null);

  const { paths, proj } = useMemo(() => {
    const proj = geoMercator().fitSize([W, H], geo);
    const path = geoPath(proj);
    return { proj, paths: geo.features.map((f) => ({ name: f.properties.NAME_1, d: path(f) ?? "" })) };
  }, []);

  const counts = useMemo(() => {
    const c: Record<string, { n: number; real: string }> = {};
    BRANCHES.forEach((b) => {
      const k = toMap(b.state);
      c[k] = { n: (c[k]?.n ?? 0) + 1, real: c[k]?.real ?? b.state };
    });
    return c;
  }, []);
  const terrStates = useMemo(() => new Set(TERRITORIES.map((t) => toMap(t.state))), []);
  const selMap = selected === "All" ? null : toMap(selected);

  const fillFor = (name: string) => {
    const c = counts[name]?.n ?? 0;
    if (c >= 4) return "fill-primary";
    if (c >= 3) return "fill-primary/80";
    if (c >= 2) return "fill-primary/60";
    if (c >= 1) return "fill-primary/40";
    if (terrStates.has(name)) return "fill-territory/25";
    return "fill-card";
  };

  const show = (e: React.MouseEvent, title: string, sub: string) => {
    const r = (e.currentTarget.closest("svg") as SVGSVGElement).getBoundingClientRect();
    setTip({ x: e.clientX - r.left, y: e.clientY - r.top, title, sub });
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-muted to-secondary">
      <div className="absolute left-4 top-4 z-10 flex flex-col overflow-hidden rounded-md border border-border bg-card shadow-card">
        <button aria-label="Zoom in" onClick={() => setZoom((z) => Math.min(z + 0.4, 2.6))} className="h-9 w-9 text-lg font-bold text-primary hover:bg-muted">+</button>
        <button aria-label="Zoom out" onClick={() => setZoom((z) => Math.max(z - 0.4, 1))} className="h-9 w-9 border-t border-border text-lg font-bold text-primary hover:bg-muted">−</button>
      </div>
      <div className="absolute right-4 top-4 z-10 space-y-1 rounded-lg bg-card/90 p-3 text-xs text-muted-foreground shadow-card backdrop-blur">
        <div className="flex items-center gap-2"><span className="h-3 w-3 rounded-full border-2 border-accent bg-primary" />Branch</div>
        <div className="flex items-center gap-2"><span className="h-4 w-4 rounded-full border-2 border-accent bg-accent" />Head Branch</div>
        <div className="flex items-center gap-2"><span className="h-3 w-3 rounded-full border-2 border-dashed border-territory bg-card" />Franchise available</div>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="h-[560px] w-full md:h-[640px]" onMouseLeave={() => setTip(null)}>
        <g style={{ transform: `scale(${zoom})`, transformOrigin: "50% 45%", transition: "transform .4s" }}>
          
{paths.map((p) => {
  const c = counts[p.name];
  const active = selMap === p.name;
  const branchCount = c?.n ?? 0;

  const mapFill = active
    ? "#F28C28"
    : branchCount >= 4
      ? "#263F70"
      : branchCount >= 3
        ? "#385783"
        : branchCount >= 2
          ? "#58769F"
          : branchCount >= 1
            ? "#7D96B8"
            : terrStates.has(p.name)
              ? "#E0F0E8"
              : "#FFFFFF";

  return (
    <path
      key={p.name}
      d={p.d}
      fill={mapFill}
      stroke="#C6D0DC"
      strokeWidth={active ? 1.6 : 0.8}
      strokeLinejoin="round"
      vectorEffect="non-scaling-stroke"
      className="cursor-pointer transition-colors duration-200"
      onMouseEnter={(e) => {
        e.currentTarget.style.fill = "#F5B45C";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.fill = mapFill;
      }}
      onClick={() => c && onSelect(active ? "All" : c.real)}
      onMouseMove={(e) =>
        show(
          e,
          p.name === "Orissa"
            ? "Odisha"
            : p.name === "Uttaranchal"
              ? "Uttarakhand"
              : p.name,
          c
            ? `${c.n} IDPS campus${c.n > 1 ? "es" : ""}`
            : terrStates.has(p.name)
              ? "Franchise territory available"
              : "No campus yet"
        )
      }
    />
  );
})}

          {TERRITORIES.map((t) => {
            const [x, y] = proj(COORDS[t.city]!)!;
            return (
              <circle key={t.city} cx={x} cy={y} r={6} className="cursor-pointer fill-card stroke-territory transition-all hover:fill-territory" strokeWidth={2.2} strokeDasharray="3 2"
                onMouseMove={(e) => show(e, `${t.city} — Franchise`, `${t.model} · ${t.status === "open" ? "Open" : "In talks"}`)} />
            );
          })}
          {BRANCHES.map((b) => {
            const [x, y] = proj(COORDS[b.city]!)!;
            const head = b.type === "Head Branch";
            const dim = selected !== "All" && b.state !== selected;
            return (
              <circle key={b.id} cx={x} cy={y} r={head ? 10 : 6}
                className={`cursor-pointer stroke-accent transition-all hover:fill-accent ${head ? "fill-accent" : "fill-primary"} ${dim ? "opacity-30" : ""}`}
                strokeWidth={2.2}
                onClick={() => onSelect(b.state)}
                onMouseMove={(e) => show(e, b.name, `${b.city} · ${fmt(b.students)} students · ${b.type}`)} />
            );
          })}
        </g>
      </svg>
      {tip && (
        <div className="pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-full rounded-md bg-primary px-3 py-2 text-xs text-primary-foreground shadow-card" style={{ left: tip.x, top: tip.y - 12 }}>
          <b className="block text-sm">{tip.title}</b>{tip.sub}
        </div>
      )}
      <p className="absolute bottom-4 left-4 rounded-md bg-card px-3 py-1.5 text-xs text-muted-foreground shadow-card">Click a state to view its branches</p>
    </div>
  );
}
