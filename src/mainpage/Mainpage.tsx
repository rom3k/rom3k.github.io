import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Col, Row, Image, ProgressBar } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
const { useEffect, useState, useRef } = React;

import './Mainpage.scss';
import Avatar from '../assets/avatar.jpg';
import Chevron from '../assets/chevron_down.svg';
import Js from '../assets/js.svg';
import html5 from '../assets/html5.svg';
import css3 from '../assets/css3.svg';

// TODO(rom3k): Use this for future scroll events
const sizes = {
    width: window.innerWidth || document.body.clientWidth,
    height: window.innerHeight || document.body.clientHeight,
};

const scrollTo = (ref: any) => {
    window.scrollTo(0, ref.current.offsetTop);
};

export default function MainPage() {
    // State for displaying transitions with little delay
    const [inProp, setInProp] = useState({
        fullName: false,
    });
    const ref = useRef(null);

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
                        onEntered={() =>
                            setInProp((state) => ({ fullName: true }))
                        }
                    >
                        <div>
                            <h2>Michał Romaszkin</h2>
                            <p>JavaScript developer</p>
                        </div>
                    </CSSTransition>
                    <CSSTransition
                        in={inProp.fullName}
                        timeout={500}
                        classNames="loadMore"
                        className="loadMore"
                    >
                        <div>
                            <img
                                className="loadMore__chevron"
                                src={Chevron}
                                onClick={() => scrollTo(ref)}
                            />
                        </div>
                    </CSSTransition>
                </Col>
            </Row>
            <Row
                className="justify-content-md-center rowDescription"
                id="description"
                ref={ref}
            >
                <Col md={4} className="rowDescription__column">
                    <h3 className="rowDescription__title">O mnie</h3>
                    <p className="rowDescription__paragraph">
                        Mam 23 lata. Pochodzę ze Szczecina, aktualnie mieszkam w
                        Poznaniu. W wolnym czasie uwielbiam grać w gry od
                        Paradox Interactive oraz opiekować się roślinami. Kiedyś
                        dużo grałem w siatkówkę, aktulanie lubię śledzić wyniki
                        w różnych ligach.
                    </p>
                    <p className="rowDescription__paragraph">
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
                    <h3 className="rowDescription__title">Umiejętności</h3>
                    <div className="skill">
                        <img
                            src={Js}
                            className="skill__image"
                            alt="Javascript logo"
                            title="JavaScript"
                        />
                        <ProgressBar now={65} className="skill__progressBar" />
                    </div>
                    <div className="skill">
                        <img
                            src={html5}
                            className="skill__image"
                            alt="HTML5 logo"
                            title="HTML5"
                        />
                        <ProgressBar now={75} className="skill__progressBar" />
                    </div>
                    <div className="skill">
                        <img
                            src={css3}
                            className="skill__image"
                            alt="CSS3 logo"
                            title="CSS3"
                        />
                        <ProgressBar now={70} className="skill__progressBar" />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
