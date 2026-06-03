const image = document.getElementById("spaceImage");
const title = document.getElementById("spaceTitle");
const description = document.getElementById("spaceDescription");

fetch("https://api.nasa.gov/planetary/apod?api_key=MX534vpcfV6XqXwJmhXceuDMeCDsbXjKABQAdSal")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);

        title.textContent = data.title;

        if (data.media_type === "image") {
            image.src = data.url;
            image.alt = data.title;
            image.style.display = "block";
        } else {
            image.style.display = "none";
        }

        description.textContent = data.explanation.slice(0, 250) + "...";
    })
    .catch(function(error) {
        image.style.display = "none";
        title.textContent = "Nerdy Thing of the Day";
        description.textContent = "NASA's Astronomy Picture of the Day is unavailable right now.";
        console.log("NASA API error:", error);
    });
