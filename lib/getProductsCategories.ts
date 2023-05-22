import axios from "@/utils/axiosConfig";

const getProductsCategories = async () => {
  try {
    const res = await axios.get("/products/categories");
    const data = await res.data;
    return data;
  } catch (error) {
    throw error;
  }
};

export default getProductsCategories;
