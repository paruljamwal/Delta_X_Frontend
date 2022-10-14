import { applyMiddleware, combineReducers,  createStore } from "redux";
import thunk from "redux-thunk";
import ArtistReducer from "./artist/reducer";
import SongReducer from "./songs/reducer";
import{ userReducer }from "./User/reducer";


const rootReducer=combineReducers({
  User:userReducer ,
  Artist:ArtistReducer ,
  Song:SongReducer
})

const store=createStore(rootReducer,applyMiddleware(thunk));


export default store;