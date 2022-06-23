it('By ID',()=>{
    cy.visit("https://facebook.com");
    cy.get("#email")
    //email - это наш ID
});

//ключевое слово only позволяет выполнять только данный тест
// it.only('By ID',()=>{
//     cy.visit("https://facebook.com")
//     cy.get('#email')
//     //email - это наш ID, который вызывается через #
// });

it('By Class',()=>{
    cy.visit("https://docs.cypress.io/api/commands/get.html#Syntax");
    cy.get(".DocSearch.DocSearch-Button")
    // class вызывается через "." " "- пробел обозначает вложенность. 
    // поэтому когда мы ищем элемент class="DocSearch DocSearch-Button" мы ставим точку
});

it('By Tag',()=>{
    cy.visit("https://docs.cypress.io/api/commands/get.html#Syntax");
    cy.get("h2")
});

it('By Tag value',()=>{
    cy.visit("https://facebook.com");
    cy.get('[name="pass"]')
});

it('By Different Tag',()=>{
    cy.visit("https://facebook.com");
    cy.get('[data-testid="open-registration-form-button"][role="button"]')
});

it('By Different Types',()=>{
    cy.visit("https://docs.cypress.io/api/commands/get.html#Syntax");
    cy.get('button[type="button"][aria-label="Search"]')
});

it.only('By Contains name',()=>{
    cy.visit("https://docs.cypress.io/api/commands/get.html#Syntax");
    cy.get('*[class^="alert"]')
    // ищем класс по начальной части имени, *обозначает что мы ищем любой селектор
}); 