document.addEventListener('DOMContentLoaded', () => {
    // 汉堡菜单功能
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        navLinks.classList.toggle('active');
    });

    // 暗色模式切换
    const themeToggle = document.querySelector('.theme-toggle');
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // 搜索功能
    const searchInput = document.querySelector('.search-input');
    let searchTimeout;
    
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            performSearch(e.target.value);
        }, 300);
    });

    // 点击外部关闭菜单
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-content') && window.innerWidth <= 768) {
            navLinks.classList.remove('active');
        }
    });

    function performSearch(query) {
        console.log('执行搜索:', query);
        // 这里添加实际搜索逻辑，例如：
        // fetch(`/api/search?q=${encodeURIComponent(query)}`)
        //     .then(response => response.json())
        //     .then(updateSearchResults);
    }
});