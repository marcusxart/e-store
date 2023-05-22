import PageWrapper from "@/app/components/PageWrapper";
import getProduct from "@/lib/getProduct";
import Content from "./components/Content";

interface Props {
  params: {
    productId: string;
  };
}

const ProductDetails = async ({ params }: Props) => {
  const prouctData: Promise<Product> = getProduct({
    id: Number(params.productId),
  });

  const data = await prouctData;

  // useEffect(() => {
  //   const getData = async () => {
  //     const prouctData: Promise<Product> = getProduct({
  //       id: Number(params.productId),
  //     });
  //     const data = await prouctData;
  //     setProductImage(data?.images[0]);
  //     setData(data);
  //   };
  //   getData();
  // }, [params.productId]);

  return (
    <PageWrapper>
      <div className="w-full py-8">
        <Content data={data} />
      </div>
    </PageWrapper>
  );
};

export default ProductDetails;
