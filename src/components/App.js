import React from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import youtube from '../Api/Youtube'
import VideoDetail from './VideoDetail'
const KEY = 'AIzaSyAJAvGoQbnpy015psAN5-RGu9lhZRQlTpk'

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }
    
    componentDidMount(){
        this.onTextSubmit('Disney Sing Along')
    }

    onTextSubmit = async text => {
        const response = await youtube.get('/search', {
            params: {
                q: text,
                part: 'snippet',
                maxResults: 10,
                key: KEY
            }
        }
        )
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }

    onVideoSelect = video => {
        this.setState({ selectedVideo: video })

    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTextSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default App;
