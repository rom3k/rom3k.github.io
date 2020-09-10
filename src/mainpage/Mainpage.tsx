import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Col, Row, Image } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
const { useEffect, useState } = React;

import './Mainpage.scss';
import Avatar from '../assets/avatar.jpg';
import Chevron from '../assets/chevron_down.svg';

export default function MainPage() {
    const [inProp, setInProp] = useState<boolean>(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            console.log(window.scrollY);
        });
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
            <Row className="justify-content-md-center rowDescription">
                <Col md="auto" className="description" id="description">
                    <p>Dupa</p>
                </Col>
            </Row>
        </Container>
    );
}
