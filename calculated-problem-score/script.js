const table = document.getElementById('table-body');

function updateScores() {
    [...table.rows].forEach(row => {
        const inputs = row.querySelectorAll('input');
        const [p, t, b] = [...inputs].map(i => parseInt(i.value) || 0);
        const cps = Math.pow(p, 3) * Math.pow(t, 2) * b;
        row.querySelector('.score').textContent = isNaN(cps) ? '—' : cps;
    });
}

table.addEventListener('input', updateScores);
updateScores();
