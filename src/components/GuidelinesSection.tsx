import { guidelines, productivityTips } from '../data/trainingData';

export function GuidelinesSection() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Training Guidelines</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Follow these guidelines to make the most of your training experience and maximize your chances of selection.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Rules */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <span className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              📋
            </span>
            Rules & Discipline
          </h3>
          <ul className="space-y-4">
            {guidelines.rules.map((rule, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  {i + 1}
                </span>
                <span className="text-gray-600">{rule}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Expectations */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <span className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              ⭐
            </span>
            Expectations
          </h3>
          <ul className="space-y-4">
            {guidelines.expectations.map((exp, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600">{exp}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Productivity Tips */}
      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 text-white mb-12">
        <h3 className="text-2xl font-bold mb-8 text-center">💡 Productivity Tips for Success</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {productivityTips.map((tip, i) => (
            <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-4">
              <h4 className="font-bold mb-2">{tip.title}</h4>
              <p className="text-indigo-100 text-sm">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Best Practices */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-gray-800 mb-3">Clean Code Habits</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>• Use meaningful variable names</li>
            <li>• Keep functions small and focused</li>
            <li>• Comment complex logic only</li>
            <li>• Format code consistently</li>
            <li>• Remove unused code</li>
            <li>• Follow naming conventions</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-gray-800 mb-3">GitHub Best Practices</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>• Commit frequently</li>
            <li>• Write clear commit messages</li>
            <li>• Create descriptive READMEs</li>
            <li>• Use .gitignore properly</li>
            <li>• Never commit secrets</li>
            <li>• Keep repositories organized</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-gray-800 mb-3">Time Management</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>• Arrive 10 minutes early</li>
            <li>• Plan your day ahead</li>
            <li>• Take regular breaks</li>
            <li>• Avoid distractions</li>
            <li>• Set daily goals</li>
            <li>• Review before leaving</li>
          </ul>
        </div>
      </div>

      {/* Daily Stand-Up */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">🗣️ Daily Stand-Up Format</h3>
        <p className="text-gray-600 text-center mb-8">
          Every morning, you'll participate in a quick 10-minute stand-up meeting. Be prepared to answer:
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-blue-50 rounded-xl">
            <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              1
            </div>
            <h4 className="font-bold text-blue-800 mb-2">Yesterday</h4>
            <p className="text-blue-600 text-sm">What did you complete yesterday?</p>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-xl">
            <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              2
            </div>
            <h4 className="font-bold text-green-800 mb-2">Today</h4>
            <p className="text-green-600 text-sm">What will you work on today?</p>
          </div>
          <div className="text-center p-6 bg-red-50 rounded-xl">
            <div className="w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              3
            </div>
            <h4 className="font-bold text-red-800 mb-2">Blockers</h4>
            <p className="text-red-600 text-sm">Any obstacles or questions?</p>
          </div>
        </div>
      </div>
    </div>
  );
}
