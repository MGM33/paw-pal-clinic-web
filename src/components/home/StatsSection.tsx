
import React, { useState, useEffect } from 'react';
import { Users, Heart, Award, Clock } from 'lucide-react';

const StatsSection = () => {
  const [counts, setCounts] = useState({
    patients: 0,
    treatments: 0,
    awards: 0,
    experience: 0
  });

  const finalCounts = {
    patients: 5000,
    treatments: 15000,
    awards: 25,
    experience: 15
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const counters = Object.keys(finalCounts).map(key => {
      const finalCount = finalCounts[key as keyof typeof finalCounts];
      const increment = finalCount / steps;
      let currentCount = 0;

      return setInterval(() => {
        currentCount += increment;
        if (currentCount >= finalCount) {
          currentCount = finalCount;
          clearInterval(counters[Object.keys(finalCounts).indexOf(key)]);
        }
        setCounts(prev => ({
          ...prev,
          [key]: Math.floor(currentCount)
        }));
      }, stepDuration);
    });

    return () => counters.forEach(clearInterval);
  }, []);

  const stats = [
    {
      icon: <Users size={40} />,
      count: counts.patients,
      suffix: '+',
      label: 'Happy Patients',
      color: 'text-blue-500'
    },
    {
      icon: <Heart size={40} />,
      count: counts.treatments,
      suffix: '+',
      label: 'Successful Treatments',
      color: 'text-red-500'
    },
    {
      icon: <Award size={40} />,
      count: counts.awards,
      suffix: '+',
      label: 'Awards Won',
      color: 'text-yellow-500'
    },
    {
      icon: <Clock size={40} />,
      count: counts.experience,
      suffix: '+',
      label: 'Years Experience',
      color: 'text-green-500'
    }
  ];

  return (
    <section className="py-16 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 animate-fade-in-up">Our Achievements</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">Numbers that speak for our commitment to excellence in veterinary care.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center glass-effect rounded-xl p-8 hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`${stat.color} mb-4 flex justify-center`}>
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-theme-deepsky mb-2">
                {stat.count.toLocaleString()}{stat.suffix}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
