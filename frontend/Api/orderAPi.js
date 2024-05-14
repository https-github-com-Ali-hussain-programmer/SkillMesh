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

export const uploadOrderRequirementFile = async (file) => {
  try {
    const TotalPackage = JSON.parse(localStorage.getItem("TotalPackage"));
    const userData = JSON.parse(localStorage.getItem("userData"));
    const formData = new FormData();
    console.log(TotalPackage.gigId);
    formData.append("file", file);
    formData.append("gigId", TotalPackage.gigId);
    formData.append("userId", userData._id)
    const response = await fetch(baseUrl + "/upload", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      console.log("File uploaded successfully!");
    } else {
      console.error("Failed to upload file.");
    }
  } catch (error) {
    console.error("Error uploading file:", error);
  }
};
