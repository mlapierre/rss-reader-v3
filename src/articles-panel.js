import {DataSource} from './data-source';
import {inject} from 'aurelia-framework';

@inject(DataSource)
export class ArticlesPanel {

  constructor(ds) {
    this.ds = ds;
  }

  activate(params, config) {
    return this.ds.getArticles(params.feedId)
      .then(articles => {
        this.articles = articles;
      });
  }

}
