import React, {useState} from 'react';
import './App.css';
import {RatingValueType} from "./components/Rating/Rating";
import {UncontrolledOnOffMemo} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledAccordionMemo} from "./components/UncontrolledAccordion/UncontrolledAccordion";


function App() {
    console.log("APP rendering")

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapse] = useState<boolean>(true);
    let [switchOn, setSwitchOn] = useState<boolean>(false);

    return (
        <div className="App">

            <UncontrolledOnOffMemo onChange={setSwitchOn}/> {switchOn.toString()}
            <UncontrolledAccordionMemo titleValue={"Menu"}/>
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
