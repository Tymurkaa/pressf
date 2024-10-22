let registerBtn = document.querySelector('.registr-but');
    registerBtn.addEventListener("click", function () {       
        window.location.assign('registration.html');
    })

    document.querySelector('.scroll-to-footer').addEventListener('click', function() {
        document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
    });