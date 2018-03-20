import { MicdsSportsNetworkPage } from './app.po';

describe('micds-sports-network App', () => {
  let page: MicdsSportsNetworkPage;

  beforeEach(() => {
    page = new MicdsSportsNetworkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
