class SelectablePage
{
    static visit(){
        return cy.visit(Cypress.env('siteBaseUrl') + 'selectable');
    }

    static gridItemActiveClass = 'active';

    static get gridTab() {
        return cy.get('a#demo-tab-grid');
    }

    static get allGridItems() {
        return cy.get('#gridContainer>div>li.list-group-item');
    }

    static get oneGridItem() {
        return SelectablePage.allGridItems.contains('One');
    }

    static get twoGridItem() {
        return SelectablePage.allGridItems.contains('Two');
    }

    static get threeGridItem() {
        return SelectablePage.allGridItems.contains('Three');
    }

    static get fourGridItem() {
        return SelectablePage.allGridItems.contains('Four');
    }

    static get fiveGridItem() {
        return SelectablePage.allGridItems.contains('Five');
    }

    static get sixGridItem() {
        return SelectablePage.allGridItems.contains('Six');
    }

    static get sevenGridItem() {
        return SelectablePage.allGridItems.contains('Seven');
    }

    static get eightGridItem() {
        return SelectablePage.allGridItems.contains('Eight');
    }

    static get nineGridItem() {
        return SelectablePage.allGridItems.contains('Nine');
    }
    static get listTab() {
        return cy.get('a#demo-tab-list');
    }

    static get allListItems() {
        //return cy.get('input[type=checkbox]');
        return cy.get('#verticalListContainer>li.list-group-item');
    }

    static get crasListItem() {
        return SelectablePage.allListItems.contains('Cras justo');
    }

    static get dapidusListItem() {
        return SelectablePage.allListItems.contains('Dapidus ac');
    }

    static get morbiListItem() {
        return SelectablePage.allListItems.contains('Morbi leo');
    }

    static get portaListItem() {
        return SelectablePage.allListItems.contains('Porta ac');
    }
}

export default SelectablePage;