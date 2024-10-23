let registerBtn = document.querySelector('.registr-but');
    registerBtn.addEventListener("click", function () {       
        window.location.assign('registration.html');
    })

    // document.querySelector('.scroll-to-footer').addEventListener('click', function() {
    //     document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
    // });


    // document.getElementById('themeToggle').addEventListener('change', function() {
    //   document.body.classList.toggle('dark-theme', this.checked);
    // });
  
    
  
    const themeToggle = document.getElementById("themeToggle");
    const body = document.body;

    themeToggle.addEventListener("change", () => {
      if (themeToggle.checked) {
        body.classList.add("light-theme");
        body.classList.remove("dark-theme");
      } else {
        body.classList.add("dark-theme");
        body.classList.remove("light-theme");
      }
    });

    // Сохранение темы при перезагрузке
    document.addEventListener('DOMContentLoaded', () => {
      const isLightTheme = localStorage.getItem('theme') === 'light';
      if (isLightTheme) {
        themeToggle.checked = true;
        body.classList.add('light-theme');
      } else {
        themeToggle.checked = false;
        body.classList.add('dark-theme');
      }
    });

    themeToggle.addEventListener('change', () => {
      if (themeToggle.checked) {
        localStorage.setItem('theme', 'light');
      } else {
        localStorage.setItem('theme', 'dark');
      }
    });