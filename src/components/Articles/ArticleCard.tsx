import React from 'react';
import { Link } from 'react-router-dom';

interface ArticleCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ id, title, description, image }) => {
  return (
    <Link
      to={`/articles/${id}`}
      className="bg-white/90 rounded-xl shadow-lg hover:shadow-xl transition-transform hover:-translate-y-1 overflow-hidden"
    >
      <img src={image} alt={title} className="h-48 w-full object-cover" />
      <div className="p-5">
        <h2 className="text-2xl font-bold mb-2 text-theme-deepsky">{title}</h2>
        <p className="text-gray-600 text-sm line-clamp-3">{description}</p>
      </div>
    </Link>
  );
};

export default ArticleCard;