const baseUrl = "http://localhost:3001/api/v1/gig";

export const createGig = async (
  file,
  desc,
  title,
  tags,
  selectedSubfield,
  selectedCategory,
  basic,
  standard,
  premium
) => {
  const formData = new FormData();
  console.log(basic);

  formData.append("images", file);
  formData.append("title", title);
  formData.append("basicPkg", JSON.stringify(basic));
  formData.append("premiumPkg", JSON.stringify(premium));
  formData.append("standardPkg", JSON.stringify(standard));
  formData.append("selectedSubField", selectedSubfield);
  formData.append("selectedCategory", selectedCategory);
  formData.append("description", desc);
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

export const fetchGigbyCategory = async (categoryName) => {
  const response = await fetch(baseUrl + `/fetchGigbyCategory`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ categoryName }),
  });
  const data =await  response.json();
  return data;
};
export const fetchGigbyid = async (id) => {
  const response = await fetch(baseUrl + `/fetchGigbyid`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ id }),
  });
  const data =await  response.json();
  return data;
};