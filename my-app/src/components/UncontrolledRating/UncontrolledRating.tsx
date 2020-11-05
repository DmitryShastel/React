import React, {useState} from "react";

type RatingPropsType = {
}

function UncontrolledRating(props: RatingPropsType) {
    console.log("Rating rendering")

    let [value, setSelected] = useState(0)
    const buttonStyle = {
        margin: "0 5px 0 5px",
    }

    return (
        <div>
            <Star selected={value > 0}/>
            <button  style={buttonStyle} onClick={ ()=> { setSelected(1) }}>1</button>
            <Star selected={value > 1}/>
            <button style={buttonStyle} onClick={ ()=> { setSelected(2) }}>2</button>
            <Star selected={value > 2}/>
            <button style={buttonStyle} onClick={ ()=> { setSelected(3) }}>3</button>
            <Star selected={value > 3}/>
            <button style={buttonStyle} onClick={ ()=> { setSelected(4) }}>4</button>
            <Star selected={value > 4}/>
            <button style={buttonStyle} onClick={ ()=> { setSelected(5) }}>5</button>

        </div>
    )

}


type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    if (props.selected === true) {
        return <span> <b>star</b></span>
    } else {
        return <span> star</span>
    }

}

export default UncontrolledRating;