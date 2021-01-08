import React, {useState} from "react";

type PropsType = {
    on: boolean
    onChange: (on: boolean) => void
}

export function OnOff (props: PropsType) {
    console.log("on: " + props.on);


    const onStyle = {
        margin: "10px 2px 0 0",
        width:  "30px",
        height: "20px",
        border: "2px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.on ? "green" : "white",
    };
    const offStyle = {
        width:  "30px",
        height: "20px",
        border: "2px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.on ? "white" : "red",
    };
    const indicatorStyle = {
       marginLeft: "5px",
        width: "10px",
        height: "10px",
        borderRadius: "10px",
        border: "2px solid black",
        display: "inline-block",
        backgroundColor: props.on ? "green" : "red",
    };

    return (
        <div>
            <div style={onStyle} onClick={ ()=> { props.onChange(true)} }>On</div>
            <div style={offStyle} onClick={ ()=> { props.onChange(false)} }>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}






