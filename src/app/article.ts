export class Article {
  author: string;
  dateCreated: string;
  title: string;
  // content conforms to markdown specs
  content: string;
  tags: [string];
  constructor(data: ArticleOptions) {}
}

export interface ArticleOptions {
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
}
