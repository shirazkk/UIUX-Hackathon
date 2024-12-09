"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import ProductNotFound from "@/components/productnotfound";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Library Stool Chair",
    price: "$20.00",
    image: "/homepage/chair7.png",
    description:
      "A stylish and durable stool designed for libraries. Lightweight and easy to move. Perfect for long hours of use.",
  },
  {
    id: 2,
    name: "Library Stool Chair",
    price: "$20.00",
    image: "/homepage/chair8.png",
    description:
      "Ergonomically designed for comfort and support. Suitable for home and library settings. Compact and durable build.",
  },
  {
    id: 3,
    name: "Library Stool Chair",
    price: "$20.00",
    image: "/homepage/chair9.png",
    description:
      "Modern design with a sleek finish. Ideal for versatile seating needs. Easy to clean and maintain.",
  },
  {
    id: 4,
    name: "Library Stool Chair",
    price: "$20.00",
    image: "/homepage/chair10.png",
    description:
      "Crafted with high-quality materials for durability. Blends well with modern decor. Perfect for small spaces.",
  },
  {
    id: 5,
    name: "Library Stool Chair",
    price: "$20.00",
    image: "/homepage/chair5.png",
    description:
      "Affordable and sturdy stool for everyday use. Designed to support long hours of seating. Lightweight yet stable.",
  },
  {
    id: 6,
    name: "Library Stool Chair",
    price: "$20.00",
    image: "/homepage/chair2.png",
    description:
      "Comfortable and portable stool for versatile use. Minimalist design suitable for any space. Built to last long.",
  },
  {
    id: 7,
    name: "Library Stool Chair",
    price: "$20.00",
    image: "/homepage/chair3.png",
    description:
      "Compact stool with ergonomic seating. Ideal for study rooms or libraries. Easy to assemble and transport.",
  },
  {
    id: 8,
    name: "Library Stool Chair",
    price: "$20.00",
    image: "/homepage/chair7.png",
    description:
      "A perfect blend of style and function. Great for both home and office use. Comfortable and easy to store.",
  },
  {
    id: 9,
    name: "Library Stool Chair",
    price: "$20.00",
    image: "/homepage/chair1.png",
    description:
      "Sleek and simple design for modern spaces. Provides durable support. Affordable and versatile for any use.",
  },
  {
    id: 10,
    name: "Library Stool Chair",
    price: "$20.00",
    image: "/homepage/chair8.png",
    description:
      "Crafted to complement modern interiors. Durable and easy to clean. Lightweight and easy to carry.",
  },
  {
    id: 11,
    name: "Library Stool Chair",
    price: "$20.00",
    image: "/homepage/chair9.png",
    description:
      "Portable stool with a stylish finish. Sturdy and compact for any setup. Comfortable seating for long hours.",
  },
  {
    id: 12,
    name: "Library Stool Chair",
    price: "$20.00",
    image: "/homepage/chair6.png",
    description:
      "A versatile stool for multiple uses. Built with premium materials for extra strength. Designed for long-term use.",
  },
];

const featureproducts = [
  {
    id: 1,
    name: "Library Stool Chair",
    price: "$20",
    image: "/homepage/chair7.png",
  },
  {
    id: 2,
    name: "Library Stool Chair",
    price: "$20",
    image: "/homepage/chair8.png",
  },
  {
    id: 3,
    name: "Library Stool Chair",
    price: "$20",
    image: "/homepage/chair9.png",
  },
  {
    id: 4,
    name: "Library Stool Chair",
    price: "$20",
    image: "/homepage/chair10.png",
  },
  {
    id: 4,
    name: "Library Stool Chair",
    price: "$20",
    image: "/homepage/chair6.png",
  },
];

export default function ProductPage() {
  const params = useParams();
  const productId = Number(params.id);

  const product = products.find((div) => div.id === productId);

  if (!product) {
    return <ProductNotFound />;
  }

  return (
    <div className="w-screen ">
      <div className="w-screen overflow-hidden mx-auto max-w-[1500px]">
        <div className="px-5  py-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-5 xl:gap-0 ">
            {/* Product Image */}
            <div className="relative h-[300px] md:h-[500px] w-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                quality={100}
                className="object-contain rounded-md"
              />
            </div>
            {/* Product Details */}
            <div className="flex flex-col gap-6 md:gap-8 w-full md:justify-start  md:items-start justify-center items-center md:w-[90%] lg:w-[70%] overflow-hidden">
              <h1 className="text-center md:text-left text-5xl sm:text-6xl font-semibold break-words">
                {product.name}
                
              </h1>
              <div>
                <Badge className="bg-second hover:bg-hover px-4 md:px-6 py-2 md:py-3 rounded-2xl text-white">
                  {product.price} USD
                </Badge>
              </div>
              <div>
                <p className="text-gray-600 border-t-[1px] py-4 md:py-8 text-center md:text-left break-words">
                  {product.description.split(" ").slice(0, -9).join(" ")} <br />
                  {product.description.split(" ").slice(-9)}
                </p>
                <Button className="bg-second py-4 mx-auto  md:mx-0 md:py-6 px-4 md:px-6 hover:bg-hover text-white flex items-center w-fit">
                  <ShoppingCart className="mr-1" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature-Products */}
      <div className="px-4 py-14 max-w-[1500px] mx-auto">
        <div className="w-[85%] relative flex justify-between items-end gap-6 mx-auto">
          <h1 className="text-3xl  tracking-widest font-bold">
            Featured Products
          </h1>
          <Link href="/products">
            <Button
              variant="link"
              className=" hover:text-hover font-bold underline underline-offset-8 text-black"
            >
              View all
            </Button>
          </Link>
        </div>

        <div className="w-[85%] mx-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 gap-6 mt-7">
          {featureproducts.map((product) => (
            <div key={product.id} className="flex flex-col">
              <div className="relative flex justify-center items-center w-full h-64 object-center rounded-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={160}
                  height={160}
                  quality={100}
                  className="w-full h-full hover:scale-105 duration-300 ease-in-out cursor-pointer"
                />
              </div>
              <div className="flex justify-between items-center mt-4">
                <h2 className="text-left hover:text-second text-black text-base font-medium">
                  {product.name}
                </h2>
                <p className="text-base text-button2 font-bold mt-2">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
