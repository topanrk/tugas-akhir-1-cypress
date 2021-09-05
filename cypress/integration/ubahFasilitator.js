describe('Ubah Fasilitator', function(){
    it('Ubah Fasilitator', function(){
        cy.loginUser()

        //cari nama Topan topan
        cy.get('#dataTable_filter > label > .form-control').type('Topan topan',{force:true}).should('have.value','Topan topan')

        //tekan tombol options
        cy.wait(6000)
        cy.get('.odd > .dt-center > .btn-group > .btn > .fas').click()

        //ubah 
        cy.get('[href="facilitator/edit/254"]').click()

        //ubah email
        cy.get('#user_email').type('{selectall}' , '{backspace}').type('contoh123@gmail.com').should('have.value','contoh123@gmail.com')
        cy.get('#edit').click()

        //notifikasi 
        cy.get('#modal-body').should('have.text','Perubahan fasilitator berhasil diproses')
        //cy.get('#generalModal > .modal-dialog > .modal-content > .modal-footer > .btn').click() --failed close on OK button
        //cy.get('#generalModal > .modal-dialog > .modal-content > .modal-header > .close > span').click() --failed too, but sometime success

    }),
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})