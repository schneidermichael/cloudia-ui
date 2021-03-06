describe('Authorized Sites', () => {

  beforeEach(() => {
      // reset the database prior to every test
      cy.exec("npm run db:clean")

      cy.request({
        method: 'POST',
        url: 'http://localhost:3000/authentication/register', // baseUrl is prepend to URL
        form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
        body: {
          email: 'test.user@login.at',
          password: Cypress.env('password'),
        },
      })

    }
  )

  it('home and profile only with json token accessible', function () {

    cy.request({
      method: 'POST',
      url: 'http://localhost:3000/authentication/signin',
      form: true,
      body: {
        eMail: 'test.user@login.at',
        pwd: Cypress.env('password'),
      },
    }).then(({ body }) => {
      console.log(body);
      window.sessionStorage.setItem('access_token', body.access_token)
    })

    cy.visit('/home')

    cy.url().should('include', '/home')

    cy.visit('/profile')

    cy.url().should('include', '/profile')

  })

})
