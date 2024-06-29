import { PropsWithChildren, createContext, useContext, useState } from "react";
import { CartItem, Product } from "../../types";
import { randomUUID } from "expo-crypto";

type CartType = {
  items: CartItem[];
  addItem: (product: Product, size: CartItem["size"]) => void;
  updateQuantity: (itemId: string, amount: -1 | 1) => void;
  total: number;
};

export const CartContext = createContext<CartType>({
  items: [], //dummy data
  addItem: () => {},
  updateQuantity: () => {},
  total: 0,
});

//PropsWithChildren declares type for a children
const CartProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<CartItem[]>([]); // here we declared type

  const addItem = (product: Product, size: CartItem["size"]) => {
    //to check if alreadu item present
    const exisitingItem = items.find(
      (item) => item.product == product && item.size == size
    );
    if (exisitingItem) {
      updateQuantity(exisitingItem.id, 1);
      return;
    }

    const newCartItem: CartItem = {
      id: randomUUID(),
      product,
      product_id: product.id,
      size: size,
      quantity: 1,
    };

    setItems([newCartItem, ...items]);
  };

  const updateQuantity = (itemId: string, amount: -1 | 1) => {
    setItems(
      items
        .map(
          (item) =>
            item.id !== itemId
              ? item
              : { ...item, quantity: item.quantity + amount } //destructring
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const total = items.reduce(
    (sum, item) => (sum += item.product.price * item.quantity),
    0
  );

  return (
    <CartContext.Provider value={{ items, addItem, updateQuantity, total }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
