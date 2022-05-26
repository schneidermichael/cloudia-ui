describe('Check routes of the application', () => {
  it('Visit the Landing Page', () => {
    cy.visit('http://localhost:4200')
  })
  it('Visit the Feature Page', () => {
    cy.visit('http://localhost:4200/features')
    cy.url().should('include', '/features')
  })
  it('Visit the Business Page', () => {
    cy.visit('http://localhost:4200/business')
    cy.url().should('include', '/business')
  })
  it('Visit the Company Page', () => {
    cy.visit('http://localhost:4200/company')
    cy.url().should('include', '/company')
  })
  it('Visit the Help Page', () => {
    cy.visit('http://localhost:4200/help')
    cy.url().should('include', '/help')
  })
  it('Visit the Login Page', () => {
    cy.visit('http://localhost:4200/login')
    cy.url().should('include', '/login')
  })
  it('Visit the Sign up Page', () => {
    cy.visit('http://localhost:4200/register')
    cy.url().should('include', '/register')
  })
  it('Visit the Forgot Password Page', () => {
    cy.visit('http://localhost:4200/lost-password')
    cy.url().should('include', '/lost-password')
  })
  it('Visit the Resend Registration Page', () => {
    cy.visit('http://localhost:4200/resend-registration')
    cy.url().should('include', '/resend-registration')
  })
})
