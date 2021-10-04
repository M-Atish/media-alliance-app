import "./dashboard.scss";
import "../../App.scss"

import News from "../News/News";

import { Route, Switch,} from "react-router-dom";
import { useLocation } from 'react-router';

const Dashboard = () => {
    return (
        <AnimateNews />
    )
}

function AnimateNews() {
    let location = useLocation();

    return (
            <Switch location={location}>
                <Route path="/news" component={News} />
            </Switch>
    )
}

export default Dashboard
