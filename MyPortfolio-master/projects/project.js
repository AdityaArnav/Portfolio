const Projects = [
    {
        name : "Clone of MaxFashion.com",
        about : "Max Fashion is an indian ecommerce website mainly deals in clothing items.",
        img : "https://cdn-images-1.medium.com/max/1000/1*zCAZ3N6z-uvsrD54ujAk8A.png",
        gitrepo : "https://github.com/kakashi10-23/Max-clone",
        tech_stack : "HTML | CSS | JAVASCRIPT | React | Redux",
        tech_stackicons : [
            `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
            `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
            `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
            `<img src="https://img.icons8.com/color/50/000000/react-native.png"/>`,
            
        ],
        project_link : "https://leafy-sorbet-dccc4d.netlify.app/",
        project_type : "Team Project"
    },
    {
        name : "Clone of CB2.com",
        about : "A web application proving products related to Furniture and Home Decors and it is a US based website providing services there only.",
        img : "https://miro.medium.com/max/875/0*tVbZovAWdROKObmn.png",
        gitrepo : "https://github.com/RajaYadav00/CB2",
        blog : "https://medium.com/@arnavmania/cb2-website-clone-project-masai-school-c0b2bbedcd10",
        tech_stack : "HTML | CSS | JAVASCRIPT | API | JSON-SERVER",
        tech_stackicons : [
        `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
        `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
        `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,

        ],
        project_link : "https://magnificent-semolina-629ed5.netlify.app/",
        project_type : "Team Project"
    },

    {
        name : "Clone of Kohl's.com",
        about : "Kohl's is an American department store retail chain, operated by Kohl's Corporation. As of December 2021 it is the largest department store chain in the United States, with 1,162 locations, operating stores in every U.S. state except Hawaii.",
        img : "https://miro.medium.com/max/875/0*0uomEiFdFQ0aTyHD.png",
        gitrepo : "https://github.com/AkshayPatil96/Kohls",
        blog : "https://medium.com/@arnavmania/kohls-website-cloning-project-masai-8cc9ede3104e",
        tech_stack : "HTML | CSS | JAVASCRIPT",
        tech_stackicons : [
            `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
            `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,

            
        ],
        project_link : "https://friendly-shirley-a1a2a5.netlify.app/",
        project_type : "Team Project"

    }
    
]


let projects__container = document.getElementById("projects--container")

Projects.forEach(pro => {
    let main = document.createElement("div")
    main.setAttribute("class", "portfolio-item padd-15")
    main.innerHTML = `
    <div class="portfolio-item-inner shadow-dark">
    <div class="portfolio-img">
      <img src=${pro.img} alt="">
      <h3 class="project-name"><b>${pro.name}</b></h3> <br/>
      <h4 class="project-name project__about">${pro.about}</h4>
      <a href=${pro.project_link} target="_blank" class="see-project">Live💻</a>
      <a href=${pro.gitrepo} target="_blank" class="github-repo">GitHub</a>
      </div>
      <br/>
      <h3 class="project-name techcen"><b>Tech Stack</b></h3>
      <span>${pro.tech_stackicons[0] ? pro.tech_stackicons[0] : '' }
      ${pro.tech_stackicons[1] ? pro.tech_stackicons[1] : ''}
      ${pro.tech_stackicons[2] ? pro.tech_stackicons[2] : ''}
      ${pro.tech_stackicons[3] ? pro.tech_stackicons[3] : ''}
      ${pro.tech_stackicons[4] ? pro.tech_stackicons[4] : ''}
      ${pro.tech_stackicons[5] ? pro.tech_stackicons[5] : ''}
      ${pro.tech_stackicons[6] ? pro.tech_stackicons[6] : ''}
      ${pro.tech_stackicons[7] ? pro.tech_stackicons[7] : ''}
      ${pro.tech_stackicons[8] ? pro.tech_stackicons[8] : ''}
      ${pro.tech_stackicons[9] ? pro.tech_stackicons[9] : ''}
      </span>
      
    </div>
  </div>
    `
    projects__container.append(main)

})
