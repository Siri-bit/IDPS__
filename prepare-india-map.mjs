
import fs from "node:fs";

const input = JSON.parse(
  fs.readFileSync("./india-admin-updated.geojson", "utf8")
);

if (input.type !== "FeatureCollection" ||
    !Array.isArray(input.features)) {
  throw new Error("Invalid GeoJSON FeatureCollection");
}

const features = input.features.map((f, index) => {
  const props = f.properties ?? {};

  // Support common administrative boundary schemas.
  const name =
    props.shapeName ??
    props.NAME_1 ??
    props.name ??
    props.NAME;

  if (!name || !f.geometry) {
    throw new Error(`Missing name/geometry at feature ${index}`);
  }

  return {
    ...f,
    properties: {
      ...props,
      NAME_1: name
    }
  };
});

const output = {
  type: "FeatureCollection",
  features
};

fs.writeFileSync(
  "./india-states-new.json",
  JSON.stringify(output)
);

console.log("Features:", features.length);
console.log(
  "States/UTs:",
  features.map(f => f.properties.NAME_1).join(", ")
);
console.log("Created india-states-new.json");
