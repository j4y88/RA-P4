import { RaP4Page } from './app.po';

describe('ra-p4 App', () => {
  let page: RaP4Page;

  beforeEach(() => {
    page = new RaP4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
