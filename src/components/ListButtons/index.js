import styles from "./listbuttons.module.css";

//contine una lista de dos botones de color verde
const ListButtons = ({ onClick, onClick2 }) => {
  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
          <p className={styles.b1}>Noticias</p>
          <p className={styles.b2}>Última hora</p>
      </div>
    </div>
  );
}

export default ListButtons;



