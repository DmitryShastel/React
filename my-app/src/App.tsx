import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating";



function App() {
    return (
        <div>
           {/* <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friends"}/>
            Article 1
            <Rating value={3}/>*/}
            <Accordion titleValue={"Menu"}/>
            <Accordion titleValue={"Users"}/>
           {/* Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>*/}
        </div>
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