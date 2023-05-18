import React, { useCallback, useEffect, useState } from 'react';
import NavBar from './NavBar';
import MovieList from './movielist/MovieList';
import Banner from './movielist/banner/Banner';
import classes from "./Browse.module.css"
function Browse() {
	const API_KEY = "ad91e482cb06a3aaa640c8097cd470af";
	const request =[
		{title : "Original",
		url :`/trending/all/week?api_key=${API_KEY}&language=en-US`		
		},{
			title: "Xu hướng",
			url:`/discover/tv?api_key=${API_KEY}&with_network=123`
		},{
			title: "Xếp hạng cao",
			url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`
		},{
			title: "Hành động",
			url:`/discover/movie?api_key=${API_KEY}&with_genres=28`
		},{
			title: "Hài",
			url: `/discover/movie?api_key=${API_KEY}&with_genres=35`
		},{
			title: "Kinh dị",
			url:`/discover/movie?api_key=${API_KEY}&with_genres=27`
		},{
			title: "Lãng mạn",
			url:`/discover/movie?api_key=${API_KEY}&with_genres=10749`
		},{
			title: "Tài liệu",
			url : `/discover/movie?api_key=${API_KEY}&with_genres=99`
		}
	]
	const [bannerMovie, setBannerMovie]=useState('');
	// gọi api và lấy thông tin phim để hiển thị banner
	const fetchBanner=useCallback(async ()=>{
	try{
		fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_network=123`)
		.then(res=>res.json())
		.then(data=>{
			console.log(data.results.length)
			const randomMovie = data.results[
				Math.floor(Math.random() * data.results.length - 1)
			]
			setBannerMovie(randomMovie);
		})
	}catch(err){
		console.log(err.message)
	}
	},[])
	useEffect(()=>{
		fetchBanner()
	},[fetchBanner])
	return (
		<div className={classes.browse}>
			<NavBar/>
			{bannerMovie.length !== 0 && <Banner 
			title={bannerMovie.name} 
			img={`https://image.tmdb.org/t/p/original${bannerMovie["backdrop_path"]}`}
			text={bannerMovie.overview}/>
		}
			<ul>
				{request.map(el=> <MovieList key={Math.random()} title={el.title} url={el.url}/>)}
			</ul>
		</div>
	);
}

export default Browse;

