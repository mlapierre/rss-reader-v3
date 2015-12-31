export class App {
  configureRouter(config, router) {
    config.title = 'Reader';
    config.map([
      { route: ['', 'feeds/:feedId'],  moduleId: 'articles-panel', name:'articles' }
    ]);
    this.router = router;
  }
}
