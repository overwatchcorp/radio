/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  addStationByURL,
} from './stationSlice';

class AddStationComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      streamURL: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { addStation } = this.props;
    const { streamURL } = this.state;
    addStation(streamURL);
    this.setState({ streamURL: '' });
  }

  handleChange(event) {
    this.setState({ streamURL: event.target.value });
  }

  render() {
    const { streamURL } = this.state;
    return (
      <div className="card">
        <div className="card-body" style={{ paddingBottom: 6 }}>
          <h4 className="card-title">add station:</h4>
          <form className="mt-2" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input id="streamURLInput" type="url" value={streamURL} onChange={this.handleChange} className="form-control" />
            </div>
            <div className="form-group text-right">
              <button className="btn btn-primary" type="submit">add!</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

AddStationComponent.propTypes = {
  addStation: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  stations: state.stations.stations,
  stationNames: state.stations.stationNames,
});

const mapDispatchToProps = (dispatch) => ({
  addStation: (streamURL) => dispatch(addStationByURL({ streamURL })),
});

const AddStation = connect(mapStateToProps, mapDispatchToProps)(AddStationComponent);

export default AddStation;
