document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.getElementById("domainList");

    if (Object.keys(redirectMap).length === 0) {
        return;
    }
    var innerHTML = ""
    Object.entries(redirectMap).forEach(([hostname, value]) => {
        innerHTML = innerHTML + `
            <li><a target="_blank" href="${value.testHref}">${hostname}</a></li>
        `
    });
    tableBody.innerHTML = innerHTML


    const openAllButton = document.getElementById("openAllButton");
    openAllButton.addEventListener("click", function () {
        const links = document.querySelectorAll("#domainList a"); // Get all <a> elements

        let index = 0;
        function openNextLink() {
            if (index < links.length) {
                window.open(links[index].href, "_blank");
                index++;
                setTimeout(openNextLink, 500); // Delay next link by 500ms
            }
        }
        openNextLink(); // Start the process
    });
});

