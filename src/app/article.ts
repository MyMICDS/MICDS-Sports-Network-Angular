export class Article implements Article {
}

export interface Article {
  author: string;
  dateCreated: string;
  title: string;
  // content conforms to markdown specs
  content: string;
  tags: [string];
}
