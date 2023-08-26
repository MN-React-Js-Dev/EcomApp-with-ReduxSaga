import axios from "axios";

const token = "Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo";
const baseUrl = "https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest"

export const loadProdcutsApi = async () => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  try {
    const response = await axios.get(`${baseUrl}/products`, config);
    return response.data;
  } catch (error) {
    console.error("Error loading products:", error);
    throw error;
  }
};

export const loadProductsColorsApi = async () => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  try {
    const response = await axios.get(`${baseUrl}/colors`, config);
     return response.data;
  } catch (error) {
    console.error("Error loading products:", error);
    throw error;
  }
}

export const loadProductsMaterialsApi = async () => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  try {
    const response = await axios.get(`${baseUrl}/material`, config);
     return response.data;
  } catch (error) {
    console.error("Error loading products:", error);
    throw error;
  }
}

export const loadFeaturedProductsApi = async () => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  try {
    const response = await axios.get(`${baseUrl}/featured`, config);
     return response.data;
  } catch (error) {
    console.error("Error loading products:", error);
    throw error;
  }
}