"use client";
import { Heart } from "lucide-react";
import Image from "next/image";
import { MdOutlineDelete } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { useEffect, useState } from "react";

const CartProducts = () => {
  const { cartCount, cartDetails, removeItem, totalPrice, redirectToCheckout } =
    useShoppingCart();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (cartCount !== undefined) {
      setIsLoading(false);
    }
  }, [cartCount]);
  const handleCheckout = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      const response = await redirectToCheckout();
      if (response.error) {
        console.error("Stripe Checkout Error:", response.error.message);
      }
    } catch (error) {
      console.error("Unexpected Error:", error);
    }
  };

  return (
    <div className="mx-auto w-[90%] py-8 max-w-[1500px]">
      <div className="flex flex-col lg:flex-row lg:gap-10 gap-4">
        <div className="w-full lg:w-[70%] h-auto px-4 p-4 lg:p-15 xl:p-20">
          <h1 className="font-semibold text-2xl mb-4">Bag</h1>
          <div className="flex flex-col gap-4">
            {isLoading ? (
              <div className="flex items-center justify-center h-96">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            ) : cartCount === 0 ? (
              <div className="flex flex-col items-center justify-center h-96">
                <Image
                  src="/emptycart.png"
                  alt="Empty Cart"
                  width={150}
                  height={150}
                  className="mb-6"
                />
                <h1 className="text-2xl font-semibold text-gray-800 mb-2">
                  Your cart is empty
                </h1>
                <p className="text-gray-600 mb-6">
                  Looks like you haven’t added anything to your cart yet.
                </p>
                <Button
                  className="bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800"
                  onClick={() => {
                    window.location.href = "/products"; // Redirect to products page
                  }}
                >
                  Start Shopping
                </Button>
              </div>
            ) : (
              <div>
                {Object.values(cartDetails ?? {}).map((entry) => (
                  <div
                    key={entry.id}
                    className="flex md:flex-row flex-col gap-5 mt-5 w-full border-b-2 py-5"
                  >
                    <div>
                      <Image
                        src={entry.image as string}
                        alt={entry.name}
                        width={200}
                        height={200}
                        quality={100}
                        className="mx-auto md:mx-0 "
                      />
                    </div>
                    <div className="w-full">
                      <div className="flex justify-between w-full">
                        <p>{entry.name}</p>
                        <p>MRP: ${entry.price}</p>
                      </div>
                      <p className="text-fourth mt-4">
                        Ashen Slate/Cobalt Bliss
                      </p>
                      <div className="space-x-16 text-fourth mt-1">
                        <span>Size L</span>
                        <span>Quantity 2</span>
                      </div>
                      <div className="flex gap-3  entrys-center mt-8">
                        <div>
                          <Heart className="hover:scale-105 duration-300 ease-in-out cursor-pointer" />
                        </div>
                        <div
                          className="hover:scale-105 duration-300 ease-in-out cursor-pointer"
                          onClick={() => removeItem(entry.id)}
                        >
                          <MdOutlineDelete size={25} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="w-full lg:w-[50%]  p-4 lg:p-15 xl:p-20 ">
          <div className="flex justify-center flex-col gap-4">
            <h1 className="font-semibold text-2xl mb-3">Summary</h1>
            <div className="flex justify-between w-full mb-2">
              <p>Subtotal</p>
              <p>${totalPrice?.toFixed(2) || "0.00"}</p>
            </div>
            <div className="flex justify-between w-full border-b-[1px] pb-2 mb-2">
              <p>Estimated Delivery & Handling</p>
              <p>Free</p>
            </div>
            <div className="flex justify-between w-full border-b-[1px] pb-4 mb-2">
              <p>Total</p>
              <p>${totalPrice}</p>
            </div>
            <div className="w-full mt-2   hover:scale-105 duration-300 ease-in-out cursor-pointer">
              <Button
                onClick={handleCheckout}
                className="w-full py-7 rounded-3xl cursor-pointer text-white bg-second hover:bg-hover"
              >
                Member Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
