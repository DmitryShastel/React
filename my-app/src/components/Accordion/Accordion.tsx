import React from "react";

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    /**
     * Elements are showed when accordion is opened (not collapsed)
     */
    items: {}
    /**
     * Elements are showed when is opened. Each item should be ItemType
     */
    onClick: (value: any) => void
    /**
     * optional color of header text
     */
    color?: string
}

export function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            color={props.color}
                            onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody/>}
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

