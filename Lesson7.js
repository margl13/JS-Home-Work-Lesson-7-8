//- Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

   document.getElementById('hider').onclick = function () {
     document.getElementById('text').hidden = true;
};
//- Создайте кнопку, при клике на которую, она будет скрывать сама себя.

   let btn = document.getElementById('btn');
      btn.onclick = ev => {
       btn.style.display = 'none';
   };

//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувач

    const bt = document.getElementById('otherbtn');
    bt.onclick = ev => {
        const age = document.getElementById('in')
        const value = age.value;
            if (value < 18) {
                alert('STOP!');
            };
            if (value >= 18) {
                alert('GO ON');
            };
    };

//- Создайте меню, которое раскрывается/сворачивается при клике

    function iloveit() {
        document.getElementById("myDropdown").classList.toggle("show");
    };
    window.onclick = ev => {
    if (!ev.target.matches('.dropbtn')) {
        const menu = document.getElementById("myDropdown");
        var i;
        for (i = 0; i < menu.length; i++) {
            const typeofcofee = menu[i];
            if (typeofcofee.classList.contains('show')) {
                typeofcofee.classList.remove('show');
            };
        };
    };
};

//- Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
  //  Вывести список комментариев в документ, каждый в своем блоке.
  //  Добавьте каждому комментарию по кнопке для сворачивания его body.

  let arofcomments = [
      {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
      {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
      {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
      {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
      {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
      {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
  ];

  const comment = document.getElementById('comment');
  arofcomments.forEach(item => {
      const div = document.createElement('div');
      const h3 = document.createElement('h3');
      const p = document.createElement('p');
      const button = document.createElement('button');
      button.innerText = 'Hide';
      button.onclick = ev => {
          p.hidden
          ? p.hidden = false
          : p.hidden = true
      };
      h3.innerText = item.title;
      p.innerText = item.body;
      div.appendChild(h3);
      div.appendChild(p);
      div.appendChild(button);
      comment.appendChild(div);
  });

//- створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
 //   Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
//Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

    let but = document.getElementById('but');
    let a = document.getElementById('a');
    let b = document.getElementById('b');
    let c = document.getElementById('c');
    let d = document.getElementById('d');

    but.onclick = ev =>{
        console.log(a.value);
        console.log(b.value);
        console.log(c.value);
        console.log(d.value);
    };

//- Створити функцію, яка генерує таблицю.
 //   Перший аргумент визначає кількість строк.
  //  Другий параметр визначає кліькіть ячеєк в кожній строці.
  //  Третій параметр визначає елемент в який потрібно таблицю додати.

    const tblbox = document.getElementById('tblbox');
        function createtable(rows, cols, tag) {
            let table = document.createElement("table");
            for (let i = 0; i < rows; i++) {
                let rol = table.insertRow(-1);
                for (let j = 0; j < cols; j++) {
                    let cel = rol.insertCell(-1);
                    cel.innerHTML = j + 1;
                }
            }
       tag.appendChild(table);
        }
       createtable(3,4, tblbox);


//- Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
  //  При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

const container = document.getElementById('container');
const button = document.getElementById('button');

button.onclick = ev => {

    const row = document.getElementById('e').value;
    const col = document.getElementById('f').value;
    const content = document.getElementById('h').value;


    let newtable = document.createElement("table");
    for (let i = 0; i < row; i++) {
    let roll = newtable.insertRow(-1);
    for (let j = 0; j < col; j++) {
        let cell = roll.insertCell(-1);
        cell.innerHTML = content;
    }
}
container.appendChild(newtable);
};



