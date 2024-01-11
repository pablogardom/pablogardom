console.log(navigator);
console.log(navigator.geolocation);
navigator.geolocation.getCurrentPosition(position => {
    console.log(position);
});
navigator.geolocation.getCurrentPosition(position => {
    console.log(position);
}, e => {
    console.log(e);
});
navigator.geolocation.watchPosition(position => {
    console.log(position);
});
let id = navigator.geolocation.watchPosition(position => {
    console.log(position);
});

navigator.geolocation.clearWatch(id);