describe('Forgot Password', () => {


  beforeEach(() => {
      // reset the database prior to every test
      cy.exec("npm run db:clean")
    }
  )

  it('fill in required fields', function () {

    cy.visit('/lost-password')

    cy.get('input[name=email]').type('john.doe@google.com')

    cy.get('button').contains('Request password reset').click()

    cy.url().should('include', '/success')

  })
})
