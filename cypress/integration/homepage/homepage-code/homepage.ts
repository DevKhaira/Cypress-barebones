/* eslint-disable cypress/no-unnecessary-waiting */
/* global cy */
import 'reflect-metadata';
import { injectable } from 'inversify';
import { IHomepage } from '../../../interfaces/homepage';
import 'cypress-xpath'
@injectable()
export class Homepage implements IHomepage {
    public visit = () => {
        cy.visit('/');
        return this;
    };
    public enterPostCode = (action: string) => {
        cy.get('.search_3').type(action);
        cy.get('.submit_3').click();
        return this;
    };
    public assertPropertiesWithValues = () => {
        cy.get('td').each(($el) => cy.wrap($el).should('have.value'));
        return this;
    };
    public assertMessage = (message) => {
        console.log(message);
        cy.get('th').contains(message).should('be.visible');
        // cy.get('h1').contains(message);
        return this;
    };
    public assertTimeFormatIsCorrect = () => {
        cy.contains(/^(((0[1-9]|[12]\d|3[01])[\/](0[13578]|1[02])[\/]((19|[2-9]\d)\d{2})\s(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]))|((0[1-9]|[12]\d|30)[\/](0[13456789]|1[012])[\/]((19|[2-9]\d)\d{2})\s(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]))|((0[1-9]|1\d|2[0-8])[\/](02)[\/]((19|[2-9]\d)\d{2})\s(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]))|((29)[\/\.-](02)[\/\.-]((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))\s(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])))$/g);
    }
    public assertHeaderVisible = () => {
        cy.get('.header').should('be.visible');
        return this;
    }

    public assertSearchBarVisible = () => {
        cy.get('.search_3').should('be.visible');
        return this;
    }
}
 