import { useState, useEffect } from "react";

const useGeolocation = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        console.log("latitude is:", position.coords.latitude);
        console.log("longitude is:", position.coords.longitude);
      });
    }
  }, []);
  return { latitude, longitude }
};

export default useGeolocation;
