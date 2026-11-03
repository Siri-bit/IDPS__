export const INFRA: Record<string, string> = {
  SC: "Smart Classrooms", SL: "Science Labs", CL: "Computer Lab", RB: "Robotics Lab", LB: "Library",
  AU: "Auditorium", SP: "Swimming Pool", SX: "Sports Complex", MU: "Music & Dance", PA: "Play Area", TR: "Transport", HS: "Hostel",
};
export const INFRA_KEYS = Object.keys(INFRA);

type Row = [string, string, string, number, string, number, number, number, string, string, string];
const ROWS: Row[] = [
  ["Head Branch","New Delhi","Delhi",2008,"Head Branch",2600,3000,130,"Nursery–XII","6 acres","SC SL CL RB LB AU SP SX MU TR HS"],
  ["Dwarka","Dwarka","Delhi",2011,"Senior Sec.",1900,2200,96,"Nursery–XII","4 acres","SC SL CL RB LB AU SX MU TR"],
  ["Rohini","Rohini","Delhi",2014,"Secondary",1300,1600,68,"Nursery–X","3 acres","SC SL CL LB SX MU TR"],
  ["Gurugram","Gurugram","Haryana",2012,"Senior Sec.",2100,2400,104,"Nursery–XII","5 acres","SC SL CL RB LB AU SP SX MU TR"],
  ["Faridabad","Faridabad","Haryana",2017,"Franchise",900,1300,48,"Nursery–VIII","2.5 acres","SC CL LB SX PA TR"],
  ["Noida","Noida","Uttar Pradesh",2010,"Senior Sec.",2200,2500,110,"Nursery–XII","5 acres","SC SL CL RB LB AU SP SX MU TR"],
  ["Lucknow","Lucknow","Uttar Pradesh",2013,"Senior Sec.",1750,2000,88,"Nursery–XII","4 acres","SC SL CL LB AU SX MU TR HS"],
  ["Kanpur","Kanpur","Uttar Pradesh",2018,"Franchise",820,1200,44,"Nursery–VIII","2 acres","SC CL LB SX PA TR"],
  ["Varanasi","Varanasi","Uttar Pradesh",2021,"New Campus",460,1000,28,"Nursery–V","2 acres","SC LB PA TR"],
  ["Jaipur","Jaipur","Rajasthan",2012,"Senior Sec.",1800,2100,92,"Nursery–XII","4.5 acres","SC SL CL RB LB AU SX MU TR HS"],
  ["Udaipur","Udaipur","Rajasthan",2019,"Franchise",700,1100,38,"Nursery–VIII","2 acres","SC CL LB SX TR"],
  ["Ludhiana","Ludhiana","Punjab",2016,"Secondary",1150,1500,60,"Nursery–X","3 acres","SC SL CL LB SX MU TR"],
  ["Ahmedabad","Ahmedabad","Gujarat",2011,"Senior Sec.",2000,2300,100,"Nursery–XII","5 acres","SC SL CL RB LB AU SP SX MU TR"],
  ["Surat","Surat","Gujarat",2015,"Secondary",1250,1600,64,"Nursery–X","3 acres","SC SL CL LB SX TR"],
  ["Vadodara","Vadodara","Gujarat",2020,"Franchise",620,1000,34,"Nursery–VII","2 acres","SC CL LB PA TR"],
  ["Mumbai","Mumbai","Maharashtra",2013,"Senior Sec.",1950,2200,98,"Nursery–XII","3.5 acres","SC SL CL RB LB AU SX MU TR"],
  ["Pune","Pune","Maharashtra",2012,"Senior Sec.",1850,2100,94,"Nursery–XII","4 acres","SC SL CL RB LB AU SP SX MU TR"],
  ["Nagpur","Nagpur","Maharashtra",2017,"Secondary",1050,1400,56,"Nursery–X","3 acres","SC SL CL LB SX TR"],
  ["Nashik","Nashik","Maharashtra",2022,"New Campus",380,900,24,"Nursery–V","1.5 acres","SC LB PA TR"],
  ["Bhopal","Bhopal","Madhya Pradesh",2014,"Secondary",1200,1500,62,"Nursery–X","3 acres","SC SL CL LB SX MU TR"],
  ["Indore","Indore","Madhya Pradesh",2013,"Senior Sec.",1700,2000,86,"Nursery–XII","4 acres","SC SL CL RB LB AU SX MU TR"],
  ["Kolkata","Kolkata","West Bengal",2014,"Senior Sec.",1650,2000,84,"Nursery–XII","3.5 acres","SC SL CL LB AU SX MU TR"],
  ["Patna","Patna","Bihar",2018,"Franchise",880,1300,46,"Nursery–VIII","2.5 acres","SC CL LB SX TR"],
  ["Hyderabad","Hyderabad","Telangana",2011,"Senior Sec.",2150,2400,108,"Nursery–XII","5 acres","SC SL CL RB LB AU SP SX MU TR"],
  ["Warangal","Warangal","Telangana",2020,"Franchise",590,1000,32,"Nursery–VII","2 acres","SC CL LB PA TR"],
  ["Visakhapatnam","Visakhapatnam","Andhra Pradesh",2016,"Secondary",1100,1500,58,"Nursery–X","3 acres","SC SL CL LB SX TR"],
  ["Vijayawada","Vijayawada","Andhra Pradesh",2019,"Franchise",740,1100,40,"Nursery–VIII","2 acres","SC CL LB SX TR"],
  ["Bengaluru","Bengaluru","Karnataka",2010,"Senior Sec.",2300,2600,116,"Nursery–XII","5 acres","SC SL CL RB LB AU SP SX MU TR HS"],
  ["Mysuru","Mysuru","Karnataka",2015,"Secondary",1150,1500,60,"Nursery–X","3 acres","SC SL CL LB SX MU TR"],
  ["Hubballi","Hubballi","Karnataka",2018,"Franchise",800,1200,42,"Nursery–VIII","2.5 acres","SC CL LB SX TR"],
  ["Ballari","Ballari","Karnataka",2021,"Franchise",560,1000,30,"Nursery–VII","2 acres","SC CL LB PA TR"],
  ["Mangaluru","Mangaluru","Karnataka",2023,"New Campus",340,900,22,"Nursery–V","1.5 acres","SC LB PA TR"],
  ["Chennai","Chennai","Tamil Nadu",2012,"Senior Sec.",1900,2200,96,"Nursery–XII","4 acres","SC SL CL RB LB AU SX MU TR"],
  ["Coimbatore","Coimbatore","Tamil Nadu",2017,"Secondary",1000,1400,54,"Nursery–X","3 acres","SC SL CL LB SX TR"],
  ["Kochi","Kochi","Kerala",2016,"Secondary",1080,1400,58,"Nursery–X","2.5 acres","SC SL CL LB SX MU TR"],
];

export const CAMPUS_IMGS = [
  "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=70",
  "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=70",
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=70",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=70",
];

export const BRANCHES = ROWS.map((r, id) => ({
  id, name: "IDPS " + r[0], city: r[1], state: r[2], est: r[3], type: r[4],
  students: r[5], capacity: r[6], teachers: r[7], classes: r[8], area: r[9], codes: r[10].split(" "),
}));
export type Branch = (typeof BRANCHES)[number];

export const FRANCHISE_MODELS = [
  { name: "Pre-School", inv: "₹15 – 25 Lakh", land: "2,500 – 5,000 sq ft", featured: false,
    points: ["Nursery to UKG", "Brand & curriculum kit", "Teacher training", "Marketing support", "ROI in 2–3 years"] },
  { name: "K–8 School", inv: "₹1.5 – 3 Cr", land: "1 – 2 acres", featured: true,
    points: ["Nursery to Grade VIII", "Architectural design support", "CBSE affiliation guidance", "ERP & parent app", "Central academic audits"] },
  { name: "K–12 School", inv: "₹5 – 10 Cr", land: "3+ acres", featured: false,
    points: ["Nursery to Grade XII", "Full campus planning", "Senior faculty recruitment", "Board exam readiness program", "Exclusive territory rights"] },
];

export const TERRITORIES = ([
  ["Agra","Uttar Pradesh","K–8 School","open"],["Prayagraj","Uttar Pradesh","K–12 School","open"],
  ["Dehradun","Uttarakhand","K–12 School","open"],["Chandigarh","Chandigarh","K–8 School","talks"],
  ["Jodhpur","Rajasthan","Pre-School","open"],["Rajkot","Gujarat","K–8 School","open"],
  ["Aurangabad","Maharashtra","K–8 School","open"],["Raipur","Chhattisgarh","K–12 School","open"],
  ["Ranchi","Jharkhand","K–8 School","open"],["Bhubaneswar","Odisha","K–12 School","talks"],
  ["Guwahati","Assam","K–8 School","open"],["Davanagere","Karnataka","Pre-School","open"],
  ["Madurai","Tamil Nadu","K–8 School","open"],["Thiruvananthapuram","Kerala","Pre-School","talks"],
] as [string, string, string, string][]).map(([city, state, model, status]) => ({ city, state, model, status }));

export const GALLERY = [
  { src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=75", tag: "Sports", title: "Annual Sports Meet", cls: "md:col-span-2" },
  { src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=75", tag: "STEM", title: "Science Exhibition", cls: "md:row-span-2" },
  { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=75", tag: "Academics", title: "Smart Classrooms", cls: "" },
  { src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=75", tag: "Arts", title: "Art & Craft Studio", cls: "" },
  { src: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=900&q=75", tag: "Culture", title: "Music & Performing Arts", cls: "" },
  { src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=900&q=75", tag: "Reading", title: "Library Programme", cls: "" },
  { src: "/assets/graduation-annual-day.jpg", tag: "Celebrations", title: "Graduation & Annual Day", cls: "md:col-span-2" },
];

export const fmt = (n: number) => n.toLocaleString("en-IN");

// [lng, lat] for map pins
export const COORDS: Record<string, [number, number]> = {
  "New Delhi":[77.21,28.61], Dwarka:[77.04,28.58], Rohini:[77.07,28.74], Gurugram:[77.03,28.46], Faridabad:[77.32,28.41],
  Noida:[77.39,28.54], Lucknow:[80.95,26.85], Kanpur:[80.33,26.45], Varanasi:[82.97,25.32], Jaipur:[75.79,26.91],
  Udaipur:[73.71,24.59], Ludhiana:[75.86,30.9], Ahmedabad:[72.57,23.02], Surat:[72.83,21.17], Vadodara:[73.18,22.31],
  Mumbai:[72.88,19.08], Pune:[73.86,18.52], Nagpur:[79.09,21.15], Nashik:[73.79,20.0], Bhopal:[77.41,23.26],
  Indore:[75.86,22.72], Kolkata:[88.36,22.57], Patna:[85.14,25.59], Hyderabad:[78.49,17.39], Warangal:[79.59,17.97],
  Visakhapatnam:[83.22,17.69], Vijayawada:[80.65,16.51], Bengaluru:[77.59,12.97], Mysuru:[76.64,12.3], Hubballi:[75.12,15.36],
  Ballari:[76.92,15.14], Mangaluru:[74.86,12.91], Chennai:[80.27,13.08], Coimbatore:[76.96,11.02], Kochi:[76.27,9.93],
  Agra:[78.01,27.18], Prayagraj:[81.85,25.44], Dehradun:[78.03,30.32], Chandigarh:[76.78,30.73], Jodhpur:[73.02,26.24],
  Rajkot:[70.8,22.3], Aurangabad:[75.34,19.88], Raipur:[81.63,21.25], Ranchi:[85.31,23.34], Bhubaneswar:[85.82,20.3],
  Guwahati:[91.74,26.14], Davanagere:[75.92,14.46], Madurai:[78.12,9.93], Thiruvananthapuram:[76.94,8.52],
};
// Map file uses older state names
export const MAP_NAME: Record<string, string> = { Telangana: "Andhra Pradesh", Odisha: "Orissa", Uttarakhand: "Uttaranchal" };
