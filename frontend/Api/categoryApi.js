const baseUrl = "http://localhost:3001/api/v1/category";

export const getCategories = async () => {
  const response = await fetch(baseUrl + `/getCategories`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  const data = response.json();
  return data;
};
