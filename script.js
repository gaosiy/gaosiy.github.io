document.addEventListener('DOMContentLoaded', function() {
    const langToggle = document.getElementById('langToggle');
    let isEnglish = false;

    langToggle.addEventListener('click', function() {
        isEnglish = !isEnglish;
        toggleLanguage();
    });

    function toggleLanguage() {
        const elements = document.querySelectorAll('[data-en]');
        elements.forEach(element => {
            if (isEnglish) {
                if (!element.hasAttribute('data-zh')) {
                    element.setAttribute('data-zh', element.textContent);
                }
                element.textContent = element.getAttribute('data-en');
            } else {
                element.textContent = element.getAttribute('data-zh');
            }
        });

        langToggle.textContent = isEnglish ? '中文' : 'English';
        document.documentElement.lang = isEnglish ? 'en' : 'zh-CN';
    }
});
