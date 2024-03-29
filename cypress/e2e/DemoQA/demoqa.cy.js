import SelectablePage from "../../components/selectable.page";

describe('DemoQA', () => {
    context('Selectable', () => {
        it('Test grid', () => {
            SelectablePage.visit();

            //Go to grid tab
            SelectablePage.gridTab.click();

            //Select values
            SelectablePage.twoGridItem.click();
            SelectablePage.fourGridItem.click();
            SelectablePage.sixGridItem.click();
            SelectablePage.eightGridItem.click();

            SelectablePage.oneGridItem.should('not.have.class', SelectablePage.gridItemActiveClass);
            SelectablePage.twoGridItem.should('have.class', SelectablePage.gridItemActiveClass);
            SelectablePage.threeGridItem.should('not.have.class', SelectablePage.gridItemActiveClass);
            SelectablePage.fourGridItem.should('have.class', SelectablePage.gridItemActiveClass);
            SelectablePage.fiveGridItem.should('not.have.class', SelectablePage.gridItemActiveClass);
            SelectablePage.sixGridItem.should('have.class', SelectablePage.gridItemActiveClass);
            SelectablePage.sevenGridItem.should('not.have.class', SelectablePage.gridItemActiveClass);
            SelectablePage.eightGridItem.should('have.class', SelectablePage.gridItemActiveClass);
            SelectablePage.nineGridItem.should('not.have.class', SelectablePage.gridItemActiveClass);
        })
    })
})