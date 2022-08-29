let themeGet = window.localStorage.getItem('data-theme');

if (themeGet) {
    document.firstElementChild.setAttribute('data-theme', themeGet);
}

window.onload = () => {

    let theme = document.querySelectorAll('input[name="theme"]');

    if (themeGet) {
        theme[0].checked = themeGet == 'dark' ? true : false;
        theme[1].checked = themeGet == 'light' ? true : false;
        theme[2].checked = themeGet == 'purple' ? true : false;
    }

    for (let i = 0; i <= theme.length; i++) {

        theme[i].addEventListener('change', function () {
            document.firstElementChild.setAttribute('data-theme', theme[i].value);

            localStorage.setItem('data-theme', theme[i].value);
        });

    }
}