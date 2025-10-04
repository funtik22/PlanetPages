document.addEventListener('DOMContentLoaded', function () {
    const facts = [
        "Чили — самая длинная и узкая страна в мире, протянувшаяся на 4300 км с севера на юг.",
        "Пустыня Атакама в Чили — самое сухое место на Земле, где в некоторых районах дождь не выпадал сотни лет.",
        "Чили является одним из крупнейших производителей меди в мире, обеспечивая около 1/3 мирового производства.",
        "Остров Пасхи, известный своими загадочными каменными истуканами моаи, принадлежит Чили.",
        "В Чили находится самый высокий активный вулкан в мире — Охос-дель-Саладо (6893 м).",
        "Чили имеет одну из самых стабильных экономик в Латинской Америке.",
        "Чилийское вино известно во всем мире, особенно сорт карменер.",
        "В Чили находится самая южная точка континентальной Южной Америки — мыс Горн.",
        "Чили претендует на часть Антарктиды, называя её Чилийской Антарктической Территорией.",
        "Сантьяго, столица Чили, расположен в долине у подножия Анд, что создает впечатляющий пейзаж.",
        "Чили граничит с Перу, Боливией и Аргентиной.",
        "Чилийский национальный гимн исполняется на мотив французской революционной песни 'La Marseillaise'.",
        "Чилийский поэт Пабло Неруда стал лауреатом Нобелевской премии по литературе в 1971 году.",
        "В Чили находится крупнейший радиотелескоп ALMA, один из ключевых инструментов в поиске сигналов от внеземного разума.",
        "Вальпараисо, портовый город в Чили, объявлен объектом Всемирного наследия ЮНЕСКО."
    ];

    const showFactBtn = document.getElementById('show-fact');
    const factDisplay = document.getElementById('fact-display');
    const toggleThemeBtn = document.getElementById('toggle-theme');
    const body = document.body;

    showFactBtn.addEventListener('click', function () {
        const randomIndex = Math.floor(Math.random() * facts.length);
        factDisplay.textContent = facts[randomIndex];
    });

    toggleThemeBtn.addEventListener('click', function () {
        body.classList.toggle('dark');
        if (body.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark');
    }
});