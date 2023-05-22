import axios from "@/utils/axiosConfig";
type params = {
  id: number;
};
const getProduct = async ({ id }: params) => {
  try {
    const res = await axios.get(`/products/${id}`);
    const data = await res.data;
    return data;
  } catch (error: any) {
    throw error?.response?.data?.message;
  }
};

export default getProduct;
