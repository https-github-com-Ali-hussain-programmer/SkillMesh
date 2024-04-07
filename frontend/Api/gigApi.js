const baseUrl = "http://localhost:3001/api/v1/gig";

export const createGig = async (file) => {
  const formData = new FormData();
  const tags = localStorage.getItem("tags");
  const basicPkg = localStorage.getItem("basicPkg");
  const standardPkg = localStorage.getItem("standardPkg");
  const premiumPkg = localStorage.getItem("premiumPkg");
  const title = localStorage.getItem("title");
  const description = localStorage.getItem("description");
  const selectedSubField = localStorage.getItem("selectedSubField");
  const selectedCategory = localStorage.getItem("selectedCategory");
  formData.append("images", file);
  formData.append("title", title);
  formData.append("basicPkg", basicPkg);
  formData.append("premiumPkg", premiumPkg);
  formData.append("standardPkg", standardPkg);
  formData.append("selectedSubField", selectedSubField);
  formData.append("selectedCategory", selectedCategory);
  formData.append("description", description);
  formData.append("tags", tags);

  const response = await fetch(baseUrl + `/createGig`, {
    method: "POST",

    credentials: "include",
    body: formData,
  });
  const data = await response.json();
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
export const wishlistGig = async () => {
  const response = await fetch(baseUrl + `/wishlistGig`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  const data = response.json();
  return data;
};
export const removewishlistGig = async () => {
  const response = await fetch(baseUrl + `/wishlistGig`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  const data = response.json();
  return data;
};

