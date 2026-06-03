const image = document.getElementById("spaceImage");
const title = document.getElementById("spaceTitle");
const description = document.getElementById("spaceDescription");

fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then(response => response.json())
    .then(data => {
        image.src = data.url;
        image.alt = data.title;

        title.textContent = data.title;
        // Description was stupid long. Needed shorter...
        description.textContent =
            data.explanation.substring(0, 250) + "...";
    })
    .catch(error => {
        console.log(error);
    });
