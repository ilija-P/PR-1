window.addEventListener('scroll', reveal);

function reveal(){
    let reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){
        let windowweight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        let revealpoint = 150;

        if(revealtop < windowweight - revealpoint){
            reveals[i].classList.add('active');
        } else{
            reveals[i].classList.remove('active');
        }
    }
}