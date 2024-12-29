export type Battle = {
  name: string;
  campaign: string;
  theater: string;
  startDate: string;
  endDate: string;
  allies: string[];
  axis: string[];
  whoWon: string;
  coordinates: [number, number];
};
