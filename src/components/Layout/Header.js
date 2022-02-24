import classes from "./Header.module.css";

import mealsImage from "../../assets/bufetmeals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>BitMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="Un buffet à volonté" className={classes['main-image img']} />
      </div>
    </>
  );
};

export default Header;
