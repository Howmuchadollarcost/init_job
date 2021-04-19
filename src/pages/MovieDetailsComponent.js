import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMovieById } from '../actions/getMovies';
import { watchList } from '../actions/watchList';

export default function MovieDetailsComponent() {
	let { id } = useParams();

	const [movieDetails, setMovieDetails] = React.useState(null);
	const [loading, setLoading] = React.useState(false);

	const dispatch = useDispatch();
	const detailState = useSelector(state => state.movies);



	React.useEffect(() => {
		dispatch(getMovieById(id))
	}, []);

	React.useEffect(() => {
		setMovieDetails(detailState.singleMovie);
		setLoading(detailState.loading)
	}, [detailState]);


	if (loading) {
		return <h1>loading...</h1>
	}

	return (
		<div style={{ backgroundColor: '#000' }} className="container md:flex p-4 max-w-max h-full md:content-center">
			<div className="min-w-min p-4">
				{
					movieDetails && movieDetails.Poster !== 'N/A' ?
						<img
							className="rounded-lg"
							src={movieDetails.Poster} alt="poster" /> : <div style={{ borderRadius: 10, width: '333px', height: '500px', backgroundColor: 'gray' }} />}
			</div>

			<div style={{ maxWidth: '800px' }} className="flex flex-col content-center">

				<div className="genres mt-5">
					{
						movieDetails && movieDetails.Genre.split(',').map((item, i) => {
							return <Genres genreTitle={item} key={i} />
						})
					}
				</div>

				<h1 className="mt-3 mb-3 md:text-5xl text-2xl text-white font-semibold tracking-wide">{movieDetails && movieDetails.Title}</h1>
				<h3 className="text-white uppercase tracking-tighter">{movieDetails && movieDetails.Actors}</h3>

				<div>
					<span className="text-white mt-3 mr-2">{movieDetails && movieDetails.Runtime}</span>
					<span className="text-white mt-3 mr-2">{movieDetails && movieDetails.Year}</span>
				</div>

				<p className="text-white text-sm font-light mt-2">
					{movieDetails && movieDetails.Plot}
				</p>

				<button onClick={() => dispatch(watchList(movieDetails.imdbId))} className=" text-white inline-block bg-gradient-to-r mt-6 px-4 py-2 from-purple-600  to-red-500 rounded-lg">
					Add To Fav
				</button>

				<div className="flex flex-row mt-4">
					<div className="mr-4">
						<h1 className="text-white text-4xl">{movieDetails && movieDetails.imdbRating}</h1>
						<p className="text-white font-thin mt-2 uppercase text-sm">imdb</p>
					</div>

					<div className="mr-4 flex flex-col">
						{
							movieDetails && movieDetails.Ratings.map((rating, i) => {
								return <Ratings rating={rating} key={i} />
							})
						}
					</div>

				</div>
			</div>
		</div>
	)
}


const Genres = ({ genreTitle }) => {
	return (
		<div className="inline-block rounded-full  bg-gradient-to-r m-1 from-purple-600  to-red-500 ">
			<h1 className="text-white px-4 py-1 ">{genreTitle}</h1>
		</div>
	)
}

const Ratings = ({ rating }) => {
	return (
		<div className="inline-block">
			<h1 className="text-white text-4xl">{rating.Value}</h1>
			<p className="text-white font-thin mt-2 uppercase text-sm">{rating.Source}</p>
		</div>
	)
}

