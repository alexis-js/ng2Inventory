import { Ng2InventoryPage } from './app.po';

describe('ng2-inventory App', () => {
  let page: Ng2InventoryPage;

  beforeEach(() => {
    page = new Ng2InventoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
