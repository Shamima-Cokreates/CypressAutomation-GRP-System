/// <reference types="Cypress" />
context('GRP Login', function() {
    it('TC-1: View GRP System', function() 
    {
    cy.visit('http://sqa.grp.gov.bd/global/web/login')
    cy.title().should('eq','জিআরপি | ড্যাশবোর্ড') // View GRP dashboard 
    cy.wait(1000)
    })
  
    it('TC-2: Verify GRP System login scenario', function() 
    {
    cy.get('.mb-3 > .form-control').type('sujt0001').click() // enter valid username
    cy.wait(1000)
    cy.get('.mb-4 > .form-control').type('123456789').click()//enter valid password
    cy.wait(1000)
    cy.get('.col-6 > .btn').click()
    })
  
    it('TC-3: Go to GRP dashboard to MEM module dashboard ', function() 
    {
    cy.url().should('include','dashboard') 
    cy.wait(1000)
    cy.get('.modules8 > img').click()//click on MEM module
    //cy.get('.col-lg-10 > :nth-child(1) > img').clear() //click on Core module
    cy.wait(1000)
    })

    it('TC-4: Logout after MEM module access ', function() 
    {
    cy.url().should('include','calendar')
    cy.get(':nth-child(2) > .nav-link > .fa').click()
    cy.get('.dropdown-menu > :nth-child(2)').click()
    cy.url().should('include','login')
    })


})