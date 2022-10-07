const btnSwitch = document.querySelector('#switch');
const btnLang = document.querySelector('#languageBtn');
const language = document.querySelector('#language');
const btnMenu = document.querySelector('#menu');
const nav = document.querySelector('#nav');


if (localStorage.getItem('mode') == 'dark') {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
}


btnMenu.addEventListener('click', () => {
    console.log(btnMenu.checked);
    nav.classList.toggle('show');
})


btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
    if (document.body.classList[0]) {
        localStorage.setItem('mode', document.body.classList[0])
    } else {
        localStorage.setItem('mode', 'light')
    }
})


btnLang.addEventListener('click', () => {
    btnLang.classList.toggle('active');
    language.checked = !language.checked;
    if (language.checked == true) {
        location.href = "./src/en/index.html"
    } else {
        location.href = "../../index.html"
    }
})



