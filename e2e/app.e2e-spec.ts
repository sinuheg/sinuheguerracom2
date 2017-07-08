import { Sinuheguerracom2Page } from './app.po';

describe('sinuheguerracom2 App', () => {
  let page: Sinuheguerracom2Page;

  beforeEach(() => {
    page = new Sinuheguerracom2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
