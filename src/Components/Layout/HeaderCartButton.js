import { useContext } from "react";
import CartContext from "../../Store/Cart-Context";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const noOfCartItems = cartCtx.items.length;

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
       
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{noOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
