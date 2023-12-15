export type activeContinentHandler = (continentDetails: {
  id: string;
  continent: string;
}) => void;
export type activeContinent = {
  active: boolean;
  id: string;
  continent: string;
};
export type countires = [{ country: string; img: string }];
