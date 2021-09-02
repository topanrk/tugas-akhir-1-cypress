describe('Lihat Fasilitator', function(){
    it('Lihat Fasilitator', function(){
        cy.loginUser()
        
        //cari nama Topan topan
        cy.get('#dataTable_filter > label > .form-control').type('Topan topan',{force:true}).should('have.value','Topan topan')

        //tekan tombol options
        cy.get('.odd > .dt-center > .btn-group > .btn > .fas').click()
    })
})