const BASE_URL = "https://fakestoreapi.com";

export async function getAllProducts() {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    if (!response.ok) {
      throw new Error("Error al obtener productos");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products", error);
    return [];
  }
}

export async function getProductById(id) {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    if (!response.ok) {
      throw new Error("Error al obtener producto");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching product", error);
    return null;
  }
}

export async function getCategories() {
  try {
    const response = await fetch(`${BASE_URL}/products/categories`);

    if (!response.ok) {
      throw new Error("Error al obtener categorías");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("getCategories error:", error);
    return [];
  }
}
