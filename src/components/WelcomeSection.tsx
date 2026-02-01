export function WelcomeSection() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-500 via-emerald-600 to-teal-700 rounded-2xl p-8 md:p-12 text-white shadow-2xl mb-8">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
          🎉 Congratulations!
        </h1>
        <p className="text-xl md:text-2xl text-center text-green-100 mb-6">
          You have been selected for our official training program.
        </p>
        <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
          <p className="text-center text-lg leading-relaxed">
            Trainees who demonstrate <strong>loyalty</strong>, <strong>consistency</strong>, <strong>discipline</strong>, and <strong>hard work</strong> will have a very high chance of being selected for a permanent role in our company.
          </p>
        </div>
      </div>

      {/* Welcome Message */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
          </span>
          Welcome Message
        </h2>
        <div className="prose prose-indigo max-w-none">
          <p className="text-gray-600 leading-relaxed mb-4">
            Dear Trainee,
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Welcome to our comprehensive 30-day developer training program! This journey will transform you from a curious beginner into a confident, job-ready developer. Every single day has been carefully designed to build upon the previous one, ensuring you develop a solid foundation in web development, problem-solving, and professional practices.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Over the next 30 days, you will learn HTML, CSS, JavaScript, version control with Git, how to work with APIs, debugging techniques, and even how to leverage AI as a development tool. More importantly, you'll build real projects that you can showcase in your portfolio.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Remember: every expert was once a beginner. Embrace the learning process, ask questions, help your fellow trainees, and most importantly—never give up. Your future self will thank you for the effort you put in today.
          </p>
        </div>
      </div>

      {/* Company Confidentiality */}
      <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-2xl p-6 mb-8">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-amber-800 text-lg mb-2">Confidentiality Notice</h3>
            <p className="text-amber-700">
              The company name and specific details will be revealed upon successful completion of the training program and selection. All training materials, projects, and internal processes are confidential. Sharing of any proprietary information is strictly prohibited and will result in immediate dismissal from the program.
            </p>
          </div>
        </div>
      </div>

      {/* Training Overview */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="font-bold text-gray-800 text-lg mb-4 flex items-center gap-2">
            <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            Training Schedule
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Duration: 30 Days
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Daily Timing: 9:00 AM – 5:00 PM
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Overtime: 10-15 hours (optional)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Salary: Industry standard (disclosed after selection)
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="font-bold text-gray-800 text-lg mb-4 flex items-center gap-2">
            <span className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            Training Areas
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              Web Development (HTML, CSS, JS)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              App Development Concepts
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              AI Tools & Automation
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              Debugging & Problem Solving
            </li>
          </ul>
        </div>
      </div>

      {/* Learning Mindset */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
        <h3 className="text-xl font-bold mb-6 text-center">💡 Embrace the Learning Mindset</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🌱</span>
            </div>
            <h4 className="font-semibold mb-2">Growth Over Perfection</h4>
            <p className="text-sm text-indigo-100">Focus on progress, not perfection. Every mistake is a learning opportunity.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🤝</span>
            </div>
            <h4 className="font-semibold mb-2">Collaborate & Share</h4>
            <p className="text-sm text-indigo-100">Help others and ask for help. Teaching reinforces your own learning.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🔥</span>
            </div>
            <h4 className="font-semibold mb-2">Stay Consistent</h4>
            <p className="text-sm text-indigo-100">Show up every day. Consistency beats intensity in the long run.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
