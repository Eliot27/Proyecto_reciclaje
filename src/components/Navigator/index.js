import style from './navigator.module.css';

const Navigator = ({ }) => {
  return (
    <nav className={style.nav}>
      <div className={style.img}>
        <img className={style.logo} src={"/assets/logorecicle.png"} alt={"logo"} />
        <h1 className={style.title}>ECOLOMBIA</h1>
      </div>
      <div className={style.search}>
        <input type="text" placeholder="Search" className={style.inputSearch} />
        <button className={style.searchButton}>Buscar</button>
      </div>
      <div className={style.nav_list}>
        <div className={style.text}>
          <p className={style.psd1}>Noticias</p>
        </div>
        <div className={style.text}>
          <p className={style.psd2}>¿Preguntas?</p>
        </div>
      </div>
      <div className={style.imgbotton}>
        <img className={style.logoverde} src={"/assets/botton.png"} alt={"bottonverde"} />
        <div className={style.psd3}>
          <p className={style.buttontittle}>Contáctenos</p>
        </div>
      </div>



    </nav>

  );
};

export default Navigator;