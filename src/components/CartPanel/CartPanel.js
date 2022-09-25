import { faArrowRight, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartItem from "../CartItem/CartItem";

const CartPanel = (props) => {
  console.log(props.cart);
  const price = props.cart.reduce((p,c) => p + c.price, 0);
  let shippingCharge = 0;
  if(price !== 0) shippingCharge = 120;
  const tax = (price) * 0.1;
  const total = price + tax + shippingCharge;
  return (
    <div className="bg-[#FFE0B4] h-screen sticky top-0 overflow-y-scroll">
      <h1 className="text-3xl text-center pt-10">Order Summary</h1>
      <div className="mt-10 space-y-3">
        {
          props.cart.map(item => <CartItem item={item}></CartItem>)
        }
      </div>
      <div className="mt-[30px] mx-[30px] leading-10">
        <p>Selected Item:{props.cart.length}</p>
        <p>Total Price:${price.toFixed(2)}</p>
        <p>Total Shipping Charge: ${shippingCharge.toFixed(2)}</p>
        <p>Tax: ${tax.toFixed(2)}</p>
        <h1 className="text-xl">Grand Total: ${total.toFixed(2)}</h1>
      </div>

      <button onClick={props.handleClear} className="mt-10 block w-3/4 mx-auto bg-[#FF3030] text-white h-12 hover:bg-orange-500 rounded-md">
        Clear Cart <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
      </button>
      <button className="block w-3/4 mx-auto bg-[#FF9900] text-white h-12 hover:bg-red-500 mt-6 mb-20 rounded-md"> 
        Review Order <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default CartPanel;
