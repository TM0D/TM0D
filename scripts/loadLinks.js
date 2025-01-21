const mainDiv1 = document.getElementById(`links1`);
const mainDiv2 = document.getElementById(`links2`);

mainDiv1.appendChild(loadLink(`GitHub`, `https://github.com/Saeraphinx`, `images/github.svg`, `#FFF`, `#000`));

mainDiv1.appendChild(loadLink(`BlueSky`, `https://bsky.app/profile/saeraphinx.dev`, `images/bluesky.svg`, `#0285FF`));

mainDiv1.appendChild(loadLink(`Twitter`, `https://twitter.com/Saeraphinx`, `images/twitter.svg`, `#1DA1F2`));

mainDiv1.appendChild(loadLink(`Twitch`, `https://twitch.tv/Saeraphinx`, `images/twitch.svg`, `#9146FF`));

mainDiv1.appendChild(loadLink(`Discord`, `discord://discord.com/users/213074932458979330`, `images/discord.svg`, `#5865F2`));

mainDiv1.appendChild(loadLink(`YouTube`, `https://www.youtube.com/@Saeraphinx`, `images/youtube.svg`, `#FF0000`));

mainDiv2.appendChild(loadLink(`BeatSaver`, `https://beatsaver.com/profile/4284987`, `images/bs.png`, `#FFF`, `#000`));

mainDiv2.appendChild(loadLink(`BeatLeader`, `https://beatleader.xyz/u/76561198323656813`, `images/bl.png`, `#E0F`, `#000`));

mainDiv2.appendChild(loadLink(`ScoreSaber`, `https://scoresaber.com/u/76561198323656813`, `images/ss.png`, `#FF0`, `#000`));





function loadLink(name, url, iconUrl, color = `#000`, hoverColor = `#000`) {
    let linkDiv = document.createElement(`div`);
    linkDiv.style.position = `relative`;
    linkDiv.style.margin = `10px`;
    linkDiv.classList.add(`link`);
    let linkDivBg = document.createElement(`div`);
    linkDivBg.classList.add(`linksHoverGrad`);
    linkDiv.appendChild(linkDivBg);
    let linkA = document.createElement(`a`);
    linkA.style.borderBlockColor = color;
    linkA.style.color = color;
    linkA.href = url;
    linkA.target = `_blank`;
    linkA.style.zIndex = 1;
    linkDiv.onmouseover = () => {
        linkDivBg.style.opacity = 1;
        linkA.style.backgroundColor = hoverColor;
        linkA.style.boxShadow = `0 0 10px ${color}`;
    };
    linkDiv.onmouseout = () => {
        linkDivBg.style.opacity = 0;
        linkA.style.backgroundColor = `transparent`; 
        linkA.style.boxShadow = `none`;
    };

    let linkImg = document.createElement(`img`);
    linkImg.src = iconUrl;
    linkImg.alt = `${name} Logo`;
    linkImg.width = 30;
    linkImg.height = 30;
    linkImg.style.paddingRight = `5px`;
    linkImg.style.zIndex = 1;
    linkA.appendChild(linkImg);

    let linkP = document.createElement(`p`);
    linkP.innerText = name;
    linkP.style.zIndex = 1;
    linkA.appendChild(linkP);

    linkDiv.appendChild(linkA);
    return linkDiv;
}