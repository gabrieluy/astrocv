import type { IconName, Photo, Section } from '../shared';

export interface Article {
  /**
   * [WEB] Title of the article.
   */
  title: string;

  /**
   * [WEB] Thumbnail of the article.
   *
   * **Ratio**: 16:9
   *
   * **Display size**: 448x252px
   */
  image: Photo;

  /**
   * [WEB] Link to the article.
   */
  url: string;
}

export interface ArticlesSection extends Section {
  /**
   * [WEB] List of the articles you learned the most from.
   */
  articles: Article[];
}
