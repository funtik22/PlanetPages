// Факты о Чили
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

// Элементы DOM
const factButton = document.getElementById('fact-button');
const factDisplay = document.getElementById('fact-display');
const themeButton = document.getElementById('theme-button');

// Показ случайного факта
factButton.addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    factDisplay.textContent = facts[randomIndex];
    factDisplay.classList.remove('hidden');
    factDisplay.classList.add('visible');
});

// Переключение темы
themeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    
    // Сохранение предпочтения темы в localStorage
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
        themeButton.textContent = 'Переключить на светлую тему';
    } else {
        localStorage.setItem('theme', 'light');
        themeButton.textContent = 'Переключить на темную тему';
    }
});

// Проверка сохраненной темы при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeButton.textContent = 'Переключить на светлую тему';
    }
    
    // Плавное появление элементов при загрузке
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
// Обновленный код для плавной прокрутки с учетом фиксированной навигации
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        // Учитываем высоту фиксированной навигации
        const navHeight = document.querySelector('nav').offsetHeight;
        const targetPosition = targetElement.offsetTop - navHeight - 20; // Дополнительный отступ
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});