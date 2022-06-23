it('',()=>{
    cy.visit('https://coursehunter.net/');
    cy.contains('English');
    // можно указать конкретный тэг
}
)

it('',()=>{
    cy.visit('https://coursehunter.net/');
    cy.contains('div','English');
    // можно искать как просто текст, и будет найдет первый
}
)

it('',()=>{
    cy.visit('https://coursehunter.net/');
    cy.contains('ENGLISH', {matchCase: false});
    // {matchCase: false} показывает что регистр может отличаться
}
)

it('',()=>{
    cy.visit('https://coursehunter.net/');
    cy.get('article').contains('ENGLISH', {matchCase: false});
    // можно искать текст во вложенности тэга
}
)

it.only('',()=>{
    cy.visit('https://coursehunter.net/');
    cy.get('button').contains('ENGLISH', {matchCase: false});
    // можно искать текст конечного элемента
}
)