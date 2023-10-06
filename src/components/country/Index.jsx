import { useParams } from "react-router-dom";
const Country = () => {
  const params = useParams();
  <div>Krajowa strona {params.countryId}</div>;
};
export default Country;
