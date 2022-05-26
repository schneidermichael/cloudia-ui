describe('The Sign up Page', () => {


  beforeEach(() => {
      // reset the database prior to every test
      cy.exec("npm run db:clean")
    }
  )

  it('fill in required fields', function () {

    cy.visit('/register')

    cy.get('input[name=first-name]').type('Max')

    cy.get('input[name=last-name]').type('Mustermann')

    cy.get('input[name=email-address]').type('max.mustermann@email.at')

    cy.get('input[name=password]').type('Mustermann')

    cy.get('select').select('Austria')

    cy.get('button').contains('Create account').click()

    cy.url().should('include', '/success')

  })
})
