describe('Ganti Status', function(){
    it('Ganti Status', function(){
        cy.loginUser()

        //cari nama Topan topan
        cy.get('#dataTable_filter > label > .form-control').type('Topan topan',{force:true}).should('have.value','Topan topan')

        //tekan tombol options
        cy.wait(6000)
        cy.get('.odd > .dt-center > .btn-group > .btn > .fas').click()

        //Non-aktifkan user
        cy.get('.odd > .dt-center > .btn-group > .dropdown-menu > span.dropdown-item').click()

        //notifikasi
        cy.get('#modal-body').should('have.text','Perubahan fasilitator berhasil diproses')
    }),
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})