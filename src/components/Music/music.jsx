import React from "react"
//import soundTrack from "../../assets/pirate-music-from-the-age-of-pirates.mp3"

class Music extends React.Component {
    constructor(props) {
        super(props);
        this.state = { play: true };
        this.url = "http://streaming.tdiradio.com:8000/house.mp3";
        this.audio = new Audio(this.url);
        this.togglePlay = this.togglePlay.bind(this);
    }

    togglePlay() {
        this.setState({ play: !this.state.play });
        console.log(this.audio);
        this.state.play ? this.audio.play() : this.audio.pause();
    }

    play(){
        this.setState({
            play: true,
            pause: false
        });
        console.log(this.audio);
        this.audio.play();
    }

    pause(){
        this.setState({ play: false, pause: true });
        this.audio.pause();
    }


    render() {
        return (
            <div>
                <button onClick={this.togglePlay}>{this.state.play ? 'Pause' : 'Play'}</button>
            </div>
        );
    }
}

export default Music;