import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Card = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onHideCart={props.onHideCart}>-
      {cartItems}
      <div className={classes.total}>
        <span>Montant total</span>
        <span>39.65</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Fermer
        </button>
        <button className={classes.button}>Commander</button>
      </div>
    </Modal>
  );
};

export default Card;
