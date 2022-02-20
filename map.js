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
    // setup div
   let currMapDiv = document.createElement("div");
   currMapDiv.classList.add("beatmaps");
   currMapDiv.classList.add("beatmap");
//image
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

   let votebar = document.createElement("div");
   let votebarPercent = document.createElement("div");
   let votebarPercentText = document.createElement("p");
    votebar.style.backgroundColor = "#D33";
    votebarPercent.style.backgroundColor = "#393";

    let wowicantbeliveihavetodothis = bsapi.stats.score*100+ "%";
    votebarPercent.style.width = wowicantbeliveihavetodothis;
    votebarPercent.style.height = "16px";

    votebarPercentText.innerHTML = bsapi.stats.upvotes + " / " + bsapi.stats.downvotes;

    votebar.classList.add("beatmaps");
    votebar.classList.add("votebar");

    votebarPercentText.classList.add("beatmaps");
    votebarPercentText.classList.add("votebar");

    votebarPercentText.classList.add("beatmaps");
    votebarPercentText.classList.add("votebar");

    currMapDiv.appendChild(imageDiv);
    imageDiv.appendChild(coverImg);
    imageDiv.appendChild(votebar);
    votebar.appendChild(votebarPercent);
    votebarPercent.appendChild(votebarPercentText);

// title    
   let titleDiv = document.createElement("div");
    titleDiv.classList.add("beatmaps");
    titleDiv.classList.add("title");

   let titleLink = document.createElement("a");
    titleLink.href = "https://beatsaver.com/maps/"+bsapi.id;
    titleLink.innerHTML = bsapi.name;
    titleLink.target = "_blank";
    titleLink.classList.add("beatmaps");
    titleLink.classList.add("title");

   let titleInfo = document.createElement("p");   
    titleInfo.innerHTML = "!bsr "+bsapi.id+"<br>BPM: "+bsapi.metadata.bpm+"<br>Duration: "+Math.floor(bsapi.metadata.duration/60)+":"+Math.floor(bsapi.metadata.duration%60);
    titleInfo.classList.add("beatmaps");
    titleInfo.classList.add("title");

    currMapDiv.appendChild(titleDiv);
    titleDiv.appendChild(titleLink);
    titleDiv.appendChild(titleInfo);

    //buttons
    let buttonDiv = document.createElement("div");
    buttonDiv.classList.add("beatmaps");
    buttonDiv.classList.add("buttons");

    let downloadButton = creatButton(bsapi.versions[0].downloadURL, "images/beatmapIcons/downloadFile.png", "Download");

    let oneclickButton = creatButton("beatsaver://"+bsapi.id, "images/beatmapIcons/downloadcloud.png", "OneClick", 17, 17);

    let playButton = creatButton("https://skystudioapps.com/bs-viewer/?id="+bsapi.id, "images/beatmapIcons/play.png", "OneClick", 12, 16);

    currMapDiv.appendChild(buttonDiv);
    buttonDiv.appendChild(downloadButton);
    buttonDiv.appendChild(oneclickButton);
    buttonDiv.appendChild(playButton);



    //console.log(bsapi);
    //console.log(bsapi.name);
    //console.log(bsapi.versions);

    let test = document.getElementById("beatmaps-container");
    let placeholder = document.getElementById("TEMP_PLACEHOLDER");
    test.insertBefore(currMapDiv, placeholder);
}

function creatButton(url, image, alt = "", width = "16", height = "16") {

    let buttonA = document.createElement("a");
    buttonA.href = url;
    buttonA.classList.add("beatmaps");
    buttonA.classList.add("buttons");

    let downloadButton = document.createElement("button");
    downloadButton.classList.add("beatmaps");
    downloadButton.classList.add("buttons");
    downloadButton.classList.add(alt.toLowerCase());

    let downloadButtonIcon = document.createElement("img");
    downloadButtonIcon.src = image;
    downloadButtonIcon.alt = alt;
    downloadButtonIcon.width = width;
    downloadButtonIcon.height = height;
    downloadButtonIcon.classList.add("beatmaps");
    downloadButtonIcon.classList.add("buttons");
    downloadButtonIcon.classList.add(alt.toLowerCase());

    buttonA.appendChild(downloadButton);
    downloadButton.appendChild(downloadButtonIcon);

    return buttonA;
}