fetch("data/articles.json")
.then(response => response.json())
.then(data => {

    const tableBody = document.querySelector("#articles-table tbody");

    data.forEach(article => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${article.Index}</td>
            <td>${article.title}</td>
            <td><a href="${article.link}" target="_blank">Open</a></td>
        `;

        tableBody.appendChild(row);
    });

});
