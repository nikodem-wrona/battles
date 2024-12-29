import { Battle } from "./shared/types";

const battles: Battle[] = [
  {
    name: "Westerplatte",
    campaign: "Invasion of Poland",
    theater: "Eastern Front",
    startDate: "1939-09-01",
    endDate: "1939-09-07",
    allies: ["Poland"],
    axis: ["Germany", "Danzig"],
    whoWon: "Axis",
    coordinates: [54.4249794, 18.581202],
  },
];

export { battles };
