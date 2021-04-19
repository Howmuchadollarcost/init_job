import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {getMovies} from '../actions/getMovies';

export default function NavBar() {
	const dispatch = useDispatch()
	const [term, setTerm] = React.useState('');


	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(getMovies(term));
		setTerm('');
	}


	return (
		<nav className="flex flex-row w-full bg-transparent justify-between items-center ">
				<div className="p-4">
					<Link className="text-3xl font-semibold text-white" to="/">
						MovieDB
					</Link>
				</div>
				<div className="md:w-1/3 flex items-center">
					<form
						onSubmit={handleSubmit}
					>
						<span className="absolute y-0 flex p-1">
							<button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
								<svg fill="none" stroke="gray" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
							</button>
						</span>
						<input
							value={term}
							className="py-2 text-sm text-black rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
							placeholder="Search..."
							autoComplete="off"
							onChange={(e) => setTerm(e.target.value)}
						/>

					</form>
				</div>
				<div className="p-2 flex items-center">
					<Link to="/watchlist" className=" text-white text-lg bg-red-500 p-2 rounded-md">
						Watchlist
					</Link>
				</div>
			</nav>
	)
}
