let locationsObject = "";
fetch('assets/locations.json')
    .then((res) => res.text())
    .then((text) => {
        locationsObject = JSON.parse(text);
    })
    .catch((e) => console.error(e));

console.log(locationsObject);

document.addEventListener("DOMContentLoaded", function () {

    document.getElementById('ok').textContent = 'hello world';
});