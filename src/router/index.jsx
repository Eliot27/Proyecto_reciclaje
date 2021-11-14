import { Router, Switch, Redirect, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

//paginas principales
import Home from "containers/Home";
import Notice from "containers/Part";
import Ques from "containers/Ques";

export const history = createBrowserHistory();

//ruta publica
const PublicRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            localStorage.getItem("token") ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/",
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
);

const AppRouter = () => {    
    return (
        <Router history={history}>
            <Switch>
                {/* Rutas publicas */}               
                <PublicRoute exact path="/" component={Home}/>
                <PublicRoute exact path="/notice" component={Notice}/>
                <PublicRoute exact path="/ques" component={Ques}/>
                <Redirect to={{ pathname: "/" }} />
            </Switch>
        </Router>
    );
};

export default AppRouter;