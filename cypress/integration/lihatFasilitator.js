describe('Lihat Fasilitator', function(){
    it('Lihat Fasilitator', function(){
        cy.loginUser()
        
        //cari nama Topan topan
        cy.get('#dataTable_filter > label > .form-control').type('Topan topan',{force:true}).should('have.value','Topan topan')

        //tekan tombol options
        cy.wait(6000)
        cy.get('.odd > .dt-center > .btn-group > .btn > .fas').click()

        //klik lihat detail
        cy.get('[href="facilitator/detail/254"]').click()

        //validasi detail
        cy.get('#user_fullname').should('have.text', 'Topan topan')
        cy.get('#user_email').should('have.text', 'contoh@gmail.com')

        //alamat domisili
        cy.get('#user_province_name').should('have.text','ACEH')
        cy.get('#user_city_name').should('have.text','KAB. ACEH SELATAN')
        cy.get('#user_subdistrict_name').should('have.text','Bakongan')
        cy.get('#user_address').should('have.text','Jalan Bahagia')

        //Alamat penugasan
        cy.get('.alert').should('have.text','Alamat penugasan diatur sama dengan alamat domisili fasilitator')
        cy.get('#user_area_province_name').should('have.text','ACEH')
        cy.get('#user_area_city_name').should('have.text','KAB. ACEH SELATAN')
        cy.get('#user_area_subdistrict_name').should('have.text','Bakongan')
        cy.get('.justify-content-end > .btn-primary').click()
    }),
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})