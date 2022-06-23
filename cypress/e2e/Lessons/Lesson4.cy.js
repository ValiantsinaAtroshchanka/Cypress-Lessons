it('',()=>{
    cy.visit('https://coursehunter.net/');
    cy.get('input[type="search"]')
    .type(100)
    // задали значение элементу
    .should('have.value', 100)
    .and('be.visible')
}
)