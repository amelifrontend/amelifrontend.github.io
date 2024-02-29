// import JustValidate from 'just-validate';

const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closes = document.querySelector('.menu__close');

// hamburger.addEventListener('click', () =>{
//     menu.classList.add('active');
// });

// closes.addEventListener('click', () =>{
//     menu.classList.remove('active');
// });

function menuActive(item) {
    item.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
}

menuActive(hamburger);
menuActive(closes);

const interests = document.querySelectorAll('.skills__ratings-interest'),
    scales = document.querySelectorAll('.skills__ratings-scale span');

interests.forEach((item, i) => {
    scales[i].style.width = item.innerHTML;
});


// Валидация и отправка формы
// const form = document.querySelector('.contacts__form');

// new window.JustValidate('.contacts__form', {
//     colorWrong: 'red',
//     messages: {
//         name: {
//             required: 'Введите ваше имя',
//             minLength: 'Введите более 2х символов',
//             maxLength: 'Введите менее 15-ти символов'

//         },
//         email: {
//             email: 'Введите корректный email',
//             required: 'Введите вашу почту'
//         }
//     },
//     submitHandler: function(thisForm){
//         let formData = new FormData(thisForm);

//         let xhr = new XMLHttpRequest();

//         xhr.onreadystatechange = function () {
//             if (xhr.readyState === 4) {
//               if (xhr.status === 200) {
//                 console.log('Отправлено');
//               }
//             }
//           };

//           xhr.open('POST', 'mail.php', true);
//           xhr.send(formData);

//           thisForm.reset();

//     }
// });


// Новый синтаксис для версии just-validate3.3.3.min.js
// const form = document.querySelector('.contacts__form');

const validation = new JustValidate('.contacts__form');

validation
    .addField('#name', [{
            rule: 'minLength',
            value: 3,
            errorMessage: 'Минимальная длина 3 символа',
        },
        {
            rule: 'maxLength',
            value: 30,
            errorMessage: 'Максимальная длина 30 символов',
        },
        {
            rule: 'required',
            value: true,
            errorMessage: 'Введите ваше имя',
        },
    ]).addField('#email', [{
            rule: 'required',
            errorMessage: 'Введите ваш email',
        },
        {
            rule: 'email',
            errorMessage: 'Введите корректный email!',
        },
    ]).addField('#checkbox', [{
        rule: 'required',
        errorMessage: 'Поставьте флажок!',
    }
    ]).onSuccess((event) => {
        
        let formData = new FormData(event.target);
        let xhr = new XMLHttpRequest();
        
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    alert('Отправлено');
                }
            }
        };

        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);

        event.target.reset();
    });


