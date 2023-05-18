import classes from "./MovieList.module.css";
import Movie from "./Movie";
import { useCallback, useEffect, useState } from "react";
import Detail from "./detail/Detail";
function MovieList(props){
    const[movie,setMovie] = useState([]);
    const[currentIdDetail, setCurrentIdDetail] = useState(0);
    // gọi API hiển thị danh sách phim MovieList
    const fetchData= useCallback( async()=>{
        try{
            fetch('https://api.themoviedb.org/3' + props.url).then(res=>res.json())
            .then(data=>{
                setMovie(data.results)
            })

        }catch(err){
            console.log(err.message)
        }
    },[])
    useEffect(()=>{
        fetchData()
    },[fetchData])
    const API_KEY = "ad91e482cb06a3aaa640c8097cd470af";
    const[showDetail, setShowDetail]=useState(false);
    const[movieDetail,setMovieDetail]=useState('');
    const[img, setImg] = useState("")
    // hàm lấy thông tin chi tiết của phim cho thành phần detail
    function showDetailHandler(id, backdrop_path){
        try{
            fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`)
            .then(res=>res.json())
            .then(data=>{
                console.log(id);
                console.log(currentIdDetail);
                console.log(backdrop_path);

                if (currentIdDetail === id) {
                    setShowDetail(false);
                }else {
                    setCurrentIdDetail(id);
                    setShowDetail(true);
                }
                if (data.results) {
                    const movie = data.results.length > 1 ? data.results[0] : data.results;
                    setMovieDetail(movie);
                }else {
                    setMovieDetail("");
                    setImg(backdrop_path)
                    console.log(img);
                }
                console.log(movie)

            })
        }catch(err){
            console.log(err.message)
        }
    }
    
    let lists = movie.map(movie=><Movie key={movie.id} 
        poster={`https://image.tmdb.org/t/p/original${movie["backdrop_path"]}`}
        onShowDetail={showDetailHandler.bind(null,movie.id, movie["poster_path"])}
        />)
        if(props.title === "Original"){
            lists = movie.map(movie=><Movie key={movie.id} title={props.title}
                poster={`https://image.tmdb.org/t/p/original${movie["poster_path"]}`}
                onShowDetail={showDetailHandler.bind(null, movie.id, movie["poster_path"])}
                />)
        }
    return<div className={classes.movies}>
        <h3>{props.title}</h3>
        <ul className={classes.lists}>{lists}</ul>
        {showDetail && <Detail movie={movieDetail} img={img}/>}
        </div>
}
export default MovieList;