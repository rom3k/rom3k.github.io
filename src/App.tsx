import React from 'react';
import ReactDOM from 'react-dom';
import Spinner from 'react-bootstrap/Spinner';
import loadable from '@loadable/component';
const { useEffect, useState } = React;

const MainPage = loadable(
    () =>
        import(
            /* webpackChunkName: "MainPageComponent" */ './main_page/Mainpage'
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
                <Spinner animation="border" />
            </div>
        );
    }
    return <MainPage />;
}
