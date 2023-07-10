import React from 'react';
import { FullPage, Slide } from 'react-full-page';
import { Main, About, Projects, Resume } from './pages/index';
import { Main, About, Projects, Resume, Contact } from './pages/index';
import { Page, Level } from './components/index';

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
