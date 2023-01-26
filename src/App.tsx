import React from 'react';
import { FullPage, Slide } from 'react-full-page';
import { Main, About, Projects, Cv } from './pages/index';
import { Page } from './components/index';

function App() {
    return (
        <>
            <FullPage duration={50}>
                <Slide>
                    <Main />
                </Slide>

                <Slide>
                    <About />
                </Slide>

                <Slide>
                    <Projects />
                </Slide>

                <Slide>
                    <Cv />
                </Slide>
            </FullPage>

            <Page />
        </>
    );
}

export default App;
