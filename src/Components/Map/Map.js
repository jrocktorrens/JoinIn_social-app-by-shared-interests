import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import { Component } from "react";

const mapStyles = {
  width: "100%",
  height: "100%",
};

export class Maps extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    console.log(this.props.google);
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 32.082212,
          lng: 34.7803727,
        }}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={"Kenyatta International Convention Centre"}
        />
        <Marker
          onClick={this.onMarkerClick}
          position={{ lat: 47.444, lng: 22.176 }}
        />
        <Marker
          onClick={this.onMarkerClick}
          position={{ lat: 40.444, lng: -12.176 }}
        />
        <Marker
          onClick={this.onMarkerClick}
          position={{ lat: 57.444, lng: 122.176 }}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <p>Profile</p>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBvecRDhRzU7-gzr994F-Pvrw447tngwl0",
})(Maps);
