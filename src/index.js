import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//create store
// import { createStore } from "redux";
// import myReducer from "../src/component/reducers/index";
// import { Provider } from "react-redux"; // Provider là sự kết nối giữa redux vs reactjs
// => muốn dùng redux trên reactjs phải thông qua Provider

// const store = createStore(myReducer);
//cách connect redux vs reactjs from Provider
ReactDOM.render(
  <React.StrictMode>
    {/*<Provider store={store}>
     
</Provider>*/}
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
