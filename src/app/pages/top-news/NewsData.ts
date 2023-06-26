export interface NewsData {
  articles: Article[];
}

interface Article {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: object;
  title: string;
  url: string;
  urlToImage: string;
}
