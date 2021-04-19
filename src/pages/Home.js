import React from 'react'
import Card from '../components/Card';
import { useSelector } from 'react-redux';
import {motion} from 'framer-motion';

import WatchListCard from '../components/WatchListCard';


export default function Home() {

	const [movies, setMovies] = React.useState(null);
	const [loading, setLoading] = React.useState(false);

	const moviesState = useSelector(state => state.movies);

	React.useEffect(() => {
		setMovies(moviesState.movies);
		setLoading(moviesState.loading);
	}, [moviesState]);

	const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

	return (
		<main className="container">
			{
				loading ? <h1>loding...</h1> :

					<motion.div variants={container} initial="hidden" animate="show" className="flex flex-wrap m-1">
						{
							movies && movies.map((movie,index) => {
								return <Card movie={movie} key={index} />
							})
						}
					</motion.div>
			}

		</main>
	)
}
