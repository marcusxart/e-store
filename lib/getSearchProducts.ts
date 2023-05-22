import axios from "@/utils/axiosConfig";
type params = {
  q: string;
};
const getSearchProducts = async ({ q }: params) => {
  try {
    const res = await axios.get("/products/search", {
      params: {
        q,
      },
    });
    const data = await res.data;
    return data;
  } catch (error) {
    throw error;
  }
};

export default getSearchProducts;
