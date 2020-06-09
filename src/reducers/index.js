import { combineReducers } from 'redux';
import { selectSong } from '../actions';


const songsReducer =()=>{
    return[
        {title:'Tujhe Kitna Chahne Laga hu',duration :'3:05',singer : 'Arijit Singh', album : 'Kabir Singh' },
        {title:'Mere Wali sardarni',duration :'4:05',singer : 'Jugraj Sandhu', album : 'NULL' },
        {title:'Dhivara',duration :'4:15',singer : 'Prabhas', album : 'Baahubali' },
        {title:'Soch',duration :'3:35',singer : 'Akriti', album : 'Airlift' },
        {title:'Xiyonat',duration :'2:55',singer : 'Ummon guruhi', album : 'Korean Pop' }
    ]
}


const selectedSongReducer=(selectedSong=null,action)=>{
    if(action.type==='SONG_SELECTED'){
        return action.payload
    }
    return selectedSong
}


export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})
