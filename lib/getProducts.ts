import axios from "@/utils/axiosConfig";
type params = {
  limit: number;
  skip: number;
};
const getProducts = async ({ limit = 10, skip = 0 }: params) => {
  try {
    const res = await axios.get("/products", {
      params: {
        limit,
        skip,
      },
    });
    const data = await res.data;
    return data;
  } catch (error) {
    throw error;
  }
};

export default getProducts;
