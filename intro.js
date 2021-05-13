let header = document.querySelector('#intro');
let anim = [
    { t: "[RJUP]", ms: 75 },
    { t: "[LK2D]", ms: 75 },
    { t: "[SP0N]", ms: 75 },
    { t: "[RG3G]", ms: 75 },
    { t: "[S4G3]", ms: 75 },
    { t: "[RJUP]", ms: 75 },
    { t: "[LK2D]", ms: 75 },
    { t: "[SP0N]", ms: 75 },
    { t: "[RG3G]", ms: 75 },
    { t: "[S4G3]", ms: 75 },
    { t: "[GDOD]", ms: 75 },
    { t: "[TKLD]", ms: 75 },
    { t: "[LEID]", ms: 75 },
    { t: "[RMGD]", ms: 75 },
    { t: "[FMCD]", ms: 75 },
    { t: "[LMSD]", ms: 75 },
    { t: "[OMTD]", ms: 75 },
    { t: "[WM3D]", ms: 75 },
    { t: "[JMLD]", ms: 75 },
    { t: "[EM0D]", ms: 75 },
    { t: "[JM0D]", ms: 75 },
    { t: "[SM0D]", ms: 75 },
    { t: "[GM0D]", ms: 75 },
    { t: "[TM0D]", ms: 75 }
];
let stepDenominator = 1;
if (window.localStorage.stepDenominator)
    stepDenominator = window.localStorage.stepDenominator;
let i = 0;
let update = () => {
    let step = anim[i];
    header.innerText = step.t;
    i++;

    if (i < anim.length)
        setTimeout(update, step.ms / stepDenominator);
    else {
        header.classList.add('top');
        setTimeout(() => {
            document.getElementById('main').style.opacity = 1;
            initGlobe();
        }, 500);
        window.localStorage.stepDenominator = 2;
    }
}
update();

// Thanks otto