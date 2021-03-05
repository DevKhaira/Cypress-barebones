/* eslint-disable new-cap */
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'; // eslint-disable-line import/no-unresolved
import { IHomepage } from '../../interfaces/homepage';
import { TYPES } from '../../../types';
import { ioc } from '../inversify.config';
const homepage = ioc.get<IHomepage>(TYPES.Homepage);

Given('I am on the homepage', () => {
  homepage.visit();
});

When(`I enter in postcode: {string}`, postCode => {
  homepage.enterPostCode(postCode);
});

Then(`I should see the header`, () => {
  homepage.assertHeaderVisible();
});

Then(`I should see the search bar`, () => {
  homepage.assertSearchBarVisible();
});

Then(`I should see the word: {string}`, (message) => {
  homepage.assertMessage(message);
});

Then(`I should see time, weather and humidity`, () => {
  homepage.assertMessage('Time');
  homepage.assertMessage('Temperature');
  homepage.assertMessage('Humidity');
});

Then(`I should see all other properties with values`, () => {
  homepage.assertPropertiesWithValues();
});

Then('I should see the time format correctly', () => {
  homepage.assertTimeFormatIsCorrect();
});