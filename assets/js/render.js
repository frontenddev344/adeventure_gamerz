function renderCards(data) {

    const grid =
        document.getElementById("grid");

    grid.innerHTML = "";

    data.forEach(game => {

        const platforms =
            game.platform
                .map(p => `<span class="pill">${p}</span>`)
                .join("");

        const genres =
            game.genre
                .map(g => `<span class="tag">${g}</span>`)
                .join("");

        grid.innerHTML += `
        <div class="game-card"
             style="background-image:url('${game.image}')">

            <div class="card-overlay">

                <div class="card-title">
                    ${game.title}
                </div>

                <div class="card-year">
                    ${game.year}
                </div>

                <div class="card-tags">
                    ${genres}
                </div>

                <div class="card-platforms">
                    ${platforms}
                </div>

            </div>
        </div>`;
    });
}