import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import {OnOff} from "./components/OnOff/OnOff";
import {onChange, Select} from "./components/Select/Select";


function App() {
    console.log("APP rendering")

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapse] = useState<boolean>(true);
    let [switchOn, setSwitchOn] = useState<boolean>(false);

    return (
        <div className="App">

            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            <UncontrolledAccordion titleValue={"Menu"}/>
        </div>


        /*<div>
        <OnOff on={switchOn} onChange={ setSwitchOn}/>

        <Accordion titleValue={"Users"}
                       collapsed={accordionCollapsed}
                       onChange={ () => {setAccordionCollapse(!accordionCollapsed)}}/>
           <Accordion titleValue={"Users"}
                       collapsed={accordionCollapsed}
                       onChange={ () => {setAccordionCollapse(!accordionCollapsed)}}/>
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>

            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>*/
    );

    type PageTitlePropsType = {
        title: string
    }

    function PageTitle(props: PageTitlePropsType) {
        console.log("PageTitle rendering")
        return (
            <h1>{props.title}</h1>
        )
    }


}

export default App;
