import { ARTISTFAIL, ARTISTLOADING, ARTISTSUCCESS } from "./actionType"


const artistLoading=()=>{
    return{
        type: ARTISTLOADING ,    
    }
}


const artistSucces=(payload)=>{
    return {
        type:ARTISTSUCCESS ,
        payload
    }
}


const artistFail=(payload)=>{
    return{
        type: ARTISTFAIL ,
        payload
    }
}


export const getArtist=(payload)=>(dispatch)=>{
    dispatch(artistLoading());
    axios("")
    .then((res)=>dispatch(artistSucces(payload)))
    .then((err)=>dispatch(artistFail(err)))
}


export const AddArtist=(payload)=>(dispatch)=>{
    dispatch(artistLoading());
    axios.post("",payload)
    .then((res)=>dispatch(artistSucces(payload)))
    .then((err)=>dispatch(artistFail(err)))
}
