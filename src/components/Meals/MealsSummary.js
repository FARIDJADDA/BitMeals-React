import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Des plats délicieux, livrés à domicile</h2>
      <p>
        Choisissez votre repas préféré parmi notre large sélection de repas
        disponibles et profitez d'un délicieux déjeuner ou dîner à la maison.
      </p>
      <p>
        Tous nos repas sont cuisinés avec des ingrédients de haute qualité, en
        flux tendu et bien sûr par des chefs expérimentés !
      </p>
    </section>
  );
};

export default MealsSummary;
