import { DigitsRecognitionPage } from './app.po';

describe('digits-recognition App', () => {
  let page: DigitsRecognitionPage;

  beforeEach(() => {
    page = new DigitsRecognitionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
