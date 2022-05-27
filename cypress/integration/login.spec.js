describe('The Login Page', () => {

  beforeEach(() => {
      // reset the database prior to every test
      cy.exec("npm run db:clean")

    cy.request({
      method: 'POST',
      url: 'http://localhost:3000/auth/register', // baseUrl is prepend to URL
      form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
      body: {
        eMail: 'test.user@login.at',
        pwd: Cypress.env('password'),
      },
    })

    }
  )

  it('fill in required fields', function () {

    cy.visit('/login')

    cy.get('input[name=email]').type('test.user@login.at')

    cy.get('input[name=password]').type('password123')

    cy.get('button').contains('Log on').click()

    cy.url().should('include', '/home')

  })
})
