document.addEventListener("DOMContentLoaded", () => {
    const newsContainer = document.querySelector('.news_cards');
    const filterButtons = document.querySelectorAll('.tab-btn'); // Ensure this matches your HTML class

    function renderArticles(filter = 'all') {
        const filtered = filter === 'all'
            ? news_articles
            : news_articles.filter(a => a.category === filter);
        newsContainer.innerHTML = filtered.map(art => `
                <a href="news-details.html?article=${art.slug}" class="news_card_link">
                    <div class="news_card ${art.category}">
                        <div class="card-img"><img src="${art.image}" alt="news"></div>
                        <div class="card-body">
                            <span class="category ${art.category}">${art.categoryLabel}</span>
                            <h3>${art.title}</h3>
                            <div class="card-footer">
                                <span>${art.author}</span>
                                <span>${art.date}</span>
                            </div>
                        </div>
                    </div>
                </a>
            `).join('');
    }

   
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
          
            filterButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');           
            const filterValue = e.target.getAttribute('data-filter') || e.target.innerText.toLowerCase().replace('game ', '');
            renderArticles(filterValue);
        });
    });

    // Initial render
    if (newsContainer) renderArticles('all');
});