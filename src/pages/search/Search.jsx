import React, { useState } from 'react';
import NavBar from '../browse/NavBar';
import SearchForm from './SearchForm';
import classes from "./Search.module.css"
import ResultList from './ResultList';
const Search = () => {
	const API_KEY = "ad91e482cb06a3aaa640c8097cd470af";
	const [movies, setMovies] =useState([]);
	// gọi API lấy danh sách phim cho thành phần search
	function searchMovieHandler(data){
		try{
			fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en&query=${data}`)
			.then(res=>res.json())
			.then(data=>{
				console.log(data);
				setMovies(data.results)})
		}catch(err){
			console.log(err.message)
		}
	}
	return (
		<div className={classes.searchPage}>
			<NavBar/>
			<SearchForm onSearch={searchMovieHandler}/>
			<ResultList movies={movies}/>
		</div>
	);
};

export default Search;
