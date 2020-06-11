import React from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import youtube from '../Api/Youtube'
import VideoDetail from './VideoDetail'
const KEY = 'AIzaSyAJAvGoQbnpy015psAN5-RGu9lhZRQlTpk'

class App extends React.Component{
    state = {
        videos: [],
        selectedVideo: null
    }

    onTextSubmit = async text => {
       const response = await youtube.get('/search', {
            params: {
                    q: text,
                    part: 'snippet',
                    maxResults: 25,
                    key: KEY
                }
            }
        )
        this.setState ({videos :response.data.items})
    }

    onVideoSelect = video => {
    this.setState({selectedVideo: video})
        
    }

    render(){
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTextSubmit}/>
                <VideoDetail video = {this.state.selectedVideo}/>
                <VideoList videos={this.state.videos} onVideoSelect= {this.onVideoSelect}/> 
            </div>
        )
    }
};

export default App;
