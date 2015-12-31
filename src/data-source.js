import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

let latency = 0;

@inject(HttpClient)
export class DataSource {
  constructor(http) {
    this.http = http;
  }

  getTags() {
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let results = [{
          id: 'testId1',
          name: 'test1',
          feeds: [{ ref: 'feed1.1', title: 'Feed 1.1', unreadCount: 11 },
                  { ref: 'feed1.2', title: 'Feed 1.2', unreadCount: 12 }]
        },{
          id: 'testId2',
          name: 'test2',
          feeds: [{ ref: 'feed2.1', title: 'Feed 2.1', unreadCount: 21 },
                  { ref: 'feed2.2', title: 'Feed 2.2', unreadCount: 22 },
                  { ref: 'feed2.3', title: 'Feed 2.3', unreadCount: 23 }]
        }];
        resolve(results);
        this.isRequesting = false;
      }, latency);
    });
  }

  getArticles(feedId) {
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let results = [{
          feedRef: 'feed1.1',
          articles: [{ id: 'article1.1.1', title: 'Article 1.1.1', content: 'Text 1.1.1' },
                     { id: 'article1.1.2', title: 'Article 1.1.2', content: 'Text 1.1.2' }]
        },{
          feedRef: 'feed1.2',
          articles: [{ id: 'article1.2.1', title: 'Article 1.2.1', content: 'Text 1.2.1' },
                     { id: 'article1.2.2', title: 'Article 1.2.2', content: 'Text 1.2.2' }]
        }];
        resolve(results.filter(result => result.feedRef == feedId)
                       .map(result => result.articles)
                       .reduce((a, b) => a.concat(b)));
        this.isRequesting = false;
      }, latency);
    });
  }
}
