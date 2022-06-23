{
    it('Using Get with Find and Eq',()=>{
        cy.visit("https://coursehunter.net/");
        cy.get('section').find('[class="course-details-bottom"]').eq(0).dblclick();
        // find позволяет искать только внутри элемента get
    });

    it.only('Using Get with Find and Eq',()=>{
        cy.viewport(1800, 700)
        cy.visit("https://coursehunter.net/");
        cy.get('section').find('[class="course-details-bottom"]').eq(0).dblclick();
        // viewportпозволяет видеть элементы на заданных параметраш 
        // высоты и ширины экрана, если они скрыты
    });

}