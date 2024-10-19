projects=[
    {   link: "DaysUntil.html",
        image: "./images/daysUntil.webp",
        alt:"'Days Until' Project",
        caption: ""
    },
    {   link: "Survive.html",
        image: "./images/survive.webp",
        alt:"A little survival game",
        caption:""
    },
    {   link: "E2E.html",
        image: "./images/Congestion.png",
        alt:"End 2 End Calculator and Congestion Simulator",
        caption:"Delay"
    },
    {   link: "BigDog.html",
        image: "./images/BDACard.png",
        alt:"Hardcoded Java RPG 'BDA'",
        caption:"BDA"
    },
    {   link: "SDB.html",
        image: "./images/SDBCard.png",
        alt:"mySQL Database with Java UI",
        caption:"Secret Database"
    },
    {   link: "StringProc.html",
        image: "./images/web.webp",
        alt:"A few string processing algorithms",
        caption:"String Processing"
    }
]

const allProjects = document.getElementById('all-projects')

for (project of projects){
    allProjects.innerHTML +=`
    <div class="project-box">
        <a href=${project.link}>
            <img src=${project.image}  style="width:100%" alt=${project.alt}>
        </a>
        <div class="img-text"> ${project.caption} </div>
    <div>
    `;
}