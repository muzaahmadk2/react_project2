import { useContext } from "react";
import CartContext from "../../Store/Cart-Context";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const crtCtx = useContext(CartContext);

  const cartItemAddHandler = (item) => {
    console.log(item.medium)
    crtCtx.addItem({...item,quantity:1});
  };
  const cartItemRemoveHandler = (id,size) => {
    crtCtx.removeItem(id,size);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {crtCtx.items.map((item) => (
        <CartItem
          key={item.size+item.id}
          name={item.name}
          price={item.prise}
          amount={item.quantity}
          size={item.size}
          onRemove={cartItemRemoveHandler.bind(null,item.id,item.size)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{crtCtx.totalAmount}</span>
      </div>
      <div className={classes.action}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
