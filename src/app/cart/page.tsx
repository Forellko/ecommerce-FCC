import { getCart } from "@/lib/db/cart";
import CartEntry from "./CartEntry";

export const metadata = {
  title: "Your Cart - Flowmazon",
};

export default async function CartPage() {
  const cart = await getCart();

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Shopping cart</h1>
      {cart?.items.map((cartItem) => {
        return <CartEntry cartItem={cartItem} key={cartItem.id} />;
      })}
    </div>
  );
}
