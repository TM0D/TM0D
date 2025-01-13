let isDebug = false;
let lastRunTime = localStorage.getItem("lastRunTime");
let currentTime = new Date().getTime();
let timeSinceLastRun = currentTime - lastRunTime;
if (timeSinceLastRun > 5 * 60 * 1000 || isDebug) {
    window.scroll(0, 0);
    runIntro();
}
localStorage.setItem("lastRunTime", currentTime);

function runIntro() {
    var introText = document.getElementById("introText");
    introText.innerText = ``;
    let text = "SAERAPHINX";
    let elements = [];

    let beginningElement = document.createElement(`f`);
    beginningElement.innerText = `[`;

    for (let i = 0; i < text.length; i++) {
        let p = document.createElement(`f`);
        p.innerText = text[i];
        p.animate([
            { opacity: 0 },
            { opacity: 1 }
        ], {
            duration: 250,
            easing: `ease-in-out`,
            delay: i * 100 + 1500,
            fill: `both`
        });
        p.style.opacity = 0;
        elements.push(p);
    }

    let endElement = document.createElement(`f`);
    endElement.innerText = `]`;

    let blinkKeyframes = [
        { opacity: 0 },
        { opacity: 1 },
        { opacity: 1 },
        { opacity: 0 },
        { opacity: 0 },
        { opacity: 1 },
        { opacity: 1 },
        { opacity: 0 },
        { opacity: 0 },
        { opacity: 0 },
        { opacity: 1 },
        { opacity: 1 },
    ];
    let blinkOptions = {
        duration: 1800,
        easing: `ease`,
        delay: 0,
        iterations: 1
    }
    beginningElement.animate(blinkKeyframes, blinkOptions);
    endElement.animate(blinkKeyframes, blinkOptions);
    /*beginningElement.animate([
        {  },
        { color: `#FFFFFF00` }
    ], {
        duration: 1000,
        easing: `ease-in-out`,
        delay: 2800,
        fill: `both`
    });
    endElement.animate([
        {  },
        { color: `#FFFFFF00` }
    ], {
        duration: 1000,
        easing: `ease-in-out`,
        delay: 2800,
        fill: `both`
    });*/
    introText.animate([
        { fontSize: `64px`, paddingTop: `30vh` },
        {}
    ], {
        duration: 750,
        easing: `ease-in-out`,
        delay: 2800,
        fill: `both`
    });


    introText.appendChild(beginningElement);
    introText.append(...elements);
    introText.appendChild(endElement);

    let refBar = document.getElementById("refBar");
    let fadeKeyframes = [
        { backgroundColor: `#000` },
        { backgroundColor: `initial` }
    ];
    let fadeOptions = {
        duration: 1000,
        easing: `ease-in-out`,
        delay: 3000,
        fill: `both`
    }
    introText.animate(fadeKeyframes, fadeOptions);
    refBar.animate(fadeKeyframes, fadeOptions);
    refBar.style.backgroundColor = `rgba(0, 0, 0, 1)`;

    for (let child of refBar.children) {
        child.animate([
            { opacity: 0 },
            { opacity: 1 }
        ], {
            duration: 2000,
            easing: `ease-in-out`,
            delay: 2800,
            fill: `both`
        });
    }

    let mainContent = document.getElementById("content");
    mainContent.animate([
        { opacity: 0 },
        { opacity: 1 }
    ], {
        duration: 2000,
        easing: `ease-in-out`,
        delay: 2800,
        fill: `both`
    });
}