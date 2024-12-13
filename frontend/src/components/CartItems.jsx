import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { TbTrash } from "react-icons/tb";

const CartItems = () => {
  const { all_products, removeFromCart, cartItems } = useContext(ShopContext);
  return (
    <section className="max_padd_container pt-28">
      <table className="w-full mx-auto">
        <thead>
          <tr className="bg-slate-900/10 regular-18 sm:regular-22 text-start py-12">
            <th className="p-1 py-2">Products</th>
            <th className="p-1 py-2">Title</th>
            <th className="p-1 py-2">Price</th>
            <th className="p-1 py-2">Quantity</th>
            <th className="p-1 py-2">Total</th>
            <th className="p-1 py-2">Remove</th>
          </tr>
        </thead>
        <tbody>
          {all_products.map((e) => {
            if (cartItems[e.id] > 0) {
              return (
                <tr
                  key={e.id}
                  className="border-b border-slate-900/20 p-6 medium-14 text-center text-gray-30">
                  <td className="flexCenter">
                    <img
                      src={e.image}
                      alt="prdctImg"
                      height={40}
                      width={40}
                      className="rounded-lg ring-1 ring-slate-900/5 my-1"
                    />
                  </td>
                  <td>
                    <div className="line-clamp-1">{e.name}</div>
                  </td>
                  <td>${e.new_price}</td>
                  <td className="w-16 h-16 bg-white">{cartItems[e.id]}</td>
                  <td>
                    <div>${e.new_price * cartItems[e.id]}</div>
                  </td>
                  <td>
                    <div className="bold-22 pl-12">
                      <TbTrash onClick={() => removeFromCart(e.id)} />
                    </div>
                  </td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>
      <div className="flex flex-col gap-20 my-16 p-8 rounded-md md:flex-row bg-white w-full max-w-[660px]">
        <div className="flex flex-col gap-10">
          <h4 className="bold-20">Order Summary</h4>
          <div>
            <div className="flexBetween py-4">
              <h4 className="medium-16 ">Subtotal:</h4>
              <p className="text-gray-30 font-semibold">${0}</p>
            </div>
            <hr />
            <div className="flexBetween py-4">
              <h4 className="medium-16 ">Shipping Fee</h4>
              <p className="text-gray-30 font-semibold">Free</p>
            </div>
            <hr />
            <div className="flexBetween py-4">
              <h4 className="medium-16 bold-22">Total</h4>
              <p className="bold-22">${0}</p>
            </div>
          </div>
          <button className="btn_dark_rounded w-44">Checkout</button>
          <div className="flex flex-col gap-10">
            <h4 className="bold-20 capitalize">Enter coupon code here</h4>
            <div className="flexBetween pl-5 h-12 bg-primary rounded-full ring-1 ring-slate-900/10">
              <input
                type="text"
                placeholder="Coupon Code"
                className="bg-transparent border-none outline-none"
              />
              <button className="btn_dark_rounded">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartItems;
