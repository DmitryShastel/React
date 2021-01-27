import React, {useReducer} from "react";
import {reducer, TOGLE_COLLAPSED} from "./reducer";

type AccordionPropsType = {
    titleValue: string
}
export type ActionPropsType = {
    type: string
}


export function UncontrolledAccordion(props: AccordionPropsType) {
    console.log("UncontrolledAccordion rendering")

    let [collapsed, dispatch] = useReducer(reducer,{collapsed: true})

    return (
        <div>
                <AccordionTitle title={props.titleValue} onClick={() => { dispatch({type: TOGLE_COLLAPSED}) }}
            />
            {!collapsed && <AccordionBody/>}
        </div>
    )
}


type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <div>
            <h3 onClick={() => { props.onClick() } }>{props.title}</h3>
        </div>
    )
}

function AccordionBody() {
    console.log("AccordionBody rendering")
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

