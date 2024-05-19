import { Link } from "@mui/material";
import { baseURL } from "../../../constants";
import { Article } from "../../../types";
import imageHolder from "../400.svg";

export const NewsArticle: React.FC<{ article: Article }> = ({ article }) => {
  const { title, url, body, source, date, author, image } = article;

  return (
    <Link key={title} className="article" href={url}>
      <div className="row-1">
        <div className="image-container">
          <img
            src={`${baseURL}${image}`}
            alt={title}
            loading="lazy"
            onError={(e) => (e.currentTarget.src = imageHolder)}
          />
        </div>
        <div className="date-category">
          <div className="date-category-container">
            <p className="date">{date}</p>
            <p className="category">{source}</p>
          </div>
          <div className="row-title">
            <div
              className="title"
              dangerouslySetInnerHTML={{ __html: title }}
            ></div>
          </div>
        </div>
      </div>

      <div className="row-2">
        <div className="deep" dangerouslySetInnerHTML={{ __html: body }}></div>
      </div>
      <div className="row-3">
        <div className="author">
          <strong>{author}</strong>
        </div>
      </div>
    </Link>
  );
};
