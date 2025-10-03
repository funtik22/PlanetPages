document.getElementById('clock').textContent = new Intl.DateTimeFormat('ru-RU', {hour: '2-digit', minute: '2-digit', timeZone: 'America/Sao_Paulo'}).format(new Date());

const facts = ["В Бразилии ежегодно проходит самый большой в мире карнавал.",
    "Амазонка — самая полноводная река планеты, и она течёт в Бразилии.",
    "Футбол — национальная страсть, Бразилия выигрывала чемпионат мира 5 раз.",
    "В Бразилии официальным языком является португальский, а не испанский.",
    "Статуя Христа-Искупителя в Рио входит в список новых семи чудес света."];
let index = 0;
function next() {
    document.getElementById("fact").textContent = facts[index];
    index = (index + 1) % facts.length;
}