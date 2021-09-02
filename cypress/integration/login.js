describe('Login', function(){
    before(()=>{
        cy.visit('https://admin.pkh.dojobox.id/')
    })
    it('Valid Login', function(){
        cy.get('#input-email').type('e@dojobox.id',{force:true}).should('have.value','e@dojobox.id')
        cy.get('#input-password').type('admin',{force:true}).should('have.value','admin')
        cy.get('#btn-login').click()
        cy.get('.mr-2 > b').should('have.text','Super Admin')
        cy.get('#userDropdown').click()
        cy.get('.dropdown-menu > [href="#"]').click()
        cy.get('#exampleModalLabel').should('have.text','Ready to Leave?')
        cy.get('.modal-footer > .btn-primary').click()
    })
    it('Invalid Login', function(){
        cy.get('#input-email').type('dojobox',{force:true}).should('have.value','dojobox')
        cy.get('#input-password').type('12345',{force:true}).should('have.value','12345')
        cy.get('#btn-login').click()
        cy.get('.modal-body').should('have.text','Nama Pengguna atau Kata Sandi Anda tidak cocok')
    })
})