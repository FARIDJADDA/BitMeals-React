import { useContext } from "react";
import CartContext from "../../store/cart-context";

import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <spans className={classes.icon}>
        <CartIcon />
      </spans>
      <spans>Mon Panier</spans>
      <spans>{numberOfCartItems}</spans>
    </button>
  );
};

export default HeaderCartButton;
