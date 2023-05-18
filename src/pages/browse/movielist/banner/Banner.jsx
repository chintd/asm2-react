import classes from "./Banner.module.css";
function Banner(props){
    console.log(props.title)
    return <div className={classes.banner}>
        <img src={props.img} alt=""></img>
        <div className={classes.info}>
        <h1>{props.title}</h1>
        <div className={classes.actions}>
            <button type="button">Play</button>
            <button type="button">My List</button>
        </div>
        <p>{props.text}</p>
        </div>
    </div>
}
export default Banner;