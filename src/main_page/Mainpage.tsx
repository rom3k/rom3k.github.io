import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
const { useEffect, useState } = React;

import './Mainpage.scss';

export default function MainPage() {
    const [inProp, setInProp] = useState(false);
    return (
        <Container fluid>
            <CSSTransition
                in={true}
                appear={true}
                timeout={1000}
                classNames="header"
                class="header"
            >
                <div>Dupa</div>
            </CSSTransition>
        </Container>
    );
}
