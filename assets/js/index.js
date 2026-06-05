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