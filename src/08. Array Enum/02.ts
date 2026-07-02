const city: readonly string[] = ["Delhi", "Mumbai", "Kolkata", "Chennai"];
// city.push("Pune");

const entryTable: number[][] = [
    [15, 25, 35],
    [16, 26, 36],
    [17, 27, 37],
    [18, 28, 38]
]
let attendace: [number, string][] = [
    [15, "Present"],
    [16, "Present"],
    [17, "Absent"],
    [18, "Present"]
];

let tuple1:[string, number, boolean?] = ["abc", 123, true];
tuple1 = ["xyz", 456];
const location: readonly [number, number] = [12.34, 56.78];
// location[0] = 45.67;
const color: [red: number, green: number, blue: number] = [255, 0, 0];
color[1] = 201;
color[2] = 81;
color[0] = 63;