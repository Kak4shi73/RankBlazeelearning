import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CourseCard from '../components/CourseCard';
import { featuredCourses } from '../data/courses';

interface HomeProps {
  onGetStarted: () => void;
  onViewCourses: () => void;
}

const Home: React.FC<HomeProps> = ({ onGetStarted, onViewCourses }) => {
  const handleEnrollCourse = (courseId: string) => {
    console.log('Course added to cart:', courseId);
  };

  return (
    <div>
      <Hero onGetStarted={onGetStarted} onViewCourses={onViewCourses} />
      <Features />
      
      {/* Popular Courses Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Popular Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of students in our most popular courses designed by industry experts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.slice(0, 6).map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onEnroll={handleEnrollCourse}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={onViewCourses}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              View All Courses
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from real students who transformed their careers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Frontend Developer at Google',
                image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
                quote: 'RankBlaze transformed my career completely. The courses are practical and taught by industry experts.'
              },
              {
                name: 'Michael Chen',
                role: 'Data Scientist at Microsoft',
                image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150',
                quote: 'The Python course was exceptional. I landed my dream job just 3 months after completing it.'
              },
              {
                name: 'Emma Rodriguez',
                role: 'Digital Marketing Manager',
                image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150',
                quote: 'Amazing platform with great support. The marketing course helped me grow my business significantly.'
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;