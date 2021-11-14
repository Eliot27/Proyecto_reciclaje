import text from './components/text';
import styles from "./home.module.css";

const Home = () => {
    return (
        <div className={styles.home}>
            <h1>{text.title}</h1>
            <p>{text.description}</p>
        </div>
    );
};

export default Home;



