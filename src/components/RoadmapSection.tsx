import { weekOverviews } from '../data/trainingData';

const weekColors = [
  { bg: 'bg-blue-500', light: 'bg-blue-100', text: 'text-blue-600' },
  { bg: 'bg-green-500', light: 'bg-green-100', text: 'text-green-600' },
  { bg: 'bg-orange-500', light: 'bg-orange-100', text: 'text-orange-600' },
  { bg: 'bg-purple-500', light: 'bg-purple-100', text: 'text-purple-600' },
];

export function RoadmapSection() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">30-Day Training Roadmap</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Your journey from beginner to job-ready developer, structured week by week. Each phase builds upon the previous one, ensuring you develop both skills and confidence.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Connecting Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-green-500 via-orange-500 to-purple-500 transform md:-translate-x-1/2 hidden md:block"></div>

        {weekOverviews.map((week, index) => (
          <div
            key={week.week}
            className={`relative mb-12 md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
          >
            {/* Week Number Circle */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10">
              <div className={`w-16 h-16 ${weekColors[index].bg} rounded-full flex items-center justify-center shadow-lg`}>
                <div className="text-white text-center">
                  <div className="text-xs font-medium">Week</div>
                  <div className="text-xl font-bold">{week.week}</div>
                </div>
              </div>
            </div>

            {/* Content Card */}
            <div className={`ml-24 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
              <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className={`inline-block px-3 py-1 ${weekColors[index].light} ${weekColors[index].text} rounded-full text-sm font-medium mb-3`}>
                  Days {(week.week - 1) * 7 + 1} - {week.week * 7 > 30 ? 30 : week.week * 7}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{week.title}</h3>
                <p className={`${weekColors[index].text} font-medium mb-4`}>{week.theme}</p>
                <ul className="space-y-2">
                  {week.focus.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600">
                      <svg className={`w-5 h-5 ${weekColors[index].text} flex-shrink-0 mt-0.5`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white text-center">
          <div className="text-4xl font-bold mb-2">30</div>
          <div className="text-blue-100">Days</div>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white text-center">
          <div className="text-4xl font-bold mb-2">240</div>
          <div className="text-green-100">Hours</div>
        </div>
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white text-center">
          <div className="text-4xl font-bold mb-2">4+</div>
          <div className="text-orange-100">Projects</div>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white text-center">
          <div className="text-4xl font-bold mb-2">∞</div>
          <div className="text-purple-100">Potential</div>
        </div>
      </div>

      {/* Daily Structure */}
      <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Daily Training Structure</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">☀️</span>
            </div>
            <h4 className="font-bold text-gray-800 mb-2">9:00 - 12:00</h4>
            <p className="text-gray-600 text-sm">Morning Learning<br />Concepts & Tutorials</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🍽️</span>
            </div>
            <h4 className="font-bold text-gray-800 mb-2">12:00 - 1:00</h4>
            <p className="text-gray-600 text-sm">Lunch Break<br />Rest & Recharge</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">💻</span>
            </div>
            <h4 className="font-bold text-gray-800 mb-2">1:00 - 3:30</h4>
            <p className="text-gray-600 text-sm">Hands-On Practice<br />Coding & Exercises</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🎯</span>
            </div>
            <h4 className="font-bold text-gray-800 mb-2">3:30 - 5:00</h4>
            <p className="text-gray-600 text-sm">Daily Challenge<br />Review & Commit</p>
          </div>
        </div>
      </div>
    </div>
  );
}
