import classes from "./Detail.module.css";

function Detail(props){
    let trailer;
    if(props.movie === ""){
        trailer =<img className={classes.image} src={`https://image.tmdb.org/t/p/original${props.img}`} alt=""></img>
    }else{
        trailer =<iframe title={props.movie.title} width="100%" height="400"
	    src={`https://www.youtube.com/embed/${props.movie.key}`}>
        </iframe>
    }
    return<div className={classes.detail}>
        <div className={classes.info}>
            <h2>{props.movie.name}</h2>
            <hr/>
            <div className={classes.date}>
                <p>Realease Date: {props.movie["published_at"]}</p>
                
            </div>
            <p>{props.overview}</p>
        </div>
        <div className={classes.video}>
        {trailer}
        </div>
    </div>
}
export default Detail;