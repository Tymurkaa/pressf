let registerBtn = document.querySelector('.registr-but');
    registerBtn.addEventListener("click", function () {       
        window.location.assign('registration.html');
    })

    document.querySelector('.scroll-to-footer').addEventListener('click', function() {
        document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
    });


const toggle = document.getElementById('toggle');


if (localStorage.getItem('dark-theme') === 'true') {
    document.body.classList.add('dark-theme');
    toggle.checked = true; 
}

toggle.addEventListener('change', function() {
    if (this.checked) {
        
        document.body.classList.add('dark-theme');
        localStorage.setItem('dark-theme', 'true'); 
    } else {

        document.body.classList.remove('dark-theme');
        localStorage.setItem('dark-theme', 'false'); 
    }
});

