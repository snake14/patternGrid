import { PatternGridPage } from './app.po';

describe('pattern-grid App', () => {
  let page: PatternGridPage;

  beforeEach(() => {
    page = new PatternGridPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
