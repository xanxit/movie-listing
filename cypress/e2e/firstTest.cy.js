/* eslint-disable no-undef */
describe('search bar loading', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/');
    cy.get('[data-testid="searchbar"]').should("exist");
  })
})
describe('api call happening on Mount', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/');
    cy.request(`https://api.themoviedb.org/3/discover/movie?api_key=${
      Cypress.env('api_key')
    }&language=en-US&page=1`)
  })
})

describe('api call happening on LoadMore', ()=>{
  it('Clicks on Load More button and checks for API call', () => {
    cy.intercept('GET', `https://api.themoviedb.org/3/discover/movie?api_key=${
      Cypress.env('api_key')
    }&language=en-US&page=2`).as('loadMoreAPI'); // Intercepting API call

    // Visit the page where the button exists
    cy.visit('http://localhost:5173/');

    // Click on the button with data-testid="loadmore"
    cy.get('[data-testid="loadMore"]').click();

    // Wait for the API call to happen
    cy.wait('@loadMoreAPI').then((interception) => {
      // Check if the API call status is successful
      expect(interception.response.statusCode).to.eq(200);
      
      // You can add more assertions here based on your API response
      // For example, if you're expecting certain data to be returned.
      // expect(interception.response.body.someProperty).to.eq(expectedValue);
    });
  });
});