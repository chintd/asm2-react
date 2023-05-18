import { useState } from "react";
import classes from "./Movie.module.css"

function Movie(props){
    let imgClasses = classes.img
    if(props.title){
        imgClasses=classes.backdrop
    }
    return <img className={imgClasses} 
    src={props.poster}
    onClick={props.onShowDetail}
    alt=""></img>
}
export default Movie;