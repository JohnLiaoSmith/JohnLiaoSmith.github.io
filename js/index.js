let locationsObject = "";
fetch('assets/locations.json')
    .then((res) => res.text())
    .then((text) => {
        locationsObject = JSON.parse(text);
        console.log(locationsObject);
    })
    .catch((e) => console.error(e));


document.addEventListener("DOMContentLoaded", function () {

    document.getElementById('ok').textContent = 'hello world';
});