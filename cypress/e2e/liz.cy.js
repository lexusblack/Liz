describe('My First Test', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            if (err.message.includes("Cannot read properties of null")) {
                return false
            }
        })
    })
    it('Visits the https://mistywisp.com/ website', () => {
        cy.visit('https://mistywisp.com/')
        cy.get('html').should('not.have.attr', 'class')
        cy.get('.menu__icon').click()
        cy.get('html').should('have.attr', 'class', 'lock menu-open')
    })
})
