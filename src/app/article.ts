export class Article implements ArticleOptions {
  author: string;
  dateCreated: string;
  title: string;
  // content conforms to markdown specs
  content: string;
  tags: [string];
  _id: string;
  constructor(data: ArticleOptions) {
    this.author = data.author;
    this.dateCreated = data.dateCreated;
    this.title = data.title;
    this.content = data.content;
    this.tags = data.tags;
    if (data._id) {
      this._id = data._id;
    }
  }
}

export interface ArticleOptions {
  _id?: string;
  author: string;
  dateCreated: string;
  title: string;
  // content conforms to markdown specs
  content: string;
  tags: [string];
}

export interface ArticleListOptions {
  author: string;
  dateCreated: string;
  title: string;
  tags: string;
  _id: string;
}
