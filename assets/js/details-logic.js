document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const gameSlug = params.get('game');
    
    // Find matching game
    const game = games.find(g => 
        g.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') === gameSlug
    );

    if (game) {
        // 1. Dynamic Banner Background
        const banner = document.querySelector('.hero-banner-section.sub_banner');
        if (banner) {
            // Use bannerImage if exists, otherwise use card image, fallback to black
            const bgSource = game.bannerImage || game.image || "#000";
            banner.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${bgSource}')`;
            banner.style.backgroundSize = 'cover';
            banner.style.backgroundPosition = 'center';
        }

        // 2. Banner Title
        const bannerTitle = document.querySelector('.hero-banner-section .hero-title');
        if (bannerTitle) bannerTitle.innerText = game.title;

        // 3. Populate Description (Split into paragraphs)
        const descriptionHTML = (game.description || "")
            .split('\n')
            .map(p => `<p class="mb-3">${p.trim()}</p>`)
            .join('');

        // 4. Inject Content
        const container = document.getElementById('details-container');
        if (container) {
            container.innerHTML = `
                        <div class="game-meta mb-4">
                    <p><strong class="text_theme">Release Year:</strong> ${game.year}</p>
                    <p><strong class="text_theme">Platforms:</strong> ${game.platform ? game.platform.join(', ') : 'N/A'}</p>
                    <p><strong class="text_theme">Genre:</strong> ${game.genre ? game.genre.join(', ') : 'N/A'}</p>
                </div>
                <div class="game-description mb-4">${descriptionHTML}</div>
                ${game.features ? `
                    <div class="key-features mb-4">
                        <h4 class="mb-3">Key Features</h4>
                        <ul class="list-unstyled">
                            ${game.features.map(f => `<li class="mb-2">• ${f}</li>`).join('')}
                        </ul>
                    </div>
                ` : ""}
                <p class="fst-italic">${game.closingNote || ""}</p>
            `;
        }
    }
});