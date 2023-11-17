describe('Test Tic Tac Toe game', () => {
  beforeEach(() => {
    cy.visit('https://roomy-fire-houseboat.glitch.me/'); // navigates to the game before each scenario
  });
  
    it('Enters a number and loads the grid', () => {
      cy.get('#number').type('4'); 
      cy.get('#start').click();
      cy.get('#table').should('exist'); //verifies that the grid exists after a number is entered and play is clicked

    });

    it('enters invalid value', () => {
      cy.get('#number').type('lizard'); 
      cy.get('#start').click();
      cy.get('#table').should('not.be.visible');

    });
    
    it('generates a grid with the correct values', () => {
      cy.get('#number').type('5'); 
      cy.get('#start').click();
      cy.get('#table').find('td').should('have.length',25);

    });


    it('plays a round of the game', () => {
      cy.get('#number').type('3'); 
      cy.get('#start').click();
      cy.get('#table').find('tr').eq(0).find('td').eq(0).click().contains('X'); //clicks the first square in the table
      cy.get('#table').find('tr').eq(0).find('td').eq(1).click().contains('O'); //verifies each squre has the correct value
      cy.get('#table').find('tr').eq(1).find('td').eq(1).click().contains('X');
      cy.get('#table').find('tr').eq(1).find('td').eq(2).click().contains('O');
      cy.get('#table').find('tr').eq(2).find('td').eq(2).click().contains('X');
      cy.get('#endgame').should('be.visible');
      cy.get('#endgame').contains('Congratulations player X! You\'ve won. Refresh to play again!');// this test will fail due to bug
    });
  });