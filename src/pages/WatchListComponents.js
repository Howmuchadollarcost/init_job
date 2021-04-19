import React from 'react'
import { useSelector } from 'react-redux';
import { watchList } from '../actions/watchList';
import WatchListCard from '../components/WatchListCard';
export default function WatchListComponents() {
	const [watchlist, setWatchList] = React.useState([]);
	
	const watchListState = useSelector(state => state.favMovies);

	React.useEffect(() => {
		setWatchList(watchListState.watchlist);
	},[watchListState]);



	if(watchlist.length === 0){
		return <h2 className="text-white h-screen p-2">No Favorites Movies</h2>
	}


	return (
		<div className="flex flex-wrap m-1">
				{
					watchlist && watchlist.map((movie,index) => {
						return 	<WatchListCard movie={movie} key={index}/>
				})
				}
		</div>
	)
}
