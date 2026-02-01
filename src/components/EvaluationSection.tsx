import { guidelines } from '../data/trainingData';

export function EvaluationSection() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Final Evaluation & Selection</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Your performance throughout the 30-day training will be evaluated based on multiple criteria. 
          Top performers will be selected for permanent positions.
        </p>
      </div>

      {/* Evaluation Criteria */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">📊 Evaluation Criteria</h3>
        <div className="space-y-4">
          {guidelines.evaluationCriteria.map((criteria, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-gray-800">{criteria.category}</h4>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full font-bold">
                  {criteria.weight}%
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-3">{criteria.description}</p>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${criteria.weight}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scoring Breakdown */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="text-2xl">🏆</span>
            What Gets You Selected
          </h3>
          <ul className="space-y-3">
            {[
              'Perfect or near-perfect attendance',
              'Completed all daily tasks and challenges',
              'High-quality project submissions',
              'Active participation in discussions',
              'Helping fellow trainees',
              'Going beyond requirements (overtime work)',
              'Clean, well-documented code',
              'Positive attitude and professionalism',
              'Demonstrated learning and improvement',
              'Strong communication skills',
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl p-6 text-white">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="text-2xl">⚠️</span>
            What Hurts Your Chances
          </h3>
          <ul className="space-y-3">
            {[
              'Frequent absences or lateness',
              'Incomplete or missing assignments',
              'Poor code quality',
              'Negative attitude or resistance',
              'Not asking questions when stuck',
              'Not helping or collaborating with others',
              'Sharing confidential information',
              'Plagiarism or dishonesty',
              'Lack of effort or improvement',
              'Poor communication or unprofessional behavior',
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Scoring Tiers */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">🎖️ Performance Tiers</h3>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="text-center p-6 bg-gradient-to-b from-yellow-400 to-yellow-500 rounded-xl text-white">
            <div className="text-4xl mb-2">🥇</div>
            <h4 className="font-bold text-lg mb-2">Exceptional</h4>
            <p className="text-sm opacity-90">90-100%</p>
            <p className="text-xs mt-2 opacity-80">Priority selection + recommendation letter</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-b from-gray-300 to-gray-400 rounded-xl text-gray-800">
            <div className="text-4xl mb-2">🥈</div>
            <h4 className="font-bold text-lg mb-2">Excellent</h4>
            <p className="text-sm opacity-90">75-89%</p>
            <p className="text-xs mt-2 opacity-80">High priority selection</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-b from-amber-600 to-amber-700 rounded-xl text-white">
            <div className="text-4xl mb-2">🥉</div>
            <h4 className="font-bold text-lg mb-2">Good</h4>
            <p className="text-sm opacity-90">60-74%</p>
            <p className="text-xs mt-2 opacity-80">Considered for selection</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-b from-gray-500 to-gray-600 rounded-xl text-white">
            <div className="text-4xl mb-2">📚</div>
            <h4 className="font-bold text-lg mb-2">Developing</h4>
            <p className="text-sm opacity-90">Below 60%</p>
            <p className="text-xs mt-2 opacity-80">May need additional training</p>
          </div>
        </div>
      </div>

      {/* Final Week Schedule */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">📅 Final Week Schedule</h3>
        <div className="space-y-4">
          {[
            { day: 'Day 26', title: 'Testing & Documentation', desc: 'Complete testing of all projects, write final documentation' },
            { day: 'Day 27', title: 'Portfolio Finalization', desc: 'Polish portfolio website, update all READMEs and GitHub profile' },
            { day: 'Day 28', title: 'Interview Preparation', desc: 'Mock interviews, technical question practice, presentation prep' },
            { day: 'Day 29', title: 'Final Project Submission', desc: 'Submit all projects, ensure everything is deployed and working' },
            { day: 'Day 30', title: 'Evaluation Day', desc: 'Final presentations, evaluations, feedback, and results announcement' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
              <div className="w-20 h-12 bg-indigo-500 text-white rounded-lg flex items-center justify-center font-bold flex-shrink-0">
                {item.day}
              </div>
              <div>
                <h4 className="font-bold text-gray-800">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Career Path */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white mb-8">
        <h3 className="text-2xl font-bold mb-6 text-center">🚀 After Selection: Your Career Path</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur rounded-xl p-6">
            <div className="text-3xl mb-3">👨‍💻</div>
            <h4 className="font-bold mb-2">Junior Developer</h4>
            <p className="text-sm text-indigo-100">Start as a junior developer, working on real projects with mentorship from senior developers.</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-6">
            <div className="text-3xl mb-3">📈</div>
            <h4 className="font-bold mb-2">Growth Opportunities</h4>
            <p className="text-sm text-indigo-100">Clear career progression path with regular reviews, skill development, and promotion opportunities.</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-6">
            <div className="text-3xl mb-3">💰</div>
            <h4 className="font-bold mb-2">Competitive Package</h4>
            <p className="text-sm text-indigo-100">Industry-standard salary, benefits, and perks to be disclosed upon selection.</p>
          </div>
        </div>
      </div>

      {/* Final Message */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-8 text-white text-center">
        <div className="text-5xl mb-4">🎯</div>
        <h3 className="text-2xl font-bold mb-4">You've Got This!</h3>
        <p className="text-lg text-green-100 max-w-2xl mx-auto mb-6">
          Remember, every line of code you write, every bug you fix, and every challenge you overcome 
          brings you one step closer to your dream career. Stay focused, work hard, and believe in yourself.
        </p>
        <p className="text-green-200 italic">
          "The only way to do great work is to love what you do." - Steve Jobs
        </p>
      </div>
    </div>
  );
}
