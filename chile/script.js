const facts = [
    "Чили — самая длинная и узкая страна в мире, протянувшаяся на 4300 км с севера на юг.",
    "Пустыня Атакама в Чили — самое сухое место на Земле, где в некоторых районах дождь не выпадал сотни лет.",
    "Чили является одним из крупнейших производителей меди в мире, обеспечивая около 1/3 мирового производства.",
    "Остров Пасхи, известный своими загадочными каменными истуканами моаи, принадлежит Чили.",
    "В Чили находится самый высокий активный вулкан в мире — Охос-дель-Саладо (6893 м).",
    "Чили имеет одну из самых стабильных экономик в Латинской Америке.",
    "Чилийское вино известно во всем мире, особенно карменер, который считается национальным сортом винограда.",
    "В Чили находится самая южная точка континентальной Южной Америки — мыс Горн.",
    "Чили претендует на часть Антарктиды, называя её Чилийской Антарктической Территорией.",
    "Сантьяго, столица Чили, расположен в долине у подножия Анд, что создает впечатляющий пейзаж."
];

const factButton = document.getElementById('fact-button');
const factDisplay = document.getElementById('fact-display');
const themeButton = document.getElementById('theme-button');

factButton.addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    factDisplay.textContent = facts[randomIndex];
    factDisplay.classList.remove('hidden');
    factDisplay.classList.add('visible');
});

themeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
        themeButton.textContent = 'Переключить на светлую тему';
    } else {
        localStorage.setItem('theme', 'light');
        themeButton.textContent = 'Переключить на темную тему';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeButton.textContent = 'Переключить на светлую тему';
    }
    
    const elements = document.querySelectorAll('section, header, footer');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s, transform 0.5s';
    });
    
    setTimeout(() => {
        elements.forEach(element => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        });
    }, 100);
});
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        
        if (targetId.startsWith('#')) {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navHeight = document.querySelector('nav').offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});
