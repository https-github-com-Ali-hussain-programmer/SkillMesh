const baseUrl = "http://localhost:3001/api/v1/gig";

export const createGig = async () => {
  const response = await fetch(baseUrl + `/createGig`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });
  const data = response.json();
  return data;
};
export const getGig = async () => {
  const response = await fetch(baseUrl + `/getGig`, {
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
