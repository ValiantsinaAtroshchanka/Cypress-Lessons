it('SHOULD',()=>{
    cy.visit('https://coursehunter.net/');
    cy.get('input[type="search"]')
    .type(100)
    // задали значение элементу
    .should('have.value', 100)
    // проверяем что элемент видимый
    .and('be.visible')
})

it('EXPECT',()=>{
    cy.visit('https://coursehunter.net/');
    cy.get('input[type="search"]')
    .type(100)
    // укажем параметр с которым будем 
    // производить дальнейшие действия
    .then(input=>{
        // ожидает что наш элемент должен иметь значение value
        expect(input).to.have.value(100)
    })
})

it('check default value for ',()=>{
    cy.visit('https://coursehunter.net/');
    // проверяем дефолтное состояние элементов 
    cy.get('input[type="search"]')
    // данный селектор должен содержать атрибут checked
    .should('be.checked');
})

it('check default value for',()=>{
    cy.visit('https://coursehunter.net/');
    cy.contains('Категории')
    // наводим мышку на элемент
    // проверяем mousover
    .trigger('mouseover')
    // проверяем что отображается всплывающее окно
    .get('a[class="nav-a"]')
    .should('be.visible')
})

it('check is correct attr in button',()=>{
    cy.visit('https://coursehunter.net/');
    cy.contains('Sign Up')
    // найденный элемент имеет атрибут "title"
    .should('have.attr', 'title')
    // данный атрибут имеет значение "Sign Up"
    .and('match', /Sign Up/);
})

it.only('check is correct URL',()=>{
    cy.visit('https://coursehunter.net/');
    // проверяем что урл на который мы перешли соответствует
    // введенному ниже
    cy.url()
    .should('eq', 'https://coursehunter.net/')
})
