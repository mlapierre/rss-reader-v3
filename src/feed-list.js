import {DataSource} from './data-source';
import {inject} from 'aurelia-framework';

@inject(DataSource)
export class FeedList {
  constructor(ds) {
    this.ds = ds;
  }

  attached() {
    return this.ds.getTags().then(tags => this.tags = tags);
  }
}
