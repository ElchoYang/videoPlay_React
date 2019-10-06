import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import play from '../images/play.png'

class VideoControl extends React.Component{
	constructor(props){
		super(props);
		this.playVideo = this.playVideo.bind(this);
		this.pauseVideo = this.pauseVideo.bind(this);
		this.state= {
			"playbuttondisplay": 'true',
		}
	}

	// initVideo(){
    //     $(".oi").removeClass("disabled");
    //     $(".oi[title=media-pause]").addClass("disabled");
    //     $(".oi[title=media-stop]").addClass("disabled");
	// }
	
	playVideo(){
		document.getElementById("videoItem").play();
		this.setState({
			"playbuttondisplay": 'false',
		})
	}

	pauseVideo(){
		document.getElementById("videoItem").pause();
		this.setState({
			"playbuttondisplay": 'true',
		})
	}
 
	stopVideo(t){
        if(document.getElementById("videoItem").currentTime > 0) {
            document.getElementById("videoItem").load();
            // initVideo();
        }
    } 

    volumeUp(){
        let volume = document.getElementById("videoItem").volume + 0.2
        document.getElementById("videoItem").volume = volume > 1 ? 1: volume;
        console.log(document.getElementById("videoItem").volume);
    }
 
    volumeDown(){
        let volume =  document.getElementById("videoItem").volume - 0.2;
        document.getElementById("videoItem").volume = volume < 0 ? 0: volume;
        console.log(document.getElementById("videoItem").volume);
    }		

	
    initLikes(){
		if(localStorage.likes) {
			document.getElementById("likesNumber").innerHTML = localStorage.likes + " likes";
		} else {
			document.getElementById("likesNumber").innerHTML = "0 likes";
		}

		if(localStorage.unlikes) {
			document.getElementById("unlikesNumber").innerHTML = localStorage.unlikes + " unlikes";
		} else {
			document.getElementById("unlikesNumber").innerHTML = "0 likes";
		}
        
		
    }

    addlikes(){
        if(localStorage.likes){
			localStorage.likes ++;
			document.getElementById("likesNumber").innerHTML = localStorage.likes + " likes";
        }else{
            localStorage.likes = parseInt(1);
        }
	}

	unlikes(){
        if(localStorage.unlikes){
            localStorage.unlikes ++; 
            document.getElementById("unlikesNumber").innerHTML = localStorage.unlikes + " unlikes";
        }else{
            localStorage.unlikes = parseInt(1);
        }
    }    

	muted(){
        document.getElementById("videoItem").muted = !document.getElementById("videoItem").muted;
    }

    updateProgress(){
        var duration = document.getElementById("videoItem").duration;
        var currentTime = document.getElementById("videoItem").currentTime;

        var percent = currentTime/duration;

        document.getElementsByClassName("progress-bar")[0].setAttribute("aria-valuenow", percent * 100);
        document.getElementsByClassName("progress-bar")[0].style.width = percent * 100 + "%";
    }

    
	
	render(){
		// this.initVideo();
		localStorage.clear();

		setInterval(this.updateProgress,500);

		const divClass = "row";
		let playbuttonstyle = this.state.playbuttondisplay==='false'? {display: 'none'}:{display: 'inline'}
		let playdisablebuttonstyle = this.state.playbuttondisplay==='true'? {display: 'none'}:{display: 'inline'}
		return(
			<div>
				<div className={divClass}>
				<div class="col-md-12">
					<div class="video-icon">
						<span class="oi oi-media-play" title="media-play" aria-hidden="true" onClick={this.playVideo} ></span>
						<span class="oi oi-media-pause" title="media-pause" aria-hidden="true"  onClick={this.pauseVideo} ></span>
						<span class="oi oi-media-stop" title="media-stop" aria-hidden="true" onClick={this.stopVideo}></span>
						<span class="oi oi-plus" title="plus" aria-hidden="true" onClick={this.volumeUp}></span>
						<span class="oi oi-minus" title="minus" aria-hidden="true" onClick={this.volumeDown}></span>
						<span class="oi oi-headphones" title="headphones" aria-hidden="true" onClick={this.muted}></span>
						<div class="like">
							<span class="oi oi-thumb-up" title="thumb-up" aria-hidden="true" onClick={this.addlikes}  ></span>
							<div id="likesNumber">0 likes</div>
		
							<span class="oi oi-thumb-down" title="thumb-down" aria-hidden="true" onClick={this.unlikes}></span>
							<div id="unlikesNumber">0 unlikes</div>
						</div>
					</div> 
				</div>
			</div>
				<div class="progress">
					<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{width: 0 + 'px'}}></div>
				</div>
			</div>
		)

		//this.initLikes();
	}
}

export default VideoControl