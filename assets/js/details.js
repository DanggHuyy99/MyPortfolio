var projectSelected = {}
document.addEventListener('DOMContentLoaded', function () {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    console.log(portfolioItems);
    const portfolioDetails = document.getElementById('portfolio-details');

    portfolioItems.forEach(item => {
        item.addEventListener('click', function () {
            const projectId = this.dataset.projectId;
            console.log("projectId", projectId);

            // Lấy thông tin dự án tương ứng
            const projectInfo = getProjectInfoById(projectId);
            localStorage.setItem("projectInfo", JSON.stringify(projectInfo));
            projectSelected = projectInfo
        });
    });

    

    function getProjectInfoById(id) {
        const projects = [
            {
                id: 1,
                title: 'MARVEL CINEMA',
                titleVi: 'Rạp chiếu phim Marvel',
                projectName: 'Marvel Cinema',
                projectNameVi: 'Marvel Cinema',
                projectDate: '3 / 2023 - 4 / 2023',
                projectDateVi: '3 / 2023 - 4 / 2023',
                teamSize: '1',
                role: 'Personal',
                description: "A simple website that simulates Marvel's movie viewing system, this is my first product. Mainly invest time in the interface",
                descriptionDetails: [
                    'Build interface using css.',
                    'Describe the function of viewing and stopping movies, which can be downloaded. Can be expanded in the future.',
                ],
                technology: 'HTML/CSS, JavaScript, JSON file, Save items by LocalStorage',
                database: 'None',
                img: {
                    img1: "assets/img/portfolio/project1.png.png",
                },
                url: 'https://dangghuyy99.github.io/CaseStudy_MarvelCinema/home.html',
            },
            {
                id: 2,
                title: 'This is an example of portfolio detail 2',
                projectName: 'Project 2',
                projectDate: '02 March, 2021',
                teamSize: '8',
                description: 'Description for Project 2',
                url: 'http://www.example.com',
            },
            {
                id: 3,
                title: 'LAZADA: CLOTHING STORES',
                projectName: 'Lazada',
                projectDate: '5 / 2023 - 6 / 2023',
                teamSize: '3',
                role: 'Leader',
                description: 'An online store selling clothing, technology and jewelry',
                descriptionDetails: [
                    'Database administration and website design.',
                    'Build logic for a streamlined, scalable ordering, purchasing, and payment platform.',
                ],
                technology: 'HTML/CSS, JavaScript, Java Servlet, JQuery, Bootstrap, JSP',
                database: 'MySQL',
                img: {
                    img1: "assets/img/portfolio/lazadafixdetail.png",
                },
                url: 'https://bit.ly/3FWDDpx',
            },
            {
                id: 5,
                title: 'AIRBNB: HOMESTAY AND HIGH QUALITY APARTMENT',
                projectName: 'Airbnb',
                projectDate: '8 / 2023 - 10 / 2023',
                teamSize: '4',
                role: 'Member',
                description: 'A website that simulates a reservation system between hosts and customers',
                descriptionDetails: [
                    'Collaborate with team to design features, database schema, and RESTful APIs.',
                    'Build booking service between host and customers.',
                    'Build a management system for intermediaries(Airbnb)'
                ],
                technology: 'Java Spring boot, ReactJS, HTML, CSS, JS, Material-UI, Bootstrap, Setup Spring Security and JWT',
                database: 'MySQL',
                img: {
                    img1: "assets/img/portfolio/airbnbfix2.jpg",
                },
                url: 'https://bit.ly/40rrcvg',
            },
            {
                id: 4,
                title: 'TINDER: LOVE MAKER',
                projectName: 'Tinder',
                projectDate: '6 / 2023 - 8 / 2023',
                teamSize: '3',
                role: 'Leader',
                description: 'A basic web used to connect to single people to help them find their soul mate ',
                descriptionDetails: [
                    'Database administration and website design.',
                    'Build logic for a streamlined, scalable real-time search and messaging platform.',
                ],
                technology: 'JS (Main), Draggable, HTML, CSS, Bootstrap',
                database: 'MySQL',
                img: {
                    img1: "assets/img/portfolio/tinderfix.jpg",
                },
                url: 'https://bit.ly/4759QqI',
            },
        ];

        return projects.find(project => project.id == id);
    }
});

function getProjects() {
    const projects = [
        {
            id: 1,
            title: 'MARVEL CINEMA',
            titleVi: 'Rạp chiếu phim Marvel',
            projectName: 'Marvel Cinema',
            projectNameVi: 'Marvel Cinema',
            projectDate: '3 / 2023 - 4 / 2023',
            projectDateVi: '3 / 2023 - 4 / 2023',
            teamSize: '1',
            role: 'Personal',
            description: "A simple website that simulates Marvel's movie viewing system, this is my first product. Mainly invest time in the interface",
            descriptionDetails: [
                'Build interface using css.',
                'Describe the function of viewing and stopping movies, which can be downloaded. Can be expanded in the future.',
            ],
            technology: 'HTML/CSS, JavaScript, JSON file, Save items by LocalStorage',
            database: 'None',
            img: {
                img1: "assets/img/portfolio/project1.png.png",
            },
            url: 'https://dangghuyy99.github.io/CaseStudy_MarvelCinema/home.html',
        },
        {
            id: 2,
            title: 'This is an example of portfolio detail 2',
            projectName: 'Project 2',
            projectDate: '02 March, 2021',
            teamSize: '8',
            description: 'Description for Project 2',
            url: 'http://www.example.com',
        },
        {
            id: 3,
            title: 'LAZADA: CLOTHING STORES',
            projectName: 'Lazada',
            projectDate: '5 / 2023 - 6 / 2023',
            teamSize: '3',
            role: 'Leader',
            description: 'An online store selling clothing, technology and jewelry',
            descriptionDetails: [
                'Database administration and website design.',
                'Build logic for a streamlined, scalable ordering, purchasing, and payment platform.',
            ],
            technology: 'HTML/CSS, JavaScript, Java Servlet, JQuery, Bootstrap, JSP',
            database: 'MySQL',
            img: {
                img1: "assets/img/portfolio/lazadafixdetail.png",
            },
            url: 'https://bit.ly/3FWDDpx',
        },
        {
            id: 5,
            title: 'AIRBNB: HOMESTAY AND HIGH QUALITY APARTMENT',
            projectName: 'Airbnb',
            projectDate: '8 / 2023 - 10 / 2023',
            teamSize: '4',
            role: 'Member',
            description: 'A website that simulates a reservation system between hosts and customers',
            descriptionDetails: [
                'Collaborate with team to design features, database schema, and RESTful APIs.',
                'Build booking service between host and customers.',
                'Build a management system for intermediaries(Airbnb)'
            ],
            technology: 'Java Spring boot, ReactJS, HTML, CSS, JS, Material-UI, Bootstrap, Setup Spring Security and JWT',
            database: 'MySQL',
            img: {
                img1: "assets/img/portfolio/airbnbfix2.jpg",
            },
            url: 'https://bit.ly/40rrcvg',
        },
        {
            id: 4,
            title: 'TINDER: LOVE MAKER',
            projectName: 'Tinder',
            projectDate: '6 / 2023 - 8 / 2023',
            teamSize: '3',
            role: 'Leader',
            description: 'A basic web used to connect to single people to help them find their soul mate ',
            descriptionDetails: [
                'Database administration and website design.',
                'Build logic for a streamlined, scalable real-time search and messaging platform.',
            ],
            technology: 'JS (Main), Draggable, HTML, CSS, Bootstrap',
            database: 'MySQL',
            img: {
                img1: "assets/img/portfolio/tinderfix.jpg",
            },
            url: 'https://bit.ly/4759QqI',
        },
    ];

    return projects;
}

function updateProjectElements(projects) {
    projects.forEach(project => {
        const projectElement = document.querySelector(`[data-project-id="${project.id}"]`);
        const projectTitleElement = projectElement.querySelector('.portfolio-info h4');
        const projectTypeElement = projectElement.querySelector('.portfolio-info p');

        projectTitleElement.textContent = project.title;
        projectTypeElement.textContent = 'Web'; 
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleLanguage');
    let isEnglish = false;

    toggleButton.addEventListener('click', function () {
        const languageText = isEnglish ? 'English' : 'Tiếng Việt';
        toggleButton.textContent = `${languageText}`;

        const elementsToTranslate = document.querySelectorAll('[data-translation]');
        elementsToTranslate.forEach(element => {
            const currentLanguage = element.textContent;
            const newLanguage = element.dataset.translation;
            element.textContent = newLanguage;
            element.dataset.translation = currentLanguage;
        });

        isEnglish = !isEnglish;

        const projects = getProjects(); 

        projects.forEach(project => {
            project.title = project.titleVi;
            project.projectName = project.projectNameVi; 
            project.description = project.descriptionVi; 
        });

        updateProjectElements(projects);

    });
});
