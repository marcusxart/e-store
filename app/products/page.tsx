import PageWrapper from "../components/PageWrapper";
import getProducts from "@/lib/getProducts";
import Product from "../components/Product";

export default async function Products() {
  const productsData: Promise<Products> = getProducts({ limit: 12, skip: 0 });
  const products = await productsData;

  return (
    <PageWrapper>
      <main className="w-full py-10">
        <div className="grid w-fit mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-6 justify-items-center  flex-wrap ">
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
