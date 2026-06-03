const image = document.getElementById("spaceImage");
const title = document.getElementById("spaceTitle");
const description = document.getElementById("spaceDescription");

fetch("https://api.nasa.gov/planetary/apod?api_key=MX534vpcfV6XqXwJmhXceuDMeCDsbXjKABQAdSal")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);

        title.textContent = data.title || "Nerdy Thing of the Day";

        if (data.media_type === "image") {
            image.src = data.url;
            image.alt = data.title;
            image.style.display = "block";
        } else {
            image.style.display = "none";
            title.textContent = "Today's NASA feature is a video!";
        }

        if (data.explanation) {
            description.textContent = data.explanation.slice(0, 250) + "...";
        } else {
            description.textContent = "No description is available today.";
        }
    })
    // Added for if API isn't working
    .catch(function(error) {
        title.textContent = "Nerdy Thing of the Day";
        description.textContent = "The NASA feature could not load right now.";
        console.log("NASA API error:", error);
    });
