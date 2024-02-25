document.getElementById('showLogin').addEventListener('click', function() {
    document.getElementById('showLogin').style.display = 'none';
    document.querySelector('.login-container').style.opacity = 1;
    document.querySelector('.login-form').classList.add('active');
    setTimeout(function() {
        document.querySelector('.login-container').style.animation = 'slideAndFadeIn 1s forwards'; 
    }, 100); 
});
