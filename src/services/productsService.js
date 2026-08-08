const BASE_URL = "https://fakestoreapi.com";

export const getProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products", error);
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching product", error);
    throw error;
  }
};
