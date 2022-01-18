//create store

import { createStore } from "redux";
import reducer from "./actions";

export default createStore(reducer);
