/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';
import giphy from 'giphy-api';

class App extends Component {

  constructor(props) {
    super(props);

    this.state= {
      gifs: [],
      SelectedGifId: "Zk9mW5OmXTz9e/200w.gif?cid=ecf05e47pfvzbeqrbyyqvm312thancbqxzjd7mmngyk8htxt&rid"
    }
  }

  search = (query) => {
    giphy('vP01Nf8Fgz9vGviuPXOaqMhrNarSQiNp').search({
    q: query,
      rating: 'g',
      limit: 10
      }, (err, res) => {
            this.setState({
              gifs: res.data
            });
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.SelectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
