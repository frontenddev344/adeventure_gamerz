document.addEventListener("DOMContentLoaded", () => {
    const newsContainer = document.querySelector('.news_cards');
    
    if (newsContainer) {
        newsContainer.innerHTML = news_articles.map(art => `
            <div class="news_card ${art.category}">
                <div class="card-img">
                    <img src="${art.image}" alt="news">
                </div>
                <div class="card-body">
                    <span class="category ${art.category}">${art.categoryLabel}</span>
                    <h3>${art.title}</h3>
                    <div class="card-footer">
                        <span>${art.author}</span>
                        <span>${art.date}</span>
                    </div>
                </div>
            </div>
        `).join('');
    }
});