import Banner from '../Banner';
import Nav from '../Navigator';
import ListButtons from '../ListButtons';
import style from './layout.module.css';

const Layout = ({ children }) => {
    return (
        <div className={style.root}>
            <Nav />
            <Banner />
            <ListButtons/>
            <main className={style.layout}>
                {children}
            </main>
            <footer className={style.footer}>
                <div className={style.seccion1}>
                    <p className={style.p1}>Política de Tratamiento de la Información Personal</p>
                    <p className={style.p1}>Política de Cookies</p>    
                    <p className={style.p3}>Términos de uso y privacidad </p>                       
                </div>
                <div className={style.seccion2}>
                    <p className={style.name}>© Ecolombia. Todos los derechos reservados. 2021</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;