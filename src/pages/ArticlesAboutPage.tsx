import React from 'react';
import { Link } from 'react-router-dom';

const ArticlesAboutPage = () => {
  React.useEffect(() => {
    document.title = 'VetCare | About Articles';
  }, []);

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-theme-lightsky/20 to-theme-powder/20 min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white/90 rounded-xl shadow-xl p-10">
          <h1 className="text-4xl font-bold text-theme-deepsky mb-6 text-center">Discover Our Knowledge Hub</h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            At VetCare, we believe that informed pet owners make the best caregivers. That’s why we created our <strong>Articles</strong> section — a growing collection of expert-written guides, tips, and how-tos designed to empower you with accurate veterinary knowledge.
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Learn how to choose the right nutrition for your pets.</li>
            <li>Stay on top of essential vaccines and healthcare practices.</li>
            <li>Spot early signs of illness with our home checkup tips.</li>
            <li>And much more — all reviewed by veterinary professionals.</li>
          </ul>
          <p className="text-gray-700 text-md mb-8">
            Whether you're a new pet parent or an experienced one, our articles are here to guide you on your journey of keeping your pet happy and healthy.
          </p>

          <div className="text-center">
            <Link
              to="/articles"
              className="inline-block bg-theme-deepsky text-white px-6 py-3 rounded-md font-semibold shadow hover:bg-theme-sky transition-colors"
            >
              Browse Articles
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticlesAboutPage;
