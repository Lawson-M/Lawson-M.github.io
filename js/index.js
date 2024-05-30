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