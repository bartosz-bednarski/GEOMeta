import { useLoaderData } from "react-router-dom";
import Country from "../components/country/Index.tsx";
const CountryPage = () => {
  const countryData = useLoaderData();
  if (countryData.data.length === 0) {
    countryData.data.push({
      capitol: "Coming soon",
      country_flag: "poland.svg",
      country_name: "Coming soon",
      currency: "Coming soon",
      emblem: "poland.svg.png",
      movement: "rightHand",
      plate: "poland.svg",
      temperature: "medium",
      website: "Coming soon",
    });
  }
  return <Country countryData={countryData.data} />;
};
export default CountryPage;
