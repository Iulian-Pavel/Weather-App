export const getLocation = () => {
    if('geolocation' in navigator) {
        console.log('ava')
    } else {
        console.log('una')
    }
}