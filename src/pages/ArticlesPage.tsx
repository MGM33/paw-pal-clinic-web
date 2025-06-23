import React from 'react';
import { Link } from 'react-router-dom';
import { articlesData } from '@/data/articlesData';

const ArticlesPage = () => {
  React.useEffect(() => {
    document.title = 'VetCare | Articles';
  }, []);

  return (
    <section className="py-12 bg-gradient-to-br from-theme-lightsky/30 to-theme-powder/30 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6 text-center">Pet Articles</h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Explore our expert-written articles to help you care better for your furry, feathery, or fluffy friends.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articlesData.map((article) => (
  <Link
    key={article.id}
    to={`/articles/${article.id}`}
    className="bg-white/90 rounded-xl shadow-lg hover:shadow-xl transition-transform hover:-translate-y-1 overflow-hidden"
  >
    <img src={article.image} alt={article.title} className="h-48 w-full object-cover" />
    
    {/* Right-to-left content only */}
    <div className="p-5" dir="rtl">
      <h2 className="text-2xl font-bold mb-2 text-theme-deepsky">{article.title}</h2>
      <p className="text-gray-600 text-sm line-clamp-3">{article.description}</p>
    </div>
  </Link>
))}

        </div>
      </div>
    </section>
  );
};

export default ArticlesPage;
