// Exercise 2: Set It Up
	// write a class component
	// make it a div with className FeedList
	// import FeedItem and include it inside the div
	// export default the component!

// Exercise 3: Prop It Up
	// FeedList should accept props as params
	// destructure photos from props
	// iterate over the data and map each photo data to a FeedItem

import React from 'react';
import FeedItem from '../components/FeedItem';

class FeedList extends React.Component{

	render(){
		const {photos} = this.props;
		//console.log(photos);
		
		//TODO refactor out mapping logic into a helper function
		return(
			<div className="FeedList">
				{photos.map(({id, title, url, likes, usersLiked})=> (
					<FeedItem 
						key={id}
						title={title}
						url={url}
						likes={likes}
						usersLikes={usersLiked}/>
				))}	
			</div>
		)
	}
}
export default FeedList;