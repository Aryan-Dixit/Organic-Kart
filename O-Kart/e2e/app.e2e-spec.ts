import { O-KartPage } from './app.po';

describe('O-Kart App', () => {
  let page: O-KartPage;

  beforeEach(() => {
    page = new O-KartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
