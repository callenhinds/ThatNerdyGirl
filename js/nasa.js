const image = document.getElementById("spaceImage");
const title = document.getElementById("spaceTitle");
const description = document.getElementById("spaceDescription");

fetch("https://api.nasa.gov/planetary/apod?api_key=MX534vpcfV6XqXwJmhXceuDMeCDsbXjKABQAdSal")
    .then(function(response) {
        if (!response.ok) {
            throw new Error("API request failed with status " + response.status);
        }
        return response.json();
    })
    .then(function(data) {
        console.log(data);

        title.textContent = data.title || "Nerdy Thing of the Day";

        if (data.media_type === "image" && data.url) {
            image.src = data.url;
            image.alt = data.title || "NASA Astronomy Picture of the Day";
            image.style.display = "block";
        } else {
            image.style.display = "none";
            description.textContent = "Today's NASA feature is a video, so there is no image to display.";
        }

        if (data.explanation) {
            description.textContent = data.explanation.slice(0, 250) + "...";
        }
    })
    .catch(function(error) {
        image.style.display = "none";
        title.textContent = "Nerdy Thing of the Day";
        description.textContent = "The NASA feature could not load right now.";
        console.log("NASA API error:", error);
    });
