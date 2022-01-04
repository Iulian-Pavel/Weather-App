import React, { useEffect, useState } from 'react';

function GetUserLocation() {

    const [isAvailable, checkIfAvailable] = useState(false);
    useEffect(() => {
        if('geolocation' in navigator) {
            checkIfAvailable(true);
        } else {
            checkIfAvailable(false);
        }
    })
    return (
        <>
        {isAvailable ? (
            <p>geolocation is available</p>
        ) : (
            <p>geolocation is unavailable</p>
        )}
        </>
    )
}

export default GetUserLocation;