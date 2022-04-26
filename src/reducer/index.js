import { combineReducers } from "redux";
import {user} from "../reducer/user";
import {postlist} from "../reducer/postlist";
import {curruser } from "../reducer/curruser";
import { arrayindex} from "../reducer/arrayindex";

const reducers = combineReducers({
     user,
     postlist,
     curruser,
     arrayindex,

});
export default reducers; 