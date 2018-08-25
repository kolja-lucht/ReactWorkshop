import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabbar from './movie-island/Tabbar';
import { nowShowingUrl, topRatedUrl} from './api/apiConfig';
import axios from 'axios';
import List from './movie-island/List';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedType: "now_showing"
    }
    this.onTabSelected = this.onTabSelected.bind(this)
  }

  componentDidMount() {
    this.fetchData(this.state.selectedType)
  }

  onTabSelected(selectedType) {
    this.fetchData(selectedType)
  }

  fetchData(selectedType) {
    switch (selectedType) {
      case "now_showing":
        axios.get(nowShowingUrl).then(response => {
          this.setState({
            nowShowing: response.data.results,
            selectedType,
          })
        })
        break
      case "top_rated":
        axios.get(topRatedUrl).then(response => {
          this.setState({
            topRated: response.data.results,
            selectedType,
          })
        })
        break
    }
  }

  render() {
    const {selectedType, nowShowing, topRated} = this.state

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Coolest Movie Database</h1>
        </header>
        <p className="App-intro">Click on the Following Tabs</p>
        <Tabbar onTabSelected={this.onTabSelected}/>
        {selectedType === "now_showing" && nowShowing && <List data={nowShowing} />}
       {selectedType === "top_rated" && topRated && <List data={topRated} />}
      </div>
    );
  }
}

export default App;

