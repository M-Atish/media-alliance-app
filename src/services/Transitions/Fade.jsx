import { CSSTransition, TransitionGroup } from "react-transition-group";

import { useLocation } from "react-router";

function Fade(props) {
    let location = useLocation();

    return (
        <TransitionGroup>
            <CSSTransition
                key={location.key}
                classNames="fade"
                timeout={500}
            >
                {props.children}
            </CSSTransition>
        </TransitionGroup>
    )
}

export default Fade;