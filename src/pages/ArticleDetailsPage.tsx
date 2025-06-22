import React from 'react';
import { useParams } from 'react-router-dom';
import { articlesData } from '@/data/articlesData';

const ArticleDetailPage = () => {
  const { articleId } = useParams();
  const article = articlesData.find((a) => a.id === articleId);

  React.useEffect(() => {
    if (article) document.title = `VetCare | ${article.title}`;
    else document.title = 'VetCare | Article Not Found';
  }, [article]);

  if (!article) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">404 - Article Not Found</h1>
        <p className="text-gray-600">The article you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <section className="py-12 px-4 max-w-3xl mx-auto">
      <img src={article.image} alt={article.title} className="rounded-xl shadow mb-8 w-full max-h-[400px] object-cover" />
      <h1 className="text-4xl font-bold mb-4 text-theme-deepsky">{article.title}</h1>
      <div className="prose max-w-none text-gray-700 text-lg whitespace-pre-wrap">
        {article.content}
      </div>
    </section>
  );
};

export default ArticleDetailPage;