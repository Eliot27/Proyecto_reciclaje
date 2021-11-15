import styles from "./listbuttons.module.css";
import { useHistory } from "react-router-dom";

//contine una lista de dos botones de color verde
const ListButtons = ({}) => {
  const history = useHistory();
  const onNews = () => {
    history.push("/home");
  };
  const onUltima = () => {
    history.push("/notice");
  };
  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
          <p className={styles.b1} onClick={onNews}>Noticias</p>
          <p className={styles.b2} onClick={onUltima}>Última hora</p>
      </div>
    </div>
  );
}

export default ListButtons;



