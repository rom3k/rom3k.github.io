import React from 'react';
import ReactDOM from 'react-dom';
import { Spinner, Navbar } from 'react-bootstrap';
import loadable from '@loadable/component';
const { useEffect, useState } = React;

const MainPage = loadable(
    () =>
        import(
            /* webpackChunkName: "MainPageComponent" */ './mainpage/Mainpage'
        )
);

export default function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 800);
    }, []);

    if (loading) {
        return (
            <div
                style={{
                    display: 'flex',
                    width: '100vw',
                    height: '100vh',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Spinner animation="border" variant="secondary">
                    <span className="sr-only">Ładowanie...</span>
                </Spinner>
            </div>
        );
    }
    return (
        <>
            <Navbar sticky="top">
                <Navbar.Brand>Michał Romaszkin</Navbar.Brand>
            </Navbar>
            <MainPage />
        </>
    );
}
