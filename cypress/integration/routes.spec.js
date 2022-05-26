describe('Check routes of the application', () => {
  it('Visit the Landing Page', () => {
    cy.visit('/')
  })
  it('Visit the Feature Page', () => {
    cy.visit('/features')
    cy.url().should('include', '/features')
  })
  it('Visit the Business Page', () => {
    cy.visit('/business')
    cy.url().should('include', '/business')
  })
  it('Visit the Company Page', () => {
    cy.visit('/company')
    cy.url().should('include', '/company')
  })
  it('Visit the Help Page', () => {
    cy.visit('/help')
    cy.url().should('include', '/help')
  })
  it('Visit the Login Page', () => {
    cy.visit('/login')
    cy.url().should('include', '/login')
  })
  it('Visit the Sign up Page', () => {
    cy.visit('/register')
    cy.url().should('include', '/register')
  })
  it('Visit the Forgot Password Page', () => {
    cy.visit('/lost-password')
    cy.url().should('include', '/lost-password')
  })
  it('Visit the Resend Registration Page', () => {
    cy.visit('/resend-registration')
    cy.url().should('include', '/resend-registration')
  })
  it('Visit the Sign up success Page', () => {
    cy.visit('/success')
    cy.url().should('include', '/success')
  })
})
