const baseUrl = "http://localhost:3001/api/v1/order";

export const orderPlaced = async (account) => {
  
  const response = await fetch(baseUrl + "/placeOrder", {
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

