const pages = [
    {
        title: "Home",
        url: "index.html",
        keywords: "home virtual assistant social media business nerdy"
    },
    {
        title: "About",
        url: "about.html",
        keywords: "about experience services background tasks content social media virtual assistant"
    },
    {
        title: "Rates",
        url: "rates.html",
        keywords: "rates pricing packages social media email calendar content premium starter content"
    },
    {
        title: "Contact",
        url: "contact.html",
        keywords: "contact hire email inquiry phone email number gmail call"
    }
];

$("#searchForm").submit(function(e) {
    e.preventDefault();

    const searchTerm = $("#siteSearch").val().toLowerCase().trim();
    let output = "";

    pages.forEach(function(page) {
        const searchableText =
            (page.title + " " + page.keywords).toLowerCase();

        if (searchableText.includes(searchTerm)) {
            output += `
                <p>
                    <a href="${page.url}">
                        ${page.title}
                    </a>
                </p>
            `;
        }
    });

    if (output === "") {
        output = "<p>No results found.</p>";
    }

    $("#searchResults").html(output);
});
