let beatmaps = document.getElementsByClassName("beatmaps");
let SaeraBeatmaps = ["215f1", "19551", "138d0"];

SaeraBeatmaps.forEach(bsMap => {
    let request = new XMLHttpRequest();
    request.open("GET", "https://api.beatsaver.com/maps/id/"+bsMap);
    request.onload = () => {
        
    }
});

function creatBeatmap(bsapi) {
   let currMap = beatmaps.createElement("div")//.setAttrubute(class, "beatmaps beatmap");
   currMap.class = "beatmaps beatmap" 
}