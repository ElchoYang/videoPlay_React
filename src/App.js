import React from 'react';
//import logo from './logo.svg';
import './App.css';
import './css/video.css';
import './images/open-iconic/font/css/open-iconic-bootstrap.css';
import VideoPlayer from './components/VideoPlayer'
import PlayList from './components/PlayList.js'
import { BrowserRouter as Router} from 'react-router-dom'
//import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

class App extends React.Component {
	constructor(props){
		super(props)
		 
		this.state= {
			videoSource: require('./media/mov_bbb.mp4')
		}
	}

	updateVideo = (v)=>{
		console.log(v);
		this.setState({videoSource: v});
	}

  render(){
  	return (
	    <Router>
	        {/*<Link to="/home" >Home</Link><br/>
	        <Link to="/news" >News</Link>

	        <Route path="/home" component={VideoPlayer}></Route>
	        <Route path="/news" component={News}></Route> */} 

			<div class="VideoPlayer">
					
			</div>
			<div class="playerList" >
				
			</div>
			<div class="row videoRow" >
				<div class="col-sm-12 col-md-8 col-lg-9">
					<VideoPlayer source={this.state.videoSource}/>
				</div>
				
				<div class="col-sm-12 col-md-4 col-lg-3">
					<div class="videoList">
						<PlayList updateVideo={this.updateVideo} source="https://my-json-server.typicode.com/diaolanshan/training/db"/>			
					</div>

				</div>
			</div>
	    </Router>
	)}
}

export default App;
