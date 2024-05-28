console.log("Let's get this party started!");

const search = $('#searchInput');
const gifGallery = $('#gifResults');
const removeBtn = $('#removeImg');

$("#searchForm").on("submit", async function (e) {
    e.preventDefault();

    let searchGif = search.val();
    $("#searchForm").trigger("reset");

    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
            q: searchGif,
            api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
        }
    });
    console.log(response.data);
    addGiphy(response.data);
});


function addGiphy(res) {
    let numOfRes = res.data.length;
    if (numOfRes) {
        let randomIdx = Math.floor(Math.random() * numOfRes);
        let newCol = $("<div>", { class: "col-md-4 col-12 mb-4" });
        let newGif = $("<img>", {
            src: res.data[randomIdx].images.original.url,
            class: "w-100"
        });
        newCol.append(newGif);
        gifGallery.append(newCol);
    }
}


removeBtn.on("click", function () {
    gifGallery.empty();
});


