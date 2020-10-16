import React from 'react';
import './App.css';

function App() {
    return (
        <div>
            <Title/>
            <Reating/>
            <Accordion/>
            <Reating/>
        </div>
    );

    function Title() {
        return <>This is App component</>
    }

    function Reating() {
        return (
            <div>
                <Star/>
                <Star/>
                <Star/>
            </div>
        )
    }

    function Star() {
        return (
            <div>
                <div>star</div>
            </div>
        )
    }

    function Accordion() {
        return (
            <div>
            <AccordionTitle/>
            <AccordionBody/>
            </div>
    )
    }

    function AccordionTitle() {
        return (
            <div>
                <h3>Menu</h3>
            </div>
        )
    }

    function AccordionBody() {
        return (
            <div>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
        )
    }
}

export default App;
