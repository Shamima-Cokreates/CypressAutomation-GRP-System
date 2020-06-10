context('GRP Login', function() {
    it('TC-1: View GRP System', function() 
    {
    cy.visit('http://sqa.grp.gov.bd/global/web/login')
    cy.title().should('eq','জিআরপি | ড্যাশবোর্ড') // View GRP dashboard 
    })
  
    it('TC-2: Verify GRP System login scenario', function() 
      {
      cy.get('.mb-3 > .form-control').type('nila0001').click() // enter valid username
      cy.wait(1000)
      cy.get('.mb-4 > .form-control').type('123456789').click()//enter valid password
      cy.wait(1000)
      cy.get('.col-6 > .btn').click()
      })
  
      it('TC-3: After login go to GRP dashboard successfully ', function() 
      {
      cy.url().should('include','dashboard')
    })
})