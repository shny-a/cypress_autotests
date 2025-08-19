describe('Проверка покупки нового аватара для тренера', function () {
    it('покупка нового аватара', function () {
        cy.visit('https://pokemonbattle.ru/');

        cy.get('.k_footer_container_version',{ timeout: 10000 }).contains('4.2.0').should('be.visible');
        cy.get('#k_email').should('be.visible').type('email');
        cy.get('#k_password').should('be.visible').type('password');
        cy.get('button[type="submit"]').should('be.visible').click();
       
        cy.get('.pokemon_list').should('exist');
        cy.get('.header_card_trainer').should('be.visible').click();

        cy.get('.single_page_body_content_inner_top').should('exist');
        cy.get('.k_mobile > :nth-child(5) > #dropdown > img').should('be.visible').click();
        
        cy.get('.shop__list').should('exist');
        cy.get('.available > button').first().should('be.visible').click();

        cy.get('.payment_header_content_title').should('exist');
        cy.get('.card_number').should('be.visible').type('4620869113632996');
        cy.get('.card_csv').should('be.visible').type('125');
        cy.get('.card_date').should('be.visible').type('1226');
        cy.get('.card_name').should('be.visible').type('NAME');
        
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment:not([disabled]')
        .should('be.visible')
        .click();


        cy.contains('*', 'Код из пуша или СМС').should('exist');
        cy.get('.threeds_number').should('be.visible').type('56456');


        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment:not([disabled]')
        .should('be.visible')
        .click();
        
        cy.contains('Покупка прошла успешно').should('be.visible');
    });
});