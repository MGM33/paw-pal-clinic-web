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
      <img
        src={article.image}
        alt={article.title}
        className="rounded-xl shadow mb-6 w-full max-h-[400px] object-cover"
      />
      
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-4xl font-bold text-theme-deepsky">{article.title}</h1>
      </div>

      <p className="text-sm text-gray-500 mb-2">By <span className="font-semibold">{article.author}</span></p>

      {article.pdf && (
        <div className="mb-6">
          <a
            href={article.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-theme-deepsky text-white px-4 py-2 rounded-lg shadow hover:bg-theme-sky transition"
          >
            📄 View Full Article (PDF)
          </a>
        </div>
      )}

      <div className="prose max-w-none text-gray-700 text-lg whitespace-pre-wrap">
        {article.content}
      </div>
    </section>
  );
};

export default ArticleDetailPage;
