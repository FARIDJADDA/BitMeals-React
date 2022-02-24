import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <spans className={classes.icon}>
        <CartIcon />
      </spans>
      <spans>Mon Panier</spans>
      <spans>3</spans>
    </button>
  );
};

export default HeaderCartButton;
