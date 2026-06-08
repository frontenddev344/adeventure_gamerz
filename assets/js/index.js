// Header JS Start
document.addEventListener('DOMContentLoaded', () => {
  const searchExpandBtn = document.getElementById('searchExpandBtn');
  const searchCancelBtn = document.getElementById('searchCancelBtn');
  const searchBarContainer = document.getElementById('searchBarContainer');
  const searchInput = document.getElementById('searchInput');
  const menuOpenBtn = document.getElementById('menuOpenBtn');
  const menuCloseBtn = document.getElementById('menuCloseBtn');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
  const mobileSearchBtn = document.getElementById('mobileSearchBtn');
  const mobileMainPanel = document.getElementById('mobileMainPanel');
  const subPanelTriggers = document.querySelectorAll('.dynamic-trigger');
  const subPanelBackButtons = document.querySelectorAll('.panel-back-btn');
  function openSearch() {
    searchBarContainer.classList.add('active');
    setTimeout(() => searchInput.focus(), 120);
    closeMobileMenu();
  }
  function closeSearch() {
    searchBarContainer.classList.remove('active');
    searchInput.value = '';
  }
  searchExpandBtn.addEventListener('click', openSearch);
  mobileSearchBtn.addEventListener('click', openSearch);
  searchCancelBtn.addEventListener('click', closeSearch);
  function openMobileMenu() {
    mobileMenuOverlay.classList.add('active');
    mobileMainPanel.className = 'mobile-panel-view active';
    document.querySelectorAll('.mobile-panel-view:not(#mobileMainPanel)').forEach(panel => {
      panel.classList.remove('active');
    });
  }
  function closeMobileMenu() {
    mobileMenuOverlay.classList.remove('active');
    setTimeout(() => {
      mobileMainPanel.className = 'mobile-panel-view active';
    }, 300);
  }
  menuOpenBtn.addEventListener('click', openMobileMenu);
  menuCloseBtn.addEventListener('click', closeMobileMenu);
  subPanelTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const targetId = trigger.getAttribute('data-target');
      const targetPanel = document.getElementById(targetId);

      if (targetPanel) {
        mobileMainPanel.classList.remove('active');
        mobileMainPanel.classList.add('shifted-left');
        targetPanel.classList.add('active');
      }
    });
  });
  subPanelBackButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const activeSubPanel = btn.closest('.mobile-panel-view');
      if (activeSubPanel) {
        activeSubPanel.classList.remove('active');
        mobileMainPanel.classList.remove('shifted-left');
        mobileMainPanel.classList.add('active');
      }
    });
  });
});

// Header JS End

// Tabs JS Start
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {

        // Remove active class from tabs
        tabs.forEach(item => item.classList.remove("active"));

        // Hide all contents
        tabContents.forEach(content =>
            content.classList.remove("active")
        );

        // Activate current tab
        tab.classList.add("active");

        // Show matching content
        const target = document.getElementById(
            tab.dataset.tab
        );

        target.classList.add("active");
    });
});
// Tabs JS End

// Home Videos JS  Start
const modal = document.getElementById("videoModal");
const player = document.getElementById("videoPlayer");
const closeBtn = document.getElementById("closeModal");

document.querySelectorAll(".video-trigger").forEach(el => {

    el.addEventListener("click", () => {

        const src = el.dataset.video;

        player.src = src;
        modal.classList.add("active");

        player.play();
    });

});

function closeModal() {
    player.pause();
    player.currentTime = 0;
    player.src = "";
    modal.classList.remove("active");
}

closeBtn.onclick = closeModal;

modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
});

// Home Videos JS  End

// News Filter JS Start
function filterCards(category, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');


  document.querySelectorAll('.news_card').forEach(card => {
      if (category === 'all' || card.classList.contains(category)) {
          card.style.display = 'block';
      } else {
          card.style.display = 'none';
      }
  });
}

// News Filter JS End