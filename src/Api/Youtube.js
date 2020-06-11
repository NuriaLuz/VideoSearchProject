import axios from 'axios'

const KEY = 'AIzaSyAJAvGoQbnpy015psAN5-RGu9lhZRQlTpk'

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 25,
        key: KEY,
    }
});