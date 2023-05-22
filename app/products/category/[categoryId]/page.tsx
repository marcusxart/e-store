import PageWrapper from "../../../components/PageWrapper";
import Product from "../../../components/Product";
import getProductsByCategory from "../../../../lib/getProductsByCategory";
import getProductsCategories from "@/lib/getProductsCategories";

interface Props {
  params: {
    categoryId: string;
  };
}
export default async function Products({ params }: Props) {
  const productsData: Promise<Products> = getProductsByCategory({
    category: params.categoryId,
  });
  const products = await productsData;

  return (
    <PageWrapper>
      <main className="w-full py-10">
        <div className="grid w-fit mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-6 justify-items-center  flex-wrap">
          {products.products?.map((product) => (
            <Product
              key={product.id}
              data={product}
              link={`/products/${product?.id}`}
            />
          ))}
        </div>
      </main>
    </PageWrapper>
  );
}

export async function generateStaticParams() {
  const categories = await getProductsCategories();

  return categories.map((category: string) => ({
    categoryId: category,
  }));
}
