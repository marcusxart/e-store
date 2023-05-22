import getProductsCategories from "@/lib/getProductsCategories";
import Link from "next/link";
type ProductsCategories = Array<string>;

const Categories = async () => {
  const categoriesData: Promise<ProductsCategories> = getProductsCategories();
  const categories = await categoriesData;

  return (
    <>
      <ul>
        {categories?.map((category, id) => (
          <li key={id}>
            <Link href={`/products/category/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Categories;
