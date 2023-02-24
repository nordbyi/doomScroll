describe('Home Screen', () => {
  it('Should have a list of categories', () => {
    cy.request('http://localhost:19006/') //beforeEach broke our test
    cy.contains("Earthquakes");
    cy.contains("Volcanoes");
    cy.contains("Wildfires");
    cy.contains("Severe Storms");
    cy.contains("Asteroids");
  })
})