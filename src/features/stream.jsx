import React, { Component } from 'react';
import * as pls from 'pls';
import PropTypes from 'prop-types';

class Stream extends Component {
  constructor(props) {
    super(props);

    this.getPLSContents = this.getPLSContents.bind(this);
    this.togglePlayback = this.togglePlayback.bind(this);

    this.state = {
      plsContents: [],
      audioInstance: new Audio(),
      playing: false,
    };
  }

  componentDidMount() {
    const { url: streamURL } = this.props;
    this.getPLSContents(streamURL);
  }

  async getPLSContents(url) {
    const res = await fetch(`https://thingproxy.freeboard.io/fetch/${url}`, {
      method: 'GET',
    });
    const data = await res.text();
    console.log(data);
    // parse pls file contents
    const plsContents = pls.parse(data);
    // get first stream URI
    const streamURI = plsContents[0].uri;
    const audioInstance = new Audio(streamURI);
    await this.setState({ plsContents, audioInstance });
  }

  togglePlayback() {
    const { audioInstance, playing } = this.state;
    if (playing === false) audioInstance.play();
    else audioInstance.pause();
    this.setState({ playing: !playing });
  }

  render() {
    const { plsContents, audioInstance, playing } = this.state;
    console.log(plsContents, audioInstance);
    return (
      <div>
        { plsContents.length > 0
          ? (
            <div>
              { `url: ${plsContents[0].uri}` }
              <div>
                <button className="btn btn-primary" onClick={this.togglePlayback} type="button">
                  { (playing) ? 'pause' : 'play' }
                </button>
              </div>
            </div>
          )
          : 'loading...'
        }
      </div>
    );
  }
}

Stream.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Stream;
