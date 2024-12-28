// Load language data from the JSON file
fetch('/language-switcher/languages.json')
  .then(response => response.json())
  .then(languages => {
    const elements = document.querySelectorAll('[data-key]');
    const currentLangElem = document.getElementById('current-lang');

    // Function to switch language
    function switchLanguage(lang) {
      elements.forEach(el => {
        const key = el.getAttribute('data-key');
        if (languages[lang] && languages[lang][key]) {
          el.textContent = languages[lang][key];
          if (el.tagName === 'META' && el.hasAttribute('content')) {
            el.setAttribute('content', languages[lang][key]);
          }
        }
      });
      currentLangElem.textContent = lang.toUpperCase(); // Update current language text
      document.documentElement.lang = lang; // Update lang attribute
    }

    // Attach event listeners to language options
    document.querySelectorAll('.language ul li a[data-lang]').forEach(link => {
      link.addEventListener('click', event => {
        const lang = event.target.getAttribute('data-lang');
        localStorage.setItem('language', lang); // Save the chosen language
        switchLanguage(lang);
      });
    });

    // Load default or saved language
    const savedLang = localStorage.getItem('language') || 'ar';
    switchLanguage(savedLang);
  })
  .catch(error => console.error('Language file not found:', error));
