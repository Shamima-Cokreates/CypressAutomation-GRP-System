describe('View GRP System', function() {
    it('Verify Title of The GRP Home Page', function() 
    {
    cy.visit('http://sqa.grp.gov.bd/global/web/login')
    cy.title().should('eq','জিআরপি | ড্যাশবোর্ড')
    })
  })