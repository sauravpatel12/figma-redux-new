import { combineReducers } from "redux";
import {user} from "../reducer/user";
import {postlist} from "../reducer/postlist";


const reducers = combineReducers({
     user,
     postlist

});
export default reducers; 