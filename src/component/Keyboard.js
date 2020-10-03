import React from "react"
import "./style/Keyboard.css"

const Keyboard = ({addInput}) => {

    return(
        <div className="keyboard">
            <div>
                <button className="button-back" onClick={()=>{addInput("AC")}}>AC</button>
                <button className="button-back" onClick={()=>{addInput("C")}}><i className="fas fa-arrow-circle-left"></i></button>
            </div>
            <div>
                <button className="button" onClick={()=>{addInput("7")}}>7</button>
                <button className="button" onClick={()=>{addInput("8")}}>8</button>
                <button className="button" onClick={()=>{addInput("9")}}>9</button>
                <button className="button-1" onClick={()=>{addInput("/")}}>/</button>
            </div>
            <div>
                <button className="button" onClick={()=>{addInput("4")}}>4</button>
                <button className="button" onClick={()=>{addInput("5")}}>5</button>
                <button className="button" onClick={()=>{addInput("6")}}>6</button>
                <button className="button-1" onClick={()=>{addInput("*")}}>X</button>
            </div>
            <div>
                <button className="button" onClick={()=>{addInput("1")}}>1</button>
                <button className="button" onClick={()=>{addInput("2")}}>2</button>
                <button className="button" onClick={()=>{addInput("3")}}>3</button>
                
                <button className="button-1" onClick={()=>{addInput("-")}}>-</button>
            </div>
            <div>
                <button className="button-hasil" onClick={()=>{addInput("0")}}>0</button>
                <button className="button-hasil" onClick={()=>{addInput(".")}}>.</button>
                <button className="button-hasil1" onClick={()=>{addInput("=")}}>=</button>
                <button className="button-1" onClick={()=>{addInput("+")}}>+</button>
            </div>
        </div>
    )
}

export default Keyboard