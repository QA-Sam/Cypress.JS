describe('STAYA', function () {
    
    it('Checking Invalid login/valid password data', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('sultanmuratb2@gmail.com');
        cy.get('.auth-form > form > [type="password"]').type('123456qwertyS');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Невозможно войти с предоставленными учетными данными.');
        cy.end();
         })

     it('search something', function () {
        cy.visit('https://staya.dog/');
        })
})
