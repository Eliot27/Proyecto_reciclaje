import { Router, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

//paginas principales
import Home from "containers/Home";
import Part from "containers/Part";

export const history = createBrowserHistory();

const AppRouter = () => {    
    return (
        <Router history={history}>
            <Switch>
                {/* Rutas publicas */}               
                <PrivateRoute exact path="/" component={Home}/>
                <PrivateRoute exact path="/part" component={Part}/>
                <Redirect to={{ pathname: "/" }} />
            </Switch>
        </Router>
    );
};

export default AppRouter;