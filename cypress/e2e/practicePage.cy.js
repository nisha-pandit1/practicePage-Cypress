///<reference types ='cypress'/>

describe('Testing of practice page using cypress', function () {

   beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    })

    it('Radio button practice', function () {
        cy.get('[type="radio"]').eq(1).click();
    })

    it('Suggession class example', function () {
        cy.get('.inputs.ui-autocomplete-input').type('HELLO CYPRESS');
    })

    it('Dropdown example', function () {
        cy.get('#dropdown-class-example').select('option2');
    })

    it('Checkbox example', function () {
        cy.get('[type="checkbox"]').check(['option2','option3']);
    })

    it('switch window example', function () {
        cy.isWindowTabOpen().then((winopen=>{
            if(winopen){
                cy.log("window is opened");
            }
            else{
                cy.log('window is not opened');
            }
        }))
    })
    specify('Switch tab example',function(){
        cy.get('#opentab').invoke('attr','href').as('pageLink');
        cy.get('#opentab').click();
        cy.url().should('include',pageLink);
        // cy.url().should(url =>{
        //    expect(url.toLowerCase()).to.contain(this.pageLink.toLowerCase());
        // });
    })
})