const passsword = document.getElementById('password');
const icon = document.getElementById('icon');

function showHide() {
    if (passsword.type === 'password') {
        passsword.setAttribute('type','text');
        icon.classList.add('hide');
    } 
    else {
        passsword.setAttribute('type', 'password');
        icon.classList.remove('hide');
    }
}
