import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromWatchlist} from '../actions/watchList';
import { Link } from 'react-router-dom';


const WatchListCard = ({ movie }) => {
	const dispatch = useDispatch()
	return (
		<div style={{maxWidth:'300px'}} className="p-2 rounded-lg bg-white relative overflow-hidden m-2">

			{
				movie.movie && movie.movie.Poster !== 'N/A' ?
					<img style={{ width: '285px', height: '400px' }}
						className="rounded-lg"
						src={movie.movie.Poster}alt="poster" /> : <div style={{ borderRadius: 10, width: '285px', height: '400px', backgroundColor: 'gray' }} />}
			<button
				onClick={() => dispatch(removeFromWatchlist(movie.movie))}
				className="absolute rounded-md text-white font-bold text-lg bg-black py-2 px-4 top-25 top-5 right-5"
			>&times;</button>

			<div className="p-2">
				<h1 className="text-lg text-black mt-2 font-semibold">{movie.movie.Title}</h1>
				<p className="text-md font-normal mb-3">{movie.movie.Year}</p>
				<Link className="px-4 py-2 bg-red-700 rounded-sm text-white" to={`/movie/${movie.movie.imdbId}`}>More</Link>
			</div>
		</div>

	)
}

export default WatchListCard;