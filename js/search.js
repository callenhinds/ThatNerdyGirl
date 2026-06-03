const pages = [
    {
        title: "Home",
        url: "index.html",
        keywords: "home virtual assistant social media business support"
    },
    {
        title: "About",
        url: "about.html",
        keywords: "about cheyenne virtual assistant social media experience"
    },
    {
        title: "Rates",
        url: "rates.html",
        keywords: "rates pricing packages starter social media premium email calendar captions research scheduling content"
    },
    {
        title: "Contact",
        url: "contact.html",
        keywords: "contact email message get started hire inquiry phone number call"
    }
];

$("#siteSearch").on("keyup", function() {
    const searchTerm = $(this).val().toLowerCase();
    $("#searchResults").empty();

    if (searchTerm.length === 0) {
        return;
    }

    pages.forEach(function(page) {
        const searchableText = (page.title + " " + page.keywords).toLowerCase();

        if (searchableText.includes(searchTerm)) {
            $("#searchResults").append(
                `<li><a href="${page.url}">${page.title}</a></li>`
            );
        }
    });
});
