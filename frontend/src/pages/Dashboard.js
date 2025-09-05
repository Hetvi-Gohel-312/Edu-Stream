import React, { useState } from 'react';
import { 
  HomeIcon, 
  BookOpenIcon, 
  ChartBarIcon, 
  ChatBubbleLeftRightIcon,
  Cog6ToothIcon,
  UserIcon,
  PlayIcon,
  ClockIcon,
  TrophyIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: HomeIcon },
    { id: 'courses', label: 'My Courses', icon: BookOpenIcon },
    { id: 'progress', label: 'Progress', icon: ChartBarIcon },
    { id: 'chat', label: 'Chat', icon: ChatBubbleLeftRightIcon },
    { id: 'settings', label: 'Settings', icon: Cog6ToothIcon }
  ];

  const recentCourses = [
    {
      id: 1,
      title: 'React Fundamentals',
      instructor: 'John Doe',
      progress: 75,
      thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cce?w=300&h=200&fit=crop',
      duration: '2h 30m',
      lastAccessed: '2 hours ago'
    },
    {
      id: 2,
      title: 'Advanced JavaScript',
      instructor: 'Jane Smith',
      progress: 45,
      thumbnail: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=300&h=200&fit=crop',
      duration: '3h 45m',
      lastAccessed: '1 day ago'
    },
    {
      id: 3,
      title: 'CSS Mastery',
      instructor: 'Mike Johnson',
      progress: 90,
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop',
      duration: '1h 52m',
      lastAccessed: '3 days ago'
    }
  ];

  const progressData = [
    { name: 'Week 1', completed: 4, total: 6 },
    { name: 'Week 2', completed: 6, total: 6 },
    { name: 'Week 3', completed: 5, total: 8 },
    { name: 'Week 4', completed: 7, total: 8 },
    { name: 'Week 5', completed: 3, total: 6 },
    { name: 'Week 6', completed: 8, total: 8 }
  ];

  const courseStats = [
    { name: 'Completed', value: 12, color: '#10B981' },
    { name: 'In Progress', value: 5, color: '#F59E0B' },
    { name: 'Not Started', value: 3, color: '#6B7280' }
  ];

  const weeklyActivity = [
    { day: 'Mon', hours: 2.5 },
    { day: 'Tue', hours: 3.2 },
    { day: 'Wed', hours: 1.8 },
    { day: 'Thu', hours: 4.1 },
    { day: 'Fri', hours: 2.9 },
    { day: 'Sat', hours: 5.2 },
    { day: 'Sun', hours: 3.7 }
  ];

  const COLORS = ['#6D28D9', '#A78BFA', '#F5F3FF'];

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card p-6">
          <div className="flex items-center">
            <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-xl">
              <BookOpenIcon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Courses</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">20</p>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 dark:bg-green-900 rounded-xl">
              <TrophyIcon className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Completed</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">12</p>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-xl">
              <ClockIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Study Time</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">48h</p>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-xl">
              <ChartBarIcon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Streak</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">7 days</p>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Weekly Activity</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={weeklyActivity}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="day" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#F9FAFB', 
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px'
                }} 
              />
              <Line 
                type="monotone" 
                dataKey="hours" 
                stroke="#6D28D9" 
                strokeWidth={3}
                dot={{ fill: '#A78BFA', strokeWidth: 2, r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Course Progress</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={progressData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="name" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#F9FAFB', 
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px'
                }} 
              />
              <Bar dataKey="completed" fill="#6D28D9" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Courses */}
      <div className="card p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Courses</h3>
          <button className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-sm font-medium">
            View all
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentCourses.map((course) => (
            <div key={course.id} className="card-hover">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-32 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <PlayIcon className="h-12 w-12 text-white" />
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{course.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">by {course.instructor}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-primary-600 to-primary-800 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span>{course.duration}</span>
                    <span>{course.lastAccessed}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCourses = () => (
    <div className="space-y-6">
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">My Courses</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentCourses.map((course) => (
            <div key={course.id} className="card card-hover">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium text-gray-700 dark:text-gray-300">
                  {course.progress}%
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{course.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">by {course.instructor}</p>
                <div className="space-y-3">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-primary-600 to-primary-800 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">{course.duration}</span>
                    <button className="btn-primary text-sm px-4 py-2">
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderProgress = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Course Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={courseStats}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {courseStats.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Learning Streak</h3>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">7</div>
            <div className="text-gray-600 dark:text-gray-400 mb-4">Days in a row</div>
            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: 7 }, (_, i) => (
                <div
                  key={i}
                  className={`h-8 rounded ${
                    i < 7 ? 'bg-primary-600' : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderChat = () => (
    <div className="space-y-6">
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Chat with Instructors</h3>
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 h-96 flex items-center justify-center">
          <div className="text-center">
            <ChatBubbleLeftRightIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-400">Chat feature coming soon!</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Account Settings</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Full Name
            </label>
            <input
              type="text"
              defaultValue="John Doe"
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              defaultValue="john@example.com"
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Bio
            </label>
            <textarea
              rows={4}
              defaultValue="Passionate learner and developer"
              className="input-field"
            />
          </div>
          <button className="btn-primary">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview();
      case 'courses':
        return renderCourses();
      case 'progress':
        return renderProgress();
      case 'chat':
        return renderChat();
      case 'settings':
        return renderSettings();
      default:
        return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-soft dark:bg-gradient-dark">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-r border-primary-100 dark:border-primary-800 min-h-screen">
          <div className="p-6">
            <h2 className="text-xl font-bold gradient-text">Dashboard</h2>
          </div>
          <nav className="px-4 space-y-2">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full sidebar-item ${activeTab === item.id ? 'active' : ''}`}
              >
                <item.icon className="h-5 w-5 mr-3" />
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

