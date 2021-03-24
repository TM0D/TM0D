let header = document.querySelector('#intro');
let anim = [
    { t: "[RJUP]", ms: 100 },
    { t: "[LK2D]", ms: 100 },
    { t: "[SP0N]", ms: 100 },
    { t: "[RG3G]", ms: 100 },
    { t: "[S4G3]", ms: 100 },
    { t: "[GDOD]", ms: 100 },
    { t: "[TKLD]", ms: 100 },
    { t: "[LEID]", ms: 100 },
    { t: "[RMGD]", ms: 100 },
    { t: "[FMCD]", ms: 100 },
    { t: "[LMSD]", ms: 100 },
    { t: "[OMTD]", ms: 100 },
    { t: "[WM3D]", ms: 100 },
    { t: "[JMLD]", ms: 100 },
    { t: "[EM0D]", ms: 100 },
    { t: "[JM0D]", ms: 100 },
    { t: "[SM0D]", ms: 100 },
    { t: "[GM0D]", ms: 100 },
    { t: "[TM0D]", ms: 100 }
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