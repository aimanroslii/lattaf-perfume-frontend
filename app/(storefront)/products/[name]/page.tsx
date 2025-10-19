import { ProductCard } from "@/app/components/storefront/ProductCard";
import prisma from "@/app/lib/db";
import { notFound } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";
import { getAllProducts, getProductsByCategory } from "@/app/lib/productService";

const token = "myToken";

async function getData(productCategory: string) {
  switch (productCategory) {
    case "all": {
      // const data = await prisma.product.findMany({
      //   select: {
      //     name: true,
      //     images: true,
      //     price: true,
      //     id: true,
      //     description: true,
      //   },
      //   where: {
      //     status: "published",
      //   },
      // });
      const data = await getAllProducts(token);

      return {
        title: "All Fragrances",
        data: data,
      };
    }
    case "men": {
      // const data = await prisma.product.findMany({
      //   where: {
      //     status: "published",
      //     category: "men",
      //   },
      //   select: {
      //     name: true,
      //     images: true,
      //     price: true,
      //     id: true,
      //     description: true,
      //   },
      // });
      const data = await getProductsByCategory(productCategory, token);

      return {
        title: "Fragrances for Him",
        data: data,
      };
    }
    case "women": {
      // const data = await prisma.product.findMany({
      //   where: {
      //     status: "published",
      //     category: "women",
      //   },
      //   select: {
      //     name: true,
      //     images: true,
      //     price: true,
      //     id: true,
      //     description: true,
      //   },
      // });
      const data = await getProductsByCategory(productCategory, token);

      return {
        title: "Fragrances for Her",
        data: data,
      };
    }
    case "unisex": {
      // const data = await prisma.product.findMany({
      //   where: {
      //     status: "published",
      //     category: "kids",
      //   },
      //   select: {
      //     name: true,
      //     images: true,
      //     price: true,
      //     id: true,
      //     description: true,
      //   },
      // });
      const data = await getProductsByCategory(productCategory, token);

      return {
        title: "For Him. For Her. For Everyone.",
        data: data,
      };
    }
    // case "kids": {
    //   const data = await prisma.product.findMany({
    //     where: {
    //       status: "published",
    //       category: "kids",
    //     },
    //     select: {
    //       name: true,
    //       images: true,
    //       price: true,
    //       id: true,
    //       description: true,
    //     },
    //   });

    //   return {
    //     title: "Products for Kids",
    //     data: data,
    //   };
    // }
    default: {
      return notFound();
    }
  }
}

export default async function CategoriesPage({
  params,
}: {
  params: { name: string };
}) {
  noStore();
  // Create API to call data product in spring boot 
  const { data, title } = await getData(params.name);
  return (
    <section>
      <h1 className="font-semibold text-3xl my-5">{title}</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}
