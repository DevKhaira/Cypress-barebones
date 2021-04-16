/* eslint-disable cypress/no-unnecessary-waiting */
/* global cy */
import 'reflect-metadata';
import { injectable } from 'inversify';
import { IHomepage } from '../../../interfaces/homepage';
import 'cypress-xpath'
@injectable()
export class Homepage implements IHomepage {
    private selectors = {};
    public visit = () => {
        cy.visit('/');
        return this;
    };
}
 