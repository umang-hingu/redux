import React, { useState } from "react";
import { useJsApiLoader, GoogleMap, MarkerF } from "@react-google-maps/api";
import Layout from "../Layout/Layout";

const center = { lat: 21.215284608632743, lng: 72.85702453927374 };
function AboutusPage() {
  const [position, setPosition] = useState(center);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
  });
  if (!isLoaded) {
    return (
      <Layout>
        <p>Loading......</p>
      </Layout>
    );
  }

  const locationHandler = (e) => {
    console.log("Lat:", e.latLng.lat(), "Lng:", e.latLng.lng());
   setPosition({ lat: e.latLng.lat(), lng: e.latLng.lng() });
    
    //<Marker position={position}></Marker>;
  };
  console.log(position);

  return (
    <Layout>
      <GoogleMap
        onClick={locationHandler}
        center={center}
        zoom={15}
        mapContainerStyle={{ width: "1000px", height: "800px", margin: "2%" }}
      >
        <MarkerF position={position} />
      </GoogleMap>
    </Layout>
  );
}

export default AboutusPage;
