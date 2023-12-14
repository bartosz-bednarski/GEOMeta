import { useLoaderData } from "react-router-dom";
import Country from "../components/country/Index";
const CountryPage = () => {
  const data = useLoaderData();
  if (data.data.length === 0) {
    data.data.push({
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
  return <Country data={data.data} />;
};
export default CountryPage;
