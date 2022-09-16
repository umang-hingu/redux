import React from "react";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import Layout from "../Layout/Layout";

const center = { lat: 21.215284608632743, lng: 72.85702453927374 };
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
        mapContainerStyle={{ width: "1000px", height: "800px", margin: "2%" }}
      >
        <Marker position={center} />
      </GoogleMap>
      <iframe title="umang" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7603.986982287915!2d72.85380355710099!3d21.219265136436288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xac10d91eadb0a3ab!2zMjHCsDEyJzU2LjciTiA3MsKwNTEnMjUuNCJF!5e0!3m2!1sen!2sus!4v1663320287488!5m2!1sen!2sus" width="1000" height="800"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </Layout>
  );
}

export default AboutusPage;
