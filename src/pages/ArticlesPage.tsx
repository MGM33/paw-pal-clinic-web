import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { articlesData } from '@/data/articlesData';
import { motion, AnimatePresence } from 'framer-motion';

const ArticlesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    document.title = 'VetCare | Articles';
  }, []);

  const filteredArticles = articlesData.filter((article) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'dogs') return article.id >= 1 && article.id <= 4;
    if (selectedCategory === 'poultry') return article.id >= 5 && article.id <= 9;
    if (selectedCategory === 'cats') return article.id > 1000;
    return false;
  });

  const categories = [
    { id: 'all', label: 'كل المقالات' },
    { id: 'dogs', label: 'مقالات الكلاب' },
    { id: 'poultry', label: 'مقالات الدواجن' },
    { id: 'cats', label: 'مقالات القطط' },
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-theme-lightsky/30 to-theme-powder/30 min-h-screen" dir="rtl">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6 text-center">مقالات الحيوانات</h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          تصفح مقالاتنا المتخصصة لمساعدتك في رعاية أصدقائك الكلاب، القطط، أو الدواجن.
        </p>

        {/* أزرار الفئات */}
        <div className="flex flex-wrap gap-3 mb-10 justify-end" dir="rtl">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredArticles.map((article) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  to={`/articles/${article.id}`}
                  className="bg-white/90 border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-transform hover:-translate-y-1 overflow-hidden"
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
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ArticlesPage;
