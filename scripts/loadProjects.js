let isAllProjectsPageTagVal = document.head.querySelector('meta[name="isAllProjectsPage"]')
if (isAllProjectsPageTagVal === null) {
    isAllProjectsPageTagVal = `false`;
} else {
    //console.log(isAllProjectsPageTagVal); 
    isAllProjectsPageTagVal = isAllProjectsPageTagVal.getAttribute('content'); 
}
let metaTagVal = isAllProjectsPageTagVal === `true`;
loadProjects(metaTagVal);

function loadProjects(isAllProjectsPage) {
    let projectsDiv = document.getElementById(`projects`);

    projectsDiv.appendChild(addProject(`Extra Sensory II`, `Playtester & Live Stream Host for the Extra Sensory II Beat Saber Live Event.`, [websiteUrl(`https://exsii.totalbs.dev`, `Event Page`, `images/tbs.png`), youtubeUrl(`https://www.youtube.com/watch?v=dt_OoYx-N6c`, `Stream VOD`)]));

    projectsDiv.appendChild(addProject(`BadBeatMods`, `A game-agnostic mod hosting platform in use by the Beat Saber Modding Group.`, [websiteUrl(`https://beatmods.com`), githubUrl(`https://github.com/Saeraphinx/BadBeatMods`)]));

    if (isAllProjectsPage) {
        projectsDiv.appendChild(addProject(`Saeraphinx.dev`, `This website!`, [websiteUrl(`https://saeraphinx.dev`, `Website`, `images/favicon.ico`), githubUrl(`https://github.com/Saeraphinx/saeraphinx.dev`)]));
    }

    projectsDiv.appendChild(addProject(`Grazzy's Map Downloads`, `A webpage & file host for Grazzy's Minecraft world downloads.`, [websiteUrl(`https://grazzy.sae.sh`)]));

    projectsDiv.appendChild(addProject(`Beasties 2024`, `Developer of the Voting & Judging panel for the 2024 BeastSaber Mapping Awards.`, [websiteUrl(`https://mappingawards.saeraphinx.dev`, `Website`, `images/beasties.png`)]));

    projectsDiv.appendChild(addProject(`Beat Saber World Cup 2024`, `Staff Member & Stream Host for the Beat Saber World Cup tournament.`, [websiteUrl(`https://cube.community/tournaments/bswc-2024`, `Tournament Page`, `images/cc.png`)]));

    projectsDiv.appendChild(addProject(`Beasties 2023`, `One of the editors behind the 2023 Beast Saber Mapping Awards winners announcement video.`, [youtubeUrl(`https://www.youtube.com/watch?v=qMIiUZ7D8GU`)]));

    projectsDiv.appendChild(addProject(`Cube Community 2023 Rewind`, `One of the many editors behind the 2023 Cube Community Rewind video.`, [youtubeUrl(`https://www.youtube.com/watch?v=bbwJkCF4xp0`)]));

    if (isAllProjectsPage) {
        projectsDiv.appendChild(addProject(`Extra Sensory II Teaser Trailer`, `Thumbnail artist for the Extra Sensory II teaser trailer.`, [youtubeUrl(`https://www.youtube.com/watch?v=gDIOShFXePo`)]));

        projectsDiv.appendChild(addProject(`Ranking Overseer`, `Discord Bot made to manage the ranking queue for BeatLeader.`));

        projectsDiv.appendChild(addProject(`Luma`, `A private bot made originally as a replacement for MEE6, but now does much more.`));

        projectsDiv.appendChild(addProject(`NewMapBot`, `Discord Bot that posts new maps from BeatSaver to a Discord channel.`));

        projectsDiv.appendChild(addProject(`CustomMenuText`, `A Beat Saber mod that allows for custom text in the main menu.`, [githubUrl(`https://github.com/Saeraphinx/CustomMenuText`)]));

        projectsDiv.appendChild(addProject(`NotOutYet`, `Beat Saber mod that replaces all instances of your username with text of your choice.`, [githubUrl(`https://github.com/Saeraphinx/NotOutYet`)]));

        projectsDiv.appendChild(addProject(`NullSearchFix`, `Beat Saber mod for 1.34.2 that fixes a base game crash when a song with no title is loaded.`, [githubUrl(`https://github.com/Saeraphinx/NullSearchFix`)]));
    }
}

function addProject(name, description, links = []) {
    let baseDiv = document.createElement(`div`);
    baseDiv.classList.add(`project`);
    let nameP = document.createElement(`p`);
    nameP.innerText = name;
    nameP.classList.add(`projectTitle`);
    baseDiv.appendChild(nameP);
    let descriptionP = document.createElement(`p`);
    descriptionP.innerText = description;
    descriptionP.classList.add(`projectDescription`);
    baseDiv.appendChild(descriptionP);

    let linksDiv = document.createElement(`div`);
    linksDiv.classList.add(`projectLinks`);
    for (let link of links) {
        let linkA = document.createElement(`a`);
        linkA.href = link.url;
        linkA.target = `_blank`;
        let linkImg = document.createElement(`img`);
        linkImg.src = link.image;
        linkImg.alt = link.text;
        if (link.image && link.image.includes(`beasties`)) {
            linkImg.style.borderRadius = `10%`;
        }
        linkA.appendChild(linkImg);
        let linkP = document.createElement(`p`);
        linkP.innerText = link.text;
        linkA.appendChild(linkP);
        linksDiv.appendChild(linkA);
    }
    baseDiv.appendChild(linksDiv);
    return baseDiv;
}

function websiteUrl(url, text = `Website`, image = `images/web.svg`) {
    return { url: url, image: image, text: text };
}

function githubUrl(url, text = `GitHub`, image = `images/github.svg`,) {
    return { url: url, image: image, text: text };
}

function youtubeUrl(url, text = `YouTube`, image = `images/youtube.svg`) {
    return { url: url, image: image, text: text };
}