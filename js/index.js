projects=[
    {   link: "Resume.html",
        image: "./images/resume.webp",
        alt:"Resume link",
        caption: "Resume"
    },
    {   link: "DaysUntil.html",
        image: "./images/daysUntil.webp",
        alt:"'Days Until' Project",
        caption: ""
    },
    {   link: "About.html",
        image: "./images/web.webp",
        alt:"About this website",
        caption:"About"
    },
    {   link: "Survive.html",
        image: "./images/survive.webp",
        alt:"A little survival game",
        caption:""
    },
    {   link: "/blog/index.html",
        image: "./images/blog.webp",
        alt:"My development blog",
        caption:""
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