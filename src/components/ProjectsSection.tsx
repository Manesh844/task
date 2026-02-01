import { miniProjects } from '../data/trainingData';

export function ProjectsSection() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Mini Projects</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Put your skills to the test with these real-world projects. Each project is designed to 
          reinforce what you've learned and build your portfolio.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {miniProjects.map((project, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className={`p-6 ${
              index === 0 ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
              index === 1 ? 'bg-gradient-to-r from-green-500 to-green-600' :
              index === 2 ? 'bg-gradient-to-r from-orange-500 to-orange-600' :
              'bg-gradient-to-r from-purple-500 to-purple-600'
            } text-white`}>
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                  {project.difficulty}
                </span>
                <span className="text-sm opacity-80">⏱ {project.duration}</span>
              </div>
              <h3 className="text-xl font-bold">{project.title}</h3>
            </div>
            
            <div className="p-6">
              <p className="text-gray-600 mb-6">{project.description}</p>
              
              <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Requirements
              </h4>
              <ul className="space-y-2 mb-6">
                {project.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                    {req}
                  </li>
                ))}
              </ul>
              
              <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Submission Guidelines */}
      <div className="mt-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-6 text-center">📋 Project Submission Guidelines</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/10 rounded-xl p-4">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3">
              <span className="text-xl">1</span>
            </div>
            <h4 className="font-bold mb-2">Create Repository</h4>
            <p className="text-sm text-indigo-100">Create a GitHub repo for each project with clear naming</p>
          </div>
          <div className="bg-white/10 rounded-xl p-4">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3">
              <span className="text-xl">2</span>
            </div>
            <h4 className="font-bold mb-2">Write README</h4>
            <p className="text-sm text-indigo-100">Include description, features, technologies, and setup instructions</p>
          </div>
          <div className="bg-white/10 rounded-xl p-4">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3">
              <span className="text-xl">3</span>
            </div>
            <h4 className="font-bold mb-2">Deploy Live</h4>
            <p className="text-sm text-indigo-100">Deploy to GitHub Pages or similar and include the live URL</p>
          </div>
          <div className="bg-white/10 rounded-xl p-4">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3">
              <span className="text-xl">4</span>
            </div>
            <h4 className="font-bold mb-2">Submit Links</h4>
            <p className="text-sm text-indigo-100">Submit both GitHub repo and live demo links for evaluation</p>
          </div>
        </div>
      </div>

      {/* Bonus Project Ideas */}
      <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">🌟 Bonus Project Ideas</h3>
        <p className="text-gray-600 text-center mb-8">
          Want to go above and beyond? Here are additional project ideas to showcase your skills:
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { title: 'Calculator App', description: 'Build a fully functional calculator with keyboard support' },
            { title: 'Memory Game', description: 'Create a card-matching memory game with score tracking' },
            { title: 'Expense Tracker', description: 'Track income and expenses with visual charts' },
            { title: 'Recipe Book', description: 'Save and organize recipes with search and categories' },
            { title: 'Countdown Timer', description: 'Multiple timers with notifications and presets' },
            { title: 'Note Taking App', description: 'Markdown-enabled notes with categories and search' },
          ].map((idea, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors">
              <h4 className="font-bold text-gray-800 mb-2">{idea.title}</h4>
              <p className="text-gray-600 text-sm">{idea.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
