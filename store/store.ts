import { toast } from "@/hooks/use-toast";
// import { useToast } from "@/hooks/use-toast"
import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartItem = {
  id: number;
  image: string;
  title: string;
  price: number;
};

type CartState = {
  cartArray: CartItem[];
  handleAddToCart: (product: CartItem) => void;
  handleRemoveFromCart: (id: number) => void;
  handleClearCart: () => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cartArray: [],
      handleAddToCart: (product: CartItem) => {
        const myArray = get().cartArray;
        set({ cartArray: [...myArray, product] });
        console.log("button clicked");
        const existingItemsInTheArray = myArray.find((item)=> item.id === product.id)
        if (existingItemsInTheArray){
            toast({
                variant: "destructive",
                title: "Product Already Added.😠",
            })
        } else {
            toast({ description: "Product Added To Cart Successfully. 👍" });
        }
      },
      handleRemoveFromCart: (id: number) => {
        const cartItems = get().cartArray;
        const filteredItems = cartItems.filter((item) => item.id !== id);
        set({ cartArray: filteredItems });
        toast({
          title: "✅Item Removed From Cart",
          description: "The item was removed from your cart.",
        });
      },
      handleClearCart: () => {
        set({ cartArray: [] });

        toast({ description: "Cart has been cleared successfully. 🛒" });
      },
    }),
    {
      name: "local-storage",
    }
  )
);
