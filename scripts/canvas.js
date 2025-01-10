let parentDiv = document.getElementById(`canvasDiv`);
let canvasElement = document.createElement(`canvas`);

canvasElement.onmousemove = function(event) {
    let rect = canvasElement.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    //console.log(`Mouse at (${x}, ${y})`);
    canvasElement.getContext(`2d`).clearRect(0, 0, canvasElement.width, canvasElement.height);
    let ctx = canvasElement.getContext(`2d`);
    ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.fillStyle = "red";
ctx.fill();
ctx.lineWidth = 4;
ctx.strokeStyle = "blue";
ctx.stroke();
}

parentDiv.appendChild(canvasElement);