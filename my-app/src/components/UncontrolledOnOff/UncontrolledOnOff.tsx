import React, {useState} from "react";

type PropsType = {
    onChange: (on: boolean) => void
}

function UncontrolledOnOff (props: PropsType) {
    console.log("OnOff rendered");

    let [on, setOn] = useState(false);

    const onStyle = {
        margin: "10px 2px 0 0",
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

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }


    return (
        <div>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={offClicked}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export default UncontrolledOnOff;




