export interface IHomepage {
    visit(): IHomepage;
    enterPostCode(position: string): IHomepage;
    assertPropertiesWithValues(): IHomepage;
    assertMessage(action: string): IHomepage;
    assertHeaderVisible(): IHomepage;
    assertSearchBarVisible(): IHomepage;
    assertTimeFormatIsCorrect(): void;
  }
  