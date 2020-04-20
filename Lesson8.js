//- Дана textarea.
  //  В неё вводится текст.
 //   Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.


    const textarea = document.getElementById('textarea');
    textarea.value = localStorage.getItem('text');
    textarea.oninput = ev => {
    localStorage.setItem('text', ev.target.value);
    };

//- Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//    Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
//Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//    Сделайте ваш скрипт как можно более универсальным.

    const newform = document.getElementById('newform');
    getMyNewForm(newform);
    function saveMyNewForm(t) {
        setMyNewForm(t)
    }
    function setMyNewForm(tag) {
        for (let i = 0; i < tag.length; i++) {
            if (tag.children[i].type === 'checkbox' || tag.children[i].type === 'radio') {
                tag.children[i].checked
                    ? tag.children[i].value = true
                    : tag.children[i].value = false;
                localStorage.setItem(tag.children[i].id, tag.children[i].value );
            }
        }
    }
    function getMyNewForm(tag) {
        for (let i = 0; i < localStorage.length; i ++) {
            if (localStorage.hasOwnProperty(tag.children[i].id)) {
                tag.children[i].value = localStorage.getItem(tag.children[i].id);
                if (tag.children[i].value === 'true') {
                    tag.children[i].setAttribute('checked', 'checked')
                }
            }
        }

    }






//-Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
//Требование : хранить историю своих изменений (даже после перезагрузки страницы).
//Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

     const textarea1 = document.getElementById('textarea1');
     const left_arrow = document.getElementById('left_arrow');
     const right_arrow = document.getElementById('right_arrow');
     const save = document.getElementById('save');

     save.onclick = ev => {
         localStorage.setItem(localStorage.length + 1, textarea1.value);
    };
     left_arrow.onclick = ev => {
         right_arrow.style.visibility = 'visible';
         let index;
         for (const key in localStorage) {
             if (localStorage.hasOwnProperty(key)) {
                 if (localStorage.getItem(key) === textarea1.value) {
                     index = key;
                 }
             }
         }
            if (index === '1') {
                left_arrow.style.visibility = 'hidden';
                return
            }
           textarea1.value = localStorage.getItem(index -1);
     };

     right_arrow.onclick = ev => {
         left_arrow.style.visibility = 'visible';
         let index;
          for (const key in localStorage) {
             if (localStorage.hasOwnProperty(key)) {
                if (localStorage.getItem(key) === textarea1.value) {
                    index = key;
               }
              }
    }
              if (index === localStorage.length.toString()) {
              right_arrow.style.visibility = 'hidden';
              return
    }
              textarea1.value = localStorage.getItem(+index +1);
};
