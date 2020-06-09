import React from 'react'
import { connect } from 'react-redux'


const SongDetail = (props) =>{
 if(props.song!==null)   
return (
<div> 
     <h3> Song Details </h3>
      <h4>Title : {props.song.title}</h4>  
      <h4>Duration : {props.song.duration}</h4>  
      <h4>Singer : {props.song.singer}</h4>  
      <h4>Album : {props.song.album}</h4>  
     </div>
)
return <div><h3>Click on a song!</h3></div>
}



const mapStateToProps =(state)=>{
 return  { song : state.selectedSong}
}


export default connect(mapStateToProps) (SongDetail);