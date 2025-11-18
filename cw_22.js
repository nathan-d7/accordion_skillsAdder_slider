console.log('Практическое занятие по элементам');

/*Аккордеон*/

let closeAll = function() {
    let allItems = document.querySelectorAll('.accordion__item.active');
    allItems.forEach(function(item) {
        item.classList.remove('active');
    });
};

let open = function(event) {

    let li = event.target.closest('.accordion__item');
    
    if(!li.classList.contains('active')) {
        closeAll();
        li.classList.add('active');
    } else {
        li.classList.remove('active');
    }

};

let run = function(accordion) {

    if(!accordion) return;

    let itemsList = accordion.querySelector('.accordion__list');
    let accItems = [...itemsList.children];
    
    accItems.forEach(function(item) {

        let title = item.querySelector('.accordion__title');
        let itemBtn = item.querySelector('.accordion__btn');
    
        title.addEventListener('click', open);
        itemBtn.addEventListener('click', open);

    });


};


let accordion = function(className) {

    let list = document.querySelectorAll(`.${className}`);
    if(!list || list.length == 0) return;

    list.forEach(function(item) {
        run(item);
    });


};

accordion('accordion');

/*Добавление навыков*/

let tagsCounter = function(skillsList) {

    let str = document.querySelector('.skills__added');

    switch(skillsList.children.length) {

        case 1: 
            str.innerText = `Добавлен 1 навык`;
            break;
        case 2: 
            str.innerHTML = `Добавлено 2 навыка`;
            break;
        case 3: 
            str.innerHTML = `Добавлено 3 навыка`;
            break;
        case 4: 
            str.innerHTML = `Добавлено 4 навыка`;
            break;
    }

    if(skillsList.children.length >= 5 || skillsList.children.length == 0) {
        str.innerHTML = `Добавлено ${skillsList.children.length} навыков`;
    }

};

let createTag = function(inputValue) {

    let skillsList = document.querySelector('.skills__list');

    let skillsItem = document.createElement('li');
    skillsItem.classList.add('skills__item');

    let skillsText = document.createElement('span');
    skillsText.classList.add('skills__item-text');
    skillsText.innerHTML = inputValue;

    let skillsDelBtn = document.createElement('span');
    skillsDelBtn.classList.add('skills__item-del');
    skillsDelBtn.innerHTML = '+';

    skillsDelBtn.addEventListener('click', function() {
        skillsItem.remove();
        tagsCounter(skillsList);
    });

    skillsItem.append(skillsText, skillsDelBtn);
    skillsList.append(skillsItem);

    tagsCounter(skillsList);

};


let skillsFunc = function(id) {

    if(!id) return;

    let skillsElem = document.querySelectorAll(`#${id}`);
    if(!skillsElem || skillsElem.length == 0) return;

    let input = document.querySelector('.skills__input');
    let addBtn = document.querySelector('.skills__input-btn');

    input.addEventListener('keyup', function(event) {
        
        let value = event.target.value.trim();
    
        if(value.length == 0) return;

        if(event.key == 'Enter') {
            createTag(value);
            input.value = '';
        }

    });

    addBtn.addEventListener('click', function() {
        let value = input.value.trim();

        if(value.length > 0) {
            createTag(value);
            input.value = ''; 
        }
    });

    
};

skillsFunc('skills');


/*Слайдер*/

let runSlider = function(slider) {
    let list = slider.querySelector('.slider__container');
    let items = list.querySelectorAll('.slider__item');
    let btnNext = slider.querySelector('.slider__btn');
    let firstItem = items[0];

    let firstItemLength = firstItem.offsetWidth;
    console.log(items.length);
    let index = 0;

    btnNext.addEventListener('click', () => {

        list.scrollLeft += firstItemLength + 30;
        index++;
    
        if(index >= items.length) {
            list.scrollLeft = 0;
            index = 0;
        }
        
    });

};


let sliders = document.querySelectorAll('.slider');

sliders.forEach(function(slider) {
    runSlider(slider);
});
