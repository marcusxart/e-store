import axios from "@/utils/axiosConfig";
type params = {
  category: string;
};
const getProductsByCategory = async ({ category }: params) => {
  try {
    const res = await axios.get(`/products/category/${category}`);
    const data = await res.data;
    return data;
  } catch (error) {
    throw error;
  }
};

export default getProductsByCategory;
