import React from 'react'
import $ from  'jquery'

class Player extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			movies: []
		}
		this.movies = [require('../media/dmxiong1.mp4'),require('../media/dmxiong2.mp4'),require('../media/dmxiong3.mp4'),require('../media/dmxiong4.mp4'),require('../media/dmxiong5.mp4')];
		this.updateVideo=this.updateVideo.bind(this);
	}

	componentDidMount() {
	    this.serverRequest = $.get(this.props.source, function (result) {
	     	this.setState({
	     		movies: result['youtube']
	     	})
		}.bind(this));
	}
	
	updateVideo(e){
		console.log(e.target.getAttribute("data-video"));
		this.props.updateVideo(e.target.getAttribute("data-video"));
	}

	render(){
		console.log(this.state.movies.length);
		let content;
		if(this.state.movies && this.state.movies.length>0){
			 content =	this.state.movies.map((item, index)=>
			        <div>
					<span class="oi oi-media-play" onClick={(e)=>{this.updateVideo(e)}} data-video={this.movies[index]} aria-hidden="true">{item.title}</span>
			          {/* <div data-url={this.movies[index]} onClick={(e)=>{this.updateVideo(e)}}>{item.title}</div> */}
			          <hr/>
			        </div>
			  )
		}else{
			content = <div>aaa</div>
		}

		return(
			content			
		)
	}
}

export default  Player