describe('app works correctly', function() {
    before(function() {
        cy.visit('http://localhost:3000');
    });
    it('should open cart page by default', function() {
        cy.contains('Соберите бургер');
    });
    it('should be dnd bun and ingredient', function () {
        cy.contains('Краторная булка N-200i').trigger('dragstart');
        cy.contains('Добавьте ингредиенты').trigger('drop');
        cy.contains('Соус Spicy-X').trigger('dragstart');
        cy.contains('Добавьте ингредиенты').trigger('drop');
        cy.contains('Оформить заказ').click();
    })
    it('should be login', function () {
        cy.contains('E-mail').click().type('ex@example.com');
        cy.contains('Пароль').click().type('123456789');
        cy.contains('Войти').click();
    })
    it('should be order', function () {
        cy.contains('Оформить заказ').click();
        cy.wait(20000);
        cy.get('#modal').click();
    })
}); 
