import styles from './banner.module.css';

const Banner = ({}) => {
  return (
    <div className={styles.rootimg}>
      <img className={styles.imgban} src={"/assets/banner1.png"} alt={"arboles"} />      
    </div>
  );
};

export default Banner;