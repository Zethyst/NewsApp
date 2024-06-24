import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import React, { Component } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

// const express = require("express")
// const app = express();
// const port = 5000;
// var request=require("request"); 

// app.get("/", (req, res) => {
//   res.send("Hello Mate");
// })

// app.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// })

class App extends Component {

  // pageSize=5;

  apikey = '183d2c5864504ce0bfa355cf205526bd';
  constructor() {
    super();
    this.state = {
      searchQuery: '',
      progress: 0
    };
  }

  setProgress = (progress) => {
    //Make this function as arrow function otherwise this. wont be available
    //!Error => setState is not a function
    this.setState({ progress: progress })
  }

  handleSearch = (query) => {
    this.setState({ searchQuery: query });
  }

  //Component not remounting, use key and exact path
  render() {

    return (
      <>
        <BrowserRouter>
          <div style={{ marginTop: "100px" }}></div>
          <Navbar onSearch={this.handleSearch} />
          <LoadingBar color='#f11946' height={3} progress={this.state.progress} />
          <Routes>
            <Route exact path="/NewsApp" element={<News setProgress={this.setProgress} key="general" apiKey={this.apikey} pageSize={9} country="in" category="general" query={this.state.searchQuery} />} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" apiKey={this.apikey} pageSize={9} country="in" category="business" query={this.state.searchQuery} />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" apiKey={this.apikey} pageSize={9} country="in" category="entertainment" query={this.state.searchQuery} />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" apiKey={this.apikey} pageSize={9} country="in" category="health" query={this.state.searchQuery} />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" apiKey={this.apikey} pageSize={9} country="in" category="science" query={this.state.searchQuery} />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" apiKey={this.apikey} pageSize={9} country="in" category="sports" query={this.state.searchQuery} />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" apiKey={this.apikey} pageSize={9} country="in" category="technology" query={this.state.searchQuery} />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}


export default App;


