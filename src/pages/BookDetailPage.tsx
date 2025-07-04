
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BookOpen, User, Calendar, ArrowLeft } from 'lucide-react';

const BookDetailPage = () => {
  const { bookId } = useParams();

  const books = [
    {
      id: 1,
      title: 'Veterinary Medicine Handbook',
      author: 'Dr. Sarah Johnson',
      cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1000&auto=format&fit=crop',
      description: 'Comprehensive guide to modern veterinary practices and treatments.',
      fullDescription: 'This comprehensive handbook serves as an essential reference for veterinary professionals and students alike. Covering everything from basic animal anatomy to advanced diagnostic procedures, this book provides practical insights and evidence-based approaches to modern veterinary medicine.',
      publishYear: '2023',
      pages: 456,
      chapters: [
        'Introduction to Veterinary Medicine',
        'Animal Anatomy and Physiology',
        'Diagnostic Procedures',
        'Common Diseases and Treatments',
        'Emergency Medicine',
        'Preventive Care'
      ]
    },
    {
      id: 2,
      title: 'Small Animal Internal Medicine',
      author: 'Dr. Michael Roberts',
      cover: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop',
      description: 'Essential reference for diagnosing and treating small animals.',
      fullDescription: 'A detailed exploration of internal medicine principles specifically for small animals. This book covers diagnostic approaches, treatment protocols, and management strategies for various internal medicine conditions in dogs and cats.',
      publishYear: '2022',
      pages: 612,
      chapters: [
        'Cardiovascular Diseases',
        'Respiratory Disorders',
        'Gastrointestinal Medicine',
        'Endocrine Disorders',
        'Kidney and Urinary Diseases',
        'Neurological Conditions'
      ]
    },
    // Add other books here with similar structure
  ];

  const book = books.find(b => b.id === Number(bookId)) || books[0];

  useEffect(() => {
    document.title = `VetCare | ${book.title}`;
  }, [book.title]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-theme-lightsky/30 to-theme-powder/30 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/90 rounded-3xl shadow-xl overflow-hidden">
            <div className="md:flex">
              {/* Book Cover */}
              <div className="md:w-1/3 p-8 flex justify-center items-start">
                <div className="w-64 h-80 rounded-lg overflow-hidden shadow-2xl">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Book Details */}
              <div className="md:w-2/3 p-8">
                <div className="mb-6">
                  <Link
                    to="/resources"
                    className="inline-flex items-center text-theme-deepsky hover:text-theme-sky transition-colors mb-4"
                  >
                    <ArrowLeft size={20} className="mr-2" />
                    Back to Resources
                  </Link>
                  
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">{book.title}</h1>
                  
                  <div className="flex items-center space-x-6 text-gray-600 mb-6">
                    <div className="flex items-center">
                      <User size={18} className="mr-2" />
                      <span>{book.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={18} className="mr-2" />
                      <span>{book.publishYear}</span>
                    </div>
                    <div className="flex items-center">
                      <BookOpen size={18} className="mr-2" />
                      <span>{book.pages} pages</span>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4 text-theme-deepsky">About This Book</h2>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {book.fullDescription}
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4 text-theme-deepsky">Table of Contents</h2>
                  <ul className="space-y-2">
                    {book.chapters.map((chapter, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <span className="w-8 h-8 bg-theme-lightsky/30 rounded-full flex items-center justify-center text-sm font-medium mr-3">
                          {index + 1}
                        </span>
                        {chapter}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-theme-lightsky/20 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-theme-deepsky">Reference Information</h3>
                  <p className="text-gray-700 text-sm">
                    This book serves as one of our primary references for veterinary practices and procedures. 
                    The knowledge contained within guides our treatment protocols and professional standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;
