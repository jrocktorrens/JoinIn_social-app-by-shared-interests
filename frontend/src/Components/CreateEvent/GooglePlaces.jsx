import PlacesAutocomplete from "react-places-autocomplete";
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from "react-places-autocomplete";
import { useState } from "react";
import scriptLoader from "react-async-script-loader";
import { useEffect } from "react";
import TextField from "@material-ui/core/TextField";

function GooglePlace({ isScriptLoaded, isScriptLoadSucceed }) {
  const [address, setAddress] = useState("");

  const handleChange = (value) => {
    setAddress(value);
  };

  const handleSelect = (address) => {
    setAddress(address);
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        console.log("Success", latLng);
      })
      .catch((error) => console.error("Error", error));
  };
  useEffect(() => {
    console.log(address);
  }, [address]);
  if (isScriptLoaded && isScriptLoadSucceed) {
    return (
      <div>
        <PlacesAutocomplete
          value={address}
          onChange={handleChange}
          onSelect={handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div>
              <TextField
                id="outlined-basic"
                label="Location"
                variant="outlined"
                {...getInputProps({
                  placeholder: "Enter Address ...",
                })}
              />
              <div>
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion) => {
                  const style = suggestion.active
                    ? { backgroundColor: "orange", cursor: "pointer" }
                    : { backgroundColor: "white", cursor: "pointer" };

                  return (
                    <div {...getSuggestionItemProps(suggestion, { style })}>
                      {suggestion.description}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      </div>
    );
  } else {
    return <h1>Hello from google Places </h1>;
  }
}
export default scriptLoader([
  "https://maps.googleapis.com/maps/api/js?key=AIzaSyA_kRsd4QNiBkJ2P35TGRuL2sXYOeNyEmg&libraries=places",
])(GooglePlace);
