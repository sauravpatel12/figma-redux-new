import { combineReducers } from "redux";
import {user} from "../reducer/user";
import {postlist} from "../reducer/postlist";
import {curruser } from "../reducer/curruser";


const reducers = combineReducers({
     user,
     postlist,
     curruser

});
export default reducers; 