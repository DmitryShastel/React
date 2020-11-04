import React, {useState} from "react";

type PropsType = {
    /*on: boolean*/
}

function OnOff (props: PropsType) {
    console.log("OnOff rendered");

    let [on, setOn] = useState(false);

    const onStyle = {
        margin: "10px 2px 0 5px",
        width:  "30px",
        height: "20px",
        border: "2px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green" : "white",
    };
    const offStyle = {
        width:  "30px",
        height: "20px",
        border: "2px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "white" : "red",
    };
    const indicatorStyle = {
       marginLeft: "5px",
        width: "10px",
        height: "10px",
        borderRadius: "10px",
        border: "2px solid black",
        display: "inline-block",
        backgroundColor: on ? "green" : "red",
    };

    return (
        <div>
            <div style={onStyle} onClick={ ()=> { setOn(true)} }>On</div>
            <div style={offStyle} onClick={ ()=> { setOn(false)} }>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export default OnOff;




