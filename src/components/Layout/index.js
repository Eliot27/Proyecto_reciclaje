import Banner from '../Banner';
import Nav from '../Navigator';
import style from './layout.module.css';

const Layout = ({ children }) => {
    return (
        <div>
            <Nav />
            <Banner />
            <main className={style.layout}>
                {children}
            </main>
        </div>
    );
};

export default Layout;