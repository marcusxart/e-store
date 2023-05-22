import PageWrapper from "@/app/components/PageWrapper";
import Product from "@/app/components/Product";
import getSearchProducts from "@/lib/getSearchProducts";
import { notFound } from "next/navigation";

interface Props {
  searchParams: {
    search: string;
  };
}

const Catalog = async ({ searchParams }: Props) => {
  const { search } = searchParams;
  const productsData: Promise<Products> = await getSearchProducts({
    q: search,
  });
  const products = await productsData;
  if (products.products.length === 0) {
    notFound();
  }
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
};

export default Catalog;
