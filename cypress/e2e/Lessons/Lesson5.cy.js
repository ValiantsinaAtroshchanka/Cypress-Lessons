it('type, focus, blur, clear, wait',()=>{
    cy.visit("https://logiclike.com/2.0/cabinet/course/logic")
    cy.wait(2000);
    cy.get('div[class="header__controls"] a[class="button header__button button--size-54 button--size-54-sm button--color-white-outlined button--expanded"]')
        .contains("У меня есть аккаунт")
        .click();
    cy.wait(2000);
    cy.get('input[name="login"]')
        .focus()
        .blur()
        .type('varvara.atroschenko@gmail.com');
    cy.get('input[type="password"]')
        .focus()
        .blur()
        .type('11111111')
        .wait(2000)
        .clear()
        .wait(2000)
        .type('30102014');
    cy.get('button[class="button auth-modal__button button--size-l button--size-l-lg button--color-orange button--variant-0 button--expanded"]')
        .click()
    cy.wait(2000);
});

// it('focus',()=>{
//     cy.visit("https://logiclike.com/2.0/cabinet/course?firstLoad=true");
//     cy.get("")
//         .focus
// });

// it('blur',()=>{
//     cy.visit("https://logiclike.com/2.0/cabinet/course?firstLoad=true");
//     cy.get("")
//         .focus()
//          .blur()
// });

// it('focus',()=>{
//     cy.visit("https://logiclike.com/2.0/cabinet/course?firstLoad=true");
//     cy.get("")
//         .focus
// });

it.only('submit',()=>{
    cy.visit("https://logiclike.com/2.0/cabinet/course/logic")
    cy.wait(2000);
    cy.get('div[class="header__controls"] a[class="button header__button button--size-54 button--size-54-sm button--color-white-outlined button--expanded"]')
        .contains("У меня есть аккаунт")
        .click();
    cy.wait(2000)
    cy.get('form[data-v-34fe9c7b]')
        .submit()
        // submit работает только с form
        // подсвечивает все поля input валидационной ошибкой
});

// it('rightclick',()=>{
//     cy.visit("https://logiclike.com/2.0/cabinet/course/logic")
//     cy.wait(2000);
//     cy.get('')
//         .rightclick();
//         // нажатие правой кнопкой мыши позволяет перейти к редактированию

    // dblclick двойное нажание на поле, картинку (для увеличения) и т.д.

    //  chech применяем к чекбоксам и радиокнопкам

    // uncheck выкл чекбоксы

    // ({forse : true}) применяем когда наш элемент перекрыт другим элементом. для click, check, uncheck и т.д.
// });

// it('select',()=>{
//     cy.visit("https://logiclike.com/2.0/cabinet/course?firstLoad=true");
//     cy.get("#day")
//         .select("12")
        // select выбирает значение из всплывающего списка 
// });

// it('scrollIntoView',()=>{
//     cy.visit("https://logiclike.com/2.0/cabinet/course?firstLoad=true");
//     cy.get("")
//         .wait(2000) добавили что бы вся страница прогрузилась
//         .scrollIntoView()
        // scrollIntoView страница скролится для нахождения элемента get()
// });

// it('scrollTo',()=>{
//     cy.visit("https://logiclike.com/2.0/cabinet/course?firstLoad=true");
//     cy.scrollTo(0, 500)
        // прокручиваем страницу на 500 пикселей. в скобках задаются координаты
// });

// it('trigger',()=>{
//     cy.visit("https://logiclike.com/2.0/cabinet/course?firstLoad=true");
//     .contains("")
//     .wait(2000)
//     .trigger('mouseover')
        // .trigger('mouseover') наведение мышки на элемент
// });