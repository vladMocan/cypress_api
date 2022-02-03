/*
* In this file we create custom commands
*/

const BASE_API_URL = Cypress.config("baseApiUrl");

Cypress.Commands.add("getRequest", (endpoint) => {
    const props = {
        method: 'GET',
        url: BASE_API_URL + endpoint,
    };

    cy.request(props);
});

Cypress.Commands.add("postRequest", (endpoint, payload) => {
    const props = {
        method: 'POST',
        url: BASE_API_URL + endpoint,
        body: payload
    };

    cy.request(props);

});

Cypress.Commands.add("putRequest", (endpoint, payload) => {
    const props = {
        method: 'PUT',
        url: BASE_API_URL + endpoint,
        body: payload
    };

        cy.request(props);
});

Cypress.Commands.add("deleteRequest", (endpoint) => {
    const props = {
        method: 'DELETE',
        url: BASE_API_URL + endpoint,
        failOnStatusCode: false,
    };

    cy.request(props);
});