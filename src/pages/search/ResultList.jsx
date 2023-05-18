
import classes from "./ResultList.module.css";
function ResultList(props){
    return<div className={classes["result-container"]}>
        <h2>Search result</h2>
        <ul className={classes.result}>{props.movies.map(el=> <li key={el.id}><img src={`https://image.tmdb.org/t/p/original${el["poster_path"]}`} alt=""></img></li>)}</ul>
    </div>
}
export default ResultList