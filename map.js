let beatmaps = document.getElementById("beatmaps");
let SaeraBeatmaps = ["215f1", "19551", "138d0"];

SaeraBeatmaps.forEach(bsMapKey => {
    console.log(bsMapKey);
    fetch("https://api.beatsaver.com/maps/id/"+bsMapKey).then(response => {
        console.log(response.status);
        if (response.status === 200) {
            response.json().then(data => {
                creatBeatmap(data);
        });
    }
    });
});

function creatBeatmap(bsapi) {
   let currMapDiv = document.createElement("div");
   currMapDiv.classList.add("beatmaps");
   currMapDiv.classList.add("beatmap");

   let imageDiv = document.createElement("div");
   imageDiv.classList.add("beatmaps");
   imageDiv.classList.add("image");

   let coverImg = document.createElement("img");
    coverImg.src = bsapi.versions[0].coverURL;
    coverImg.alt = bsapi.name;
    coverImg.width = "100";
    coverImg.height = "100";
    coverImg.classList.add("beatmaps");
    coverImg.classList.add("cover");

   let titleDiv = document.createElement("div");
    titleDiv.classList.add("beatmaps");
    titleDiv.classList.add("title");

   let titleLink = document.createElement("a");
    titleLink.href = "https://beatsaver.com/maps/"+bsapi.id;
    titleLink.innerHTML = bsapi.name;
    titleLink.target = "_blank";
    titleLink.classList.add("beatmaps");
    titleLink.classList.add("title");

    //console.log(bsapi);
    //console.log(bsapi.name);
    //console.log(bsapi.versions);

   currMapDiv.appendChild(imageDiv);
    imageDiv.appendChild(coverImg);

   currMapDiv.appendChild(titleDiv);
    titleDiv.appendChild(titleLink);

    let test = document.getElementById("beatmaps-container");
    let placeholder = document.getElementById("TEMP_PLACEHOLDER");
    test.insertBefore(currMapDiv, placeholder);
}

