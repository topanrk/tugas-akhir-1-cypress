describe('Add Facilitator', function(){
    it('Add Facilitator', function(){
        cy.loginUser()
        //Tombol Tambah Fasilitator
        cy.get('.d-flex > .btn').should('have.text','\n\t\t\t\tTambah Facilitator\n\t\t\t').click()

        //Nama User
        cy.get('#user_fullname').type('Topan topan',{force:true}).should('have.value','Topan topan')

        //Email
        cy.get('#user_email').type('pam@gmail.com',{force:true}).should('have.value','pam@gmail.com')

        //Status User
        cy.get('#user_is_active').should('have.value','1')

        //Password
        cy.get('#user_password').type('12345',{force:true}).should('have.value','12345')

        //Provinsi Domisili
        cy.get('#user_province_id').select('ACEH').should('have.value','11')

        //Kota/kabupaten Domisili
        cy.get('#user_city_id',{force:true}).select('KAB. ACEH SELATAN').should('have.value','1101')

        //Kecamatan Domisili
        cy.get('#user_subdistrict_id').select('Bakongan').should('have.value','110101')

        //Alamat Domilisi
        cy.get('#user_address').type('Jalan Bahagia',{force:true}).should('have.value','Jalan Bahagia')
        
        //Alamat penugasan sama dengan domisili
        cy.get('.py-2').click()

        //Provinsi penugasan
        cy.get('#user_area_province_id').should('have.value','11')

        //Kota penugasan
        cy.get('#user_area_city_id').should('have.value','1101')

        //Kecamatan penugasan
        cy.get('#user_area_subdistrict_id').should('have.value','110101')

        //Upload file
        cy.get('input[type=file]').attachFile('covid-19_logo_500px_0.png')

        //simpan
        cy.get('#add').click()

        //alert 
        cy.get('#modal-body').should('have.text','Penambahan fasilitator berhasil diproses')
        cy.get('#generalModal > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    }),
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})