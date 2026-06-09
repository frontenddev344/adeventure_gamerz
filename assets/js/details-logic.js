document.addEventListener("DOMContentLoaded", () => {
    // 1. Get the game slug from the URL
    const params = new URLSearchParams(window.location.search);
    const gameSlug = params.get('game');
    
    // 2. Find the matching game in the 'games' array
    if (typeof games === 'undefined') {
        console.error("Error: 'games' array not found. Check if data.js is loaded correctly.");
        return;
    }

    const game = games.find(g => 
        g.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') === gameSlug
    );

    if (game) {
        const bannerTitle = document.querySelector('.hero-banner-section .hero-title');
        if (bannerTitle) {
            bannerTitle.innerText = game.title;
        }

          const descriptionHTML = (game.description || "")
            .split('\n')
            .map(paragraph => `<p class="mb-3">${paragraph.trim()}</p>`)
            .join('');

        const container = document.getElementById('details-container');
        if (container) {
            container.innerHTML = `
                        
                <div class="game-meta mb-4">
                    <p><strong class="text_theme">Release Year:</strong> ${game.year}</p>
                    <p><strong class="text_theme">Platforms:</strong> ${game.platform ? game.platform.join(', ') : 'N/A'}</p>
                    <p><strong class="text_theme">Genre:</strong> ${game.genre ? game.genre.join(', ') : 'N/A'}</p>
                </div>
                
                <div class="game-description mb-4">
                    ${descriptionHTML}
                </div>

                <div class="key-features mb-4">
                    <h4 class="mb-3 text_theme">Key Features</h4>
                    <ul class="list-unstyled">
                        ${game.features ? game.features.map(feat => `<li class="mb-2"> ${feat}</li>`).join('') : '<li>No features listed.</li>'}
                    </ul>
                </div>
                
                <p class="fst-italic">${game.closingNote || ""}</p>
            `;
        }
    } else {
        // Handle case where game is not found
        const container = document.getElementById('details-container');
        if (container) {
            container.innerHTML = `<h2 class="text-center">Game Not Found</h2><p class="text-center">The requested game could not be loaded.</p>`;
        }
    }
});