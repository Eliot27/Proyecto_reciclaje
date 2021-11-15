import style from './banner.module.css';

const Banner = ({}) => {
  return (
    <div className={style.rootimg}>
      <img className={style.imgban} src={"/assets/banner1.png"} alt={"arboles"} />      
    </div>
  );
};

export default Banner;