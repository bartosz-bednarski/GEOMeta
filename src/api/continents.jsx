export const getContinent = async (id) => {
  const response = await fetch(
    `https://geo-meta-rest-api.vercel.app/api/continents/${id}`,
    { mode: "cors" }
  );
  const data = await response.json();
  return data.data;
};
