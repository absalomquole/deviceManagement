import { DeviceLabPage } from './app.po';

describe('device-lab App', () => {
  let page: DeviceLabPage;

  beforeEach(() => {
    page = new DeviceLabPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
