import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../Api/Youtube'
const KEY = 'AIzaSyAJAvGoQbnpy015psAN5-RGu9lhZRQlTpk'

class App extends React.Component{
    state = {
        videos: []
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

    render(){
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTextSubmit}/>
                I have {this.state.videos.length} videos.
            </div>
        )
    }
};

export default App;
