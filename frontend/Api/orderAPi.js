import { toast } from "react-toastify";
const baseUrl = "http://localhost:3001/api/v1/order";

export const orderPlacedAPI = async (data) => {
  const response = await fetch(baseUrl + "/placeOrder", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });
  const d = response.json();

  return d;
};

export const Allorders = async (id) => {
  const response = await fetch(baseUrl + "/getAllOrders", {
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
export const AllordersSeller = async (id) => {
  const response = await fetch(baseUrl + "/getAllOrders-seller", {
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

export const uploadOrderRequirementFile = async (file) => {
  try {
    const TotalPackage = JSON.parse(localStorage.getItem("TotalPackage"));
    const userData = JSON.parse(localStorage.getItem("userData"));
    const formData = new FormData();
    console.log(TotalPackage.gigId);
    formData.append("file", file);
    formData.append("gigId", TotalPackage.gigId);
    formData.append("userId", userData._id);
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
export const uploadProjectFile = async (file, orderId) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("orderId", orderId);
    const response = await fetch(baseUrl + "/uploadproject", {
      method: "POST",
      body: formData,
      credentials: "include",
    });

    if (response.ok) {
      toast.success("Sucessfully Uploaded Project File");
      console.log("Prject uploaded successfully!");
    } else {
      console.error("Failed to upload file.");
    }
  } catch (error) {
    console.error("Error uploading file:", error);
  }
};

export const getAllOrdersCompleted = async () => {
  const response = await fetch(baseUrl + "/getAllOrdersCompleted", {
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
export const markCompletedProject = async (id) => {
  const response = await fetch(baseUrl + "/markCompletedProject", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ id }),
  });
  const data = response.json();

  return data;
};
