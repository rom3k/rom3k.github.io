import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Col, Row, Image, ProgressBar } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
const { useEffect, useState } = React;

import './Mainpage.scss';
import Avatar from '../assets/avatar.jpg';
import Chevron from '../assets/chevron_down.svg';

export default function MainPage() {
    const [inProp, setInProp] = useState<boolean>(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {});
    }, []);
    return (
        <Container fluid>
            <Row className="justify-content-md-center mainRow">
                <Col md="auto" className="main">
                    <CSSTransition
                        in={true}
                        appear={true}
                        timeout={1000}
                        classNames="avatar"
                    >
                        <Image src={Avatar} roundedCircle />
                    </CSSTransition>
                    <CSSTransition
                        in={true}
                        appear={true}
                        classNames="fullName"
                        timeout={2000}
                        onEntered={() => {
                            setInProp(true);
                        }}
                    >
                        <div>
                            <h2>Michał Romaszkin</h2>
                            <p>JavaScript developer</p>
                        </div>
                    </CSSTransition>
                    <CSSTransition
                        in={inProp}
                        timeout={500}
                        classNames="loadMore"
                        className="loadMore"
                    >
                        <a href="#description">
                            <img className="loadMore__chevron" src={Chevron} />
                        </a>
                    </CSSTransition>
                </Col>
            </Row>
            <Row
                className="justify-content-md-center rowDescription"
                id="description"
            >
                <Col md={4} className="rowDescription__column">
                    <h3>O mnie</h3>
                    <p>
                        Mam 23 lata. Pochodzę ze Szczecina, aktualnie mieszkam w
                        Poznaniu. W wolnym czasie uwielbiam grać w gry od
                        Paradox Interactive oraz opiekować się roślinami. Kiedyś
                        dużo grałem w siatkówkę, aktulanie lubię śledzić wyniki
                        w różnych ligach.
                    </p>
                    <p>
                        W technikum poznałem Angulara - od tego frameworka
                        zaczęła się moja przygoda z techologiami webowymi.
                        Programuję głównie w JavaScript (TypeScript). Staram się
                        rozwijać równolegle w stronę frontu i backu.
                    </p>
                </Col>
                <Col
                    md={{ span: 4, offset: 2 }}
                    className="rowDescription__column"
                >
                    <h3>Umiejętności</h3>
                </Col>
            </Row>
        </Container>
    );
}
