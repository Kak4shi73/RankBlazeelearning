import React from 'react';
import { 
  BookOpen, 
  Users, 
  Award, 
  Clock, 
  Video, 
  MessageCircle,
  Download,
  Globe
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Video,
      title: 'HD Video Lectures',
      description: 'High-quality video content with crystal clear audio and professional production.'
    },
    {
      icon: Download,
      title: 'Offline Access',
      description: 'Download courses and learn anywhere, anytime without internet connection.'
    },
    {
      icon: Award,
      title: 'Certificates',
      description: 'Earn industry-recognized certificates upon successful course completion.'
    },
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with years of real-world experience.'
    },
    {
      icon: MessageCircle,
      title: 'Community Support',
      description: 'Join discussions, ask questions, and connect with fellow learners.'
    },
    {
      icon: Clock,
      title: 'Flexible Learning',
      description: 'Self-paced learning that fits your schedule and lifestyle perfectly.'
    },
    {
      icon: Globe,
      title: 'Global Access',
      description: 'Access courses from anywhere in the world with our global platform.'
    },
    {
      icon: BookOpen,
      title: 'Rich Content',
      description: 'Comprehensive materials including videos, quizzes, and practical projects.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose RankBlaze?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide everything you need to succeed in your learning journey with 
            cutting-edge features and world-class support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Start Your Learning Journey?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have already transformed their careers with our courses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200">
              Browse All Courses
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;