import styles from "./home.module.css";

const Home = () => {
    return (
        <main className={styles.home}>
            <h2 className={styles.names}><span>Noticias Destacadas</span></h2>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <img className={styles.imgbot} src={"/assets/botes.png"} alt={"arboles"} />
                    <h3 className={styles.titleimg}>Nuevos códigos para reciclar</h3>
                    <p className={styles.psdimg}>Conozca los nuevos códigos para reciclar, a partir de este año 2021 el Gobierno Nacional de Colombia estableció este nuevo código de colores para la separación de residuos y evitar una confusión entre los colombianos LEER MÁS... </p>
                </div>
                <div className={styles.card}>
                    <img className={styles.imgbot} src={"/assets/botes.png"} alt={"arboles"} />
                    <h3 className={styles.titleimg}>Nuevos códigos para reciclar</h3>
                    <p className={styles.psdimg}>Conozca los nuevos códigos para reciclar, a partir de este año 2021 el Gobierno Nacional de Colombia estableció este nuevo código de colores para la separación de residuos y evitar una confusión entre los colombianos LEER MÁS... </p>
                </div>
                <div className={styles.card}>
                    <img className={styles.imgbot} src={"/assets/botes.png"} alt={"arboles"} />
                    <h3 className={styles.titleimg}>Nuevos códigos para reciclar</h3>
                    <p className={styles.psdimg}>Conozca los nuevos códigos para reciclar, a partir de este año 2021 el Gobierno Nacional de Colombia estableció este nuevo código de colores para la separación de residuos y evitar una confusión entre los colombianos LEER MÁS... </p>
                </div>
            </div>
            <h2 className={styles.names}><span>Ecologia en el 2021</span></h2>
            <div className={styles.noticeco}>
                <img className={styles.imgco} src={"/assets/banner2.png"} alt={"arboles"} />
                <p className={styles.pco}>
                    La deforestación es un grave problema para la salud del planeta el cual nos afecta a todos y,
                    pese a que los intentos por frenarla logran resultados,
                    estos son muy minimos y no consiguen revertir la tendencia.
                    Recordemos la importancia de los arboles
                    LEER MÁS... </p>
            </div>

            <div className={styles.namexnoti}>
                <h2 className={styles.namesx}><span>NOTICIAS RECIENTES</span></h2>
                <h5 className={styles.ver}>ver mas . . .</h5>
            </div>
            <div className={styles.navnoti}>
                <div className={styles.cardnoti1}>
                    <div className={styles.hxnotice}>
                        <img className={styles.imgbot} src={"/assets/botes.png"} alt={"arboles"} />
                        <h3 className={styles.titleimg}>Nuevos códigos para reciclar</h3>
                        <p className={styles.psdimg}>Conozca los nuevos códigos para reciclar, a partir de este año 2021 el Gobierno Nacional de Colombia estableció este nuevo código de colores para la separación de residuos y evitar una confusión entre los colombianos LEER MÁS... </p>
                    </div>
                    <div className={styles.hxnotice}>
                        <img className={styles.imgbot} src={"/assets/botes.png"} alt={"arboles"} />
                        <h3 className={styles.titleimg}>Nuevos códigos para reciclar</h3>
                        <p className={styles.psdimg}>Conozca los nuevos códigos para reciclar, a partir de este año 2021 el Gobierno Nacional de Colombia estableció este nuevo código de colores para la separación de residuos y evitar una confusión entre los colombianos LEER MÁS... </p>
                    </div>
                </div>
                <div className={styles.cardnoti2}>
                    <div className={styles.vxnotice}>
                        <div className={styles.hvxnot}>
                        <h3 className={styles.titleimg}>Nuevos códigos para reciclar</h3>
                        <p className={styles.psdimg}>Conozca los nuevos códigos para reciclar, a partir de este año 2021 el Gobierno Nacional de Colombia estableció este nuevo código de colores para la separación de residuos y evitar una confusión entre los colombianos LEER MÁS... </p>
                        </div>                        
                        <img className={styles.imgbot} src={"/assets/botes.png"} alt={"arboles"} />
                    </div>
                    <div className={styles.vxnotice}>
                        <div className={styles.hvxnot}>
                        <h3 className={styles.titleimg}>Nuevos códigos para reciclar</h3>
                        <p className={styles.psdimg}>Conozca los nuevos códigos para reciclar, a partir de este año 2021 el Gobierno Nacional de Colombia estableció este nuevo código de colores para la separación de residuos y evitar una confusión entre los colombianos LEER MÁS... </p>
                        </div>                        
                        <img className={styles.imgbot} src={"/assets/botes.png"} alt={"arboles"} />
                    </div>
                </div>
            </div>

        </main>
    );
};

export default Home;



