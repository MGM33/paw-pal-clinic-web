
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { articlesData } from '@/data/articlesData';

const ArticlesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    document.title = 'VetCare | Articles';
  }, []);

  // تصفية المقالات حسب التصنيف
  const filteredArticles = articlesData.filter((article) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'ehc') return article.id.startsWith('ehc-');
    if (selectedCategory === 'dogs') {
      // Dogs category includes: dogs-only articles (1-4) + both cats and dogs articles (1001-1042 except cats-only)
      const numId = Number(article.id);
      if (numId >= 1 && numId <= 4) return true; // Dogs only
      if (numId >= 1001) {
        // Check if it's cats-only (specific IDs for cats only)
        const catsOnlyIds = [1014, 1018, 1039]; // Liver disease in cats, diabetes in cats, cat behavior
        return !catsOnlyIds.includes(numId);
      }
      return false;
    }
    if (selectedCategory === 'poultry') return Number(article.id) >= 5 && Number(article.id) <= 9;
    if (selectedCategory === 'cats') {
      // Cats category includes: cats-only articles + both cats and dogs articles (1001-1042)
      const numId = Number(article.id);
      if (numId >= 1001) return true; // All new articles are for cats or both
      return false;
    }
    return false;
  });

  const categories = [
     { id: 'poultry', label: 'مقالات الدواجن' },
     { id: 'cats', label: 'مقالات القطط' },
    { id: 'dogs', label: 'مقالات الكلاب' },
     { id: 'ehc', label: 'الدلائل الإرشادية للمجلس الصحي المصري' },
    { id: 'all', label: 'كل المقالات' },
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-theme-lightsky/30 to-theme-powder/30 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6 text-center">مقالات الحيوانات</h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          تصفح مقالاتنا المتخصصة لمساعدتك في رعاية أصدقائك الكلاب، القطط، أو الدواجن.
        </p>

        {/* أزرار التصنيفات */}
        <div className="flex flex-wrap gap-3 justify-end mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(prev => prev === cat.id ? 'all' : cat.id)}
              className={`px-4 py-2 rounded-full border text-sm font-semibold transition-colors
                ${
                  selectedCategory === cat.id
                    ? 'bg-theme-deepsky text-white border-theme-deepsky'
                    : 'bg-white text-theme-deepsky border-theme-deepsky hover:bg-theme-deepsky hover:text-white'
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* المقالات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" dir="rtl">
          {filteredArticles.map((article) => (
            <Link
              key={article.id}
              to={`/articles/${article.id}`}
              className="bg-white/90 rounded-xl shadow-lg hover:shadow-xl transition-transform hover:-translate-y-1 overflow-hidden border border-gray-200"
            >
              <img
                src={article.image}
                alt={article.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-5" dir="rtl">
                <h2 className="text-2xl font-bold mb-2 text-theme-deepsky">
                  {article.title}
                </h2>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {article.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesPage;
