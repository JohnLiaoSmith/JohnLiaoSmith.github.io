document.addEventListener("DOMContentLoaded", function () {

    $.getJSON("assets/locations.json", function (data) {
        console.log(data);
    });
    document.getElementById('ok').textContent = 'hello ssssworld';
});