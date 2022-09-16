import React from "react";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import Layout from "../Layout/Layout";


const center = { lat: 48.8584, lng: 2.2945 };
function AboutusPage() {
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
  return (
    <Layout>
      <GoogleMap
        center={center}
        zoom={15}
        mapContainerStyle={{ width: "1000px", height: "800px" , margin: '2%'}}
      >
        <Marker position={center}></Marker>
      </GoogleMap>
    </Layout>
  );
}

export default AboutusPage;
