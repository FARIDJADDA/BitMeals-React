import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button}>
      <spans className={classes.icon}>
        <CartIcon />
      </spans>
      <spans>Mon Panier</spans>
      <spans>3</spans>
    </button>
  );
};

export default HeaderCartButton;
