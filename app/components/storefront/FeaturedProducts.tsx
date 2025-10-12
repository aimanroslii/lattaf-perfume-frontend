import prisma from "@/app/lib/db";
import { LoadingProductCard, ProductCard } from "./ProductCard";
import { Suspense } from "react";
import { unstable_noStore as noStore } from "next/cache";

async function getData() {
  const data = await prisma.product.findMany({
    where: {
      status: "published",
      isFeatured: true,
    },
    select: {
      id: true,
      name: true,
      description: true,
      images: true,
      price: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 3,
  });

  return data;
}

//API on get featured items and display only three, async

export function FeaturedProducts() {
  return (
    <>
      <h2 className="text-2xl font-extrabold tracking-tight mt-28">Trending</h2>
      <h3 className="tracking-tight mt-2">Discover our captivating bestselling fragrances - nature's finest offerings woven into modern luxury</h3>
      <Suspense fallback={<LoadingRows />}>
        <LoadFeaturedproducts />
      </Suspense>
    </>
  );
}

async function LoadFeaturedproducts() {
  noStore();
  const data = await getData();

  return (
    <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {data.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
}

function LoadingRows() {
  return (
    <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      <LoadingProductCard />
      <LoadingProductCard />
      <LoadingProductCard />
    </div>
  );
}
