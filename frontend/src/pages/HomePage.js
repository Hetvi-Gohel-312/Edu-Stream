import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  PlayIcon, 
  SpeakerWaveIcon, 
  PhotoIcon,
  StarIcon,
  UsersIcon,
  BookOpenIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const HomePage = () => {
  const [activeMedia, setActiveMedia] = useState('videos');

  const mediaItems = {
    videos: [
      {
        id: 1,
        title: "React Fundamentals",
        thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cce?w=400&h=225&fit=crop",
        duration: "2:30",
        views: "12.5K",
        rating: 4.8
      },
      {
        id: 2,
        title: "Advanced JavaScript",
        thumbnail: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=225&fit=crop",
        duration: "3:45",
        views: "8.9K",
        rating: 4.9
      },
      {
        id: 3,
        title: "CSS Mastery",
        thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=225&fit=crop",
        duration: "1:52",
        views: "15.2K",
        rating: 4.7
      },
      {
        id: 4,
        title: "Node.js Backend",
        thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=225&fit=crop",
        duration: "4:12",
        views: "6.8K",
        rating: 4.6
      }
    ],
    audios: [
      {
        id: 1,
        title: "Podcast: Web Development Trends",
        thumbnail: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=225&fit=crop",
        duration: "45:30",
        views: "3.2K",
        rating: 4.5
      },
      {
        id: 2,
        title: "Audio Course: Design Principles",
        thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=225&fit=crop",
        duration: "32:15",
        views: "2.8K",
        rating: 4.7
      }
    ],
    images: [
      {
        id: 1,
        title: "UI Design Gallery",
        thumbnail: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=225&fit=crop",
        views: "5.1K",
        rating: 4.8
      },
      {
        id: 2,
        title: "Code Snippets Collection",
        thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=225&fit=crop",
        views: "7.3K",
        rating: 4.6
      }
    ]
  };

  const stats = [
    { icon: UsersIcon, label: "Students", value: "50K+" },
    { icon: BookOpenIcon, label: "Courses", value: "200+" },
    { icon: StarIcon, label: "Rating", value: "4.9/5" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-lavender opacity-90"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Learn Without Limits
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Discover thousands of courses, videos, and resources to advance your skills and career
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register" className="btn-primary text-lg px-8 py-4">
                Start Learning Today
                <ArrowRightIcon className="ml-2 h-5 w-5 inline" />
              </Link>
              <Link to="/courses" className="btn-secondary text-lg px-8 py-4">
                Browse Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-2xl mb-4">
                  <stat.icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Gallery Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Explore Our Content
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Choose from videos, audio courses, and visual resources to enhance your learning experience
            </p>
          </div>

          {/* Media Type Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-2 border border-primary-100 dark:border-primary-800">
              <div className="flex space-x-2">
                {[
                  { key: 'videos', label: 'Videos', icon: PlayIcon },
                  { key: 'audios', label: 'Audio', icon: SpeakerWaveIcon },
                  { key: 'images', label: 'Images', icon: PhotoIcon }
                ].map((type) => (
                  <button
                    key={type.key}
                    onClick={() => setActiveMedia(type.key)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                      activeMedia === type.key
                        ? 'bg-primary-600 text-white shadow-lavender'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900'
                    }`}
                  >
                    <type.icon className="h-5 w-5" />
                    <span className="font-medium">{type.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Media Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaItems[activeMedia].map((item) => (
              <div key={item.id} className="card card-hover group">
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      {activeMedia === 'videos' && <PlayIcon className="h-8 w-8 text-white" />}
                      {activeMedia === 'audios' && <SpeakerWaveIcon className="h-8 w-8 text-white" />}
                      {activeMedia === 'images' && <PhotoIcon className="h-8 w-8 text-white" />}
                    </div>
                  </div>
                  {item.duration && (
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {item.duration}
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>{item.views} views</span>
                    <div className="flex items-center space-x-1">
                      <StarIcon className="h-4 w-4 text-yellow-400 fill-current" />
                      <span>{item.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/courses" className="btn-primary text-lg px-8 py-4">
              View All Content
              <ArrowRightIcon className="ml-2 h-5 w-5 inline" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Why Choose EduStream?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Experience the future of online learning with our innovative platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Interactive Learning",
                description: "Engage with hands-on projects and real-world applications",
                icon: "🎯"
              },
              {
                title: "Expert Instructors",
                description: "Learn from industry professionals and certified experts",
                icon: "👨‍🏫"
              },
              {
                title: "Flexible Schedule",
                description: "Study at your own pace with lifetime access to materials",
                icon: "⏰"
              }
            ].map((feature, index) => (
              <div key={index} className="card text-center p-8">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

