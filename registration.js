
    //     (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    //     m[i].l=1*new Date();
    //     for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
    //     k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    //     (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
    
    //     ym(92978002, "init", {
    //         clickmap:true,
    //         trackLinks:true,
    //         accurateTrackBounce:true
    //     });
   
    // (function(h,o,t,j,a,r){
    //     h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    //     h._hjSettings={hjid:3771429,hjsv:6};
    //     a=o.getElementsByTagName('head')[0];
    //     r=o.createElement('script');r.async=1;
    //     r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    //     a.appendChild(r);
    // })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');

    //     function post(path, params, method = 'post') {
    //         const form = document.createElement('form');
    //         form.method = method;
    //         form.action = path;
    //         for (const key in params) {
    //             if (params.hasOwnProperty(key)) {
    //                 const hiddenField = document.createElement('input');
    //                 hiddenField.type = 'hidden';
    //                 hiddenField.name = key;
    //                 hiddenField.value = params[key];
    //                 form.appendChild(hiddenField);
    //             }
    //         }
    //         document.body.appendChild(form);
    //         form.submit();
    //     }
   
    //     document.addEventListener('DOMContentLoaded', () => {
    //         const elements = document.querySelectorAll('.element');
    //         elements.forEach(element => {
    //           element.classList.add('visible');
    //         });
    //       });
    //       document.addEventListener('DOMContentLoaded', () => {
    //         const elements = document.querySelectorAll('.element');
    //         const observer = new IntersectionObserver(entries => {
    //           entries.forEach(entry => {
    //             if (entry.isIntersecting) {
    //               entry.target.classList.add('visible');
    //             }
    //           });
    //         });
          
    //         elements.forEach(element => {
    //           observer.observe(element);
    //         });
    //       });

          document.addEventListener("DOMContentLoaded", function() {
            console.log("JavaScript працює!");
          
            const registerButton = document.querySelector(".submit");
            if (!registerButton) {
              console.error("Кнопка з класом .submit не знайдена.");
              return;
            }
          
            registerButton.addEventListener("click", function() {
              const passwordInput = document.getElementById("password");
              const confirmPasswordInput = document.getElementById("confirmPassword");
              const passwordError = document.getElementById("passwordError");
          
              if (!passwordInput || !confirmPasswordInput || !passwordError) {
                console.error("Один або декілька елементів не знайдені.");
                return;
              }
          
              const password = passwordInput.value.trim();
              const confirmPassword = confirmPasswordInput.value.trim();
          
              // Очищення попередніх помилок
              passwordInput.style.border = "";
              confirmPasswordInput.style.border = "";
              passwordError.textContent = "";
              passwordError.style.display = "none";
          
              // Перевірка паролів
              if (password !== confirmPassword) {
                passwordInput.style.border = "2px solid red";
                confirmPasswordInput.style.border = "2px solid red";
                passwordError.textContent = "Паролі мають співпадати";
                passwordError.style.display = "block";
              } else {
                console.log("Паролі співпадають");
              }
            });
          });
          
          document.getElementById('toggle').addEventListener('change', function() {
            document.body.classList.toggle('dark-theme', this.checked);
          });