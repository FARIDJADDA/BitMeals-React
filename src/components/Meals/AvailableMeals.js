import Card from "../UI/Card";

import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    title: "Sushi",
    description: "Lorem ipsum dolor sit amet, ",
    price: 22.99,
  },
  {
    id: "m2",
    title: "Schnitzel",
    description: "Lorem ipsum dolor sit amet,",
    price: 16.5,
  },
  {
    id: "m3",
    title: "Barbecue Burger",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae arcu feugiat",
    price: 12.99,
  },
  {
    id: "m4",
    title: "Green Bowl",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae arcu feugiat",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id} // this is new!
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
