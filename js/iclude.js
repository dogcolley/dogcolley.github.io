function includeHTML(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading file:', error));
}

window.addEventListener("DOMContentLoaded", () => {
    includeHTML("head.html", "header");
    includeHTML("foot.html", "footer");
});
