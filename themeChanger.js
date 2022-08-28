let theme = document.querySelectorAll('input[name="theme"]');
let themeGet = window.localStorage.getItem('data-theme');

    if(themeGet) {
            document.firstElementChild.setAttribute('data-theme', themeGet);
            theme[0].checked = themeGet == 'dark' ? true : false;
    }

    window.onload = () => {
  
    for (let i = 0; i <= theme.length; i++) {

        theme[i].addEventListener('change', function () {
            document.firstElementChild.setAttribute('data-theme', theme[i].value);

            localStorage.setItem('data-theme', theme[i].value);
        });

    }
  }