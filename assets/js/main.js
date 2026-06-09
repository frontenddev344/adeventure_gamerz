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


// main.js
function filterCards(category, element) {
    // 1. Handle active button state
    const buttons = document.querySelectorAll('.filter-nav .tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');

    // 2. Filter the data (Ensure 'news_articles' is defined in your data.js)
    const filtered = (category === 'all') 
        ? news_articles 
        : news_articles.filter(item => {
            if (category === 'guide') return item.categoryLabel === 'Game Guide';
            if (category === 'news') return item.categoryLabel === 'News';
            return false;
        });

    // 3. Render the filtered results
    const container = document.querySelector('.news_cards');
    container.innerHTML = filtered.map(article => `
        <div class="news_card ${article.categoryLabel === 'Game Guide' ? 'guide' : 'news'}">
            <div class="card-img">
                <img src="${article.image}" alt="${article.title}">
            </div>
            <div class="card-body">
                <span class="category">${article.categoryLabel}</span>
                <h3>${article.title}</h3>
                <div class="card-footer">
                    <span>${article.author}</span>
                    <span>${article.date}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// 4. Initial load: show everything when the page opens
document.addEventListener("DOMContentLoaded", () => {
    const allBtn = document.querySelector('.tab-btn');
    filterCards('all', allBtn);
});