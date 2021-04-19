import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWatchlist, watchList } from '../actions/watchList';
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';


const Card = ({ movie }) => {
	const dispatch = useDispatch()
	const [favorite, setFavorite] = React.useState(false);

	const listItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
};

	return (
		<motion.div
		 variants={listItem}
			className="mb-4 p-2 m-auto rounded-lg bg-white relative overflow-hidden">

			{
				movie && movie.Poster !== 'N/A' ?
					<img style={{ width: '350px', height: '500px' }}
						className="rounded-lg"
						src={movie.Poster} alt="poster" /> : <div style={{ borderRadius: 10, width: '333px', height: '500px', backgroundColor: 'gray' }} />}
			<button
				onClick={() => {
					dispatch(watchList(movie));
					setFavorite(!favorite);
				}}
				className="focus:outline-none flex items-center justify-center absolute rounded-md text-white font-bold text-lg bg-black py-2 px-4 top-25 top-5 right-5"
			> 
			{!favorite ? <span>&#10084;</span> : <span>&times;</span>}
			</button>

			<div className="p-2">
				<h1 className="text-lg text-black mt-2 font-semibold">{movie.Title.length > 30 ? movie.Title.slice(0, 30) + "..." : movie.Title}</h1>
				<p className="text-md font-normal mb-3">{movie.Year && movie.Year}</p>
				<Link className="px-4 py-2 bg-red-700 rounded-sm text-white" to={`/movie/${movie.imdbID}`}>More</Link>
			</div>
		</motion.div>

	)
}

export default Card;