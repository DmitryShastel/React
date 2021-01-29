import React from "react";

export type ItemPropsType = {
    title: string
    value: any
}
export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    //items: string[]
    items: ItemPropsType[]
    onClick: (value: any) => void
    color?: string
}


export function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            color={props.color}
                            onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
    color?: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <div>
            <h3 style = {{color: props.color ? props.color : "black"}}
                onClick = {(e) => props.onChange()}>-- {props.title} --</h3>
        </div>
    )
}

export type AccordionBodyPropsType = {
    //items: string[]
    items: ItemPropsType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log("AccordionBody rendering")
    return (<ul>
        {props.items.map( (i,index) =>
            <li onClick={() => {props.onClick(i.value) }} key={index}>{i.title}</li>)}
    </ul>)
}

