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
      <div className="py-20 text-center" dir="rtl">
        <h1 className="text-4xl font-bold text-red-600 mb-4">٤٠٤ - المقال غير موجود</h1>
        <p className="text-gray-600">المقال الذي تبحث عنه غير موجود.</p>
      </div>
    );
  }

  return (
    <section className="py-12 px-4 max-w-3xl mx-auto" dir="rtl">
     {article.videoUrl ? (
  <div className="aspect-w-16 aspect-h-9 mb-6">
    <iframe
      src={article.videoUrl}
      title={article.title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="w-full h-full rounded-xl shadow"
    ></iframe>
  </div>
) : (
  <img
    src={article.image}
    alt={article.title}
    className="rounded-xl shadow mb-6 w-full max-h-[400px] object-cover"
  />
)}


      <h1 className="text-4xl font-bold text-theme-deepsky mb-2">
        {article.title}
      </h1>

      <p className="text-sm text-gray-500 mb-6">
        بواسطة <span className="font-semibold">{article.author}</span>
      </p>

      <div className="prose max-w-none text-gray-700 text-lg whitespace-pre-wrap mb-8">
        {article.content}
      </div>

      {article.pdf && (
        <div className="mt-6 text-center">
          <a
            href={article.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-theme-deepsky text-white px-6 py-2 rounded-lg shadow hover:bg-theme-sky transition"
          >
            📄 عرض المقال الكامل (PDF)
          </a>
        </div>
      )}
    </section>
  );
};

export default ArticleDetailPage;
