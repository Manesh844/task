import { useState } from 'react';
import { trainingDays, DayContent } from '../data/trainingData';

const weekRanges = [
  { label: 'Week 1', start: 1, end: 7, color: 'blue' },
  { label: 'Week 2', start: 8, end: 14, color: 'green' },
  { label: 'Week 3', start: 15, end: 21, color: 'orange' },
  { label: 'Week 4', start: 22, end: 30, color: 'purple' },
];

export function TrainingSection() {
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [showSolution, setShowSolution] = useState(false);

  const currentDay = trainingDays.find((d) => d.day === selectedDay);

  const getWeekColor = (day: number) => {
    if (day <= 7) return 'blue';
    if (day <= 14) return 'green';
    if (day <= 21) return 'orange';
    return 'purple';
  };

  const colorClasses: Record<string, { bg: string; text: string; light: string; border: string }> = {
    blue: { bg: 'bg-blue-500', text: 'text-blue-600', light: 'bg-blue-100', border: 'border-blue-500' },
    green: { bg: 'bg-green-500', text: 'text-green-600', light: 'bg-green-100', border: 'border-green-500' },
    orange: { bg: 'bg-orange-500', text: 'text-orange-600', light: 'bg-orange-100', border: 'border-orange-500' },
    purple: { bg: 'bg-purple-500', text: 'text-purple-600', light: 'bg-purple-100', border: 'border-purple-500' },
  };

  const currentColor = colorClasses[getWeekColor(selectedDay)];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">30-Day Training Content</h2>
        <p className="text-gray-600">Select a day to view detailed learning content, tasks, and challenges.</p>
      </div>

      {/* Week Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 justify-center">
        {weekRanges.map((week) => (
          <button
            key={week.label}
            onClick={() => setSelectedDay(week.start)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              selectedDay >= week.start && selectedDay <= week.end
                ? `${colorClasses[week.color].bg} text-white`
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {week.label}
          </button>
        ))}
      </div>

      {/* Day Selector */}
      <div className="bg-white rounded-2xl shadow-lg p-4 mb-8">
        <div className="grid grid-cols-6 sm:grid-cols-10 md:grid-cols-15 gap-2" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(40px, 1fr))' }}>
          {trainingDays.map((day) => {
            const dayColor = colorClasses[getWeekColor(day.day)];
            return (
              <button
                key={day.day}
                onClick={() => {
                  setSelectedDay(day.day);
                  setShowSolution(false);
                }}
                className={`w-full aspect-square rounded-lg font-medium text-sm transition-all ${
                  selectedDay === day.day
                    ? `${dayColor.bg} text-white scale-110 shadow-lg`
                    : `${dayColor.light} ${dayColor.text} hover:scale-105`
                }`}
              >
                {day.day}
              </button>
            );
          })}
        </div>
      </div>

      {/* Day Content */}
      {currentDay && (
        <DayContentCard
          day={currentDay}
          color={currentColor}
          showSolution={showSolution}
          setShowSolution={setShowSolution}
          onNext={() => {
            if (selectedDay < 30) {
              setSelectedDay(selectedDay + 1);
              setShowSolution(false);
            }
          }}
          onPrev={() => {
            if (selectedDay > 1) {
              setSelectedDay(selectedDay - 1);
              setShowSolution(false);
            }
          }}
        />
      )}
    </div>
  );
}

interface DayContentCardProps {
  day: DayContent;
  color: { bg: string; text: string; light: string; border: string };
  showSolution: boolean;
  setShowSolution: (show: boolean) => void;
  onNext: () => void;
  onPrev: () => void;
}

function DayContentCard({ day, color, showSolution, setShowSolution, onNext, onPrev }: DayContentCardProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className={`${color.bg} rounded-2xl p-6 text-white`}>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <div className="text-sm opacity-80">Day {day.day} of 30</div>
            <h3 className="text-2xl font-bold">{day.title}</h3>
          </div>
          <div className="flex gap-2">
            <button
              onClick={onPrev}
              disabled={day.day === 1}
              className="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              ← Previous
            </button>
            <button
              onClick={onNext}
              disabled={day.day === 30}
              className="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              Next →
            </button>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Learning Objectives */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h4 className={`font-bold ${color.text} text-lg mb-4 flex items-center gap-2`}>
            <span className={`w-8 h-8 ${color.light} rounded-lg flex items-center justify-center`}>
              🎯
            </span>
            Learning Objectives
          </h4>
          <ul className="space-y-3">
            {day.objectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className={`w-6 h-6 ${color.light} ${color.text} rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold`}>
                  {i + 1}
                </span>
                <span className="text-gray-600">{obj}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Productivity Tips */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h4 className={`font-bold ${color.text} text-lg mb-4 flex items-center gap-2`}>
            <span className={`w-8 h-8 ${color.light} rounded-lg flex items-center justify-center`}>
              💡
            </span>
            Tips for Today
          </h4>
          <ul className="space-y-3">
            {day.tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg className={`w-5 h-5 ${color.text} flex-shrink-0 mt-0.5`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Concepts */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h4 className={`font-bold ${color.text} text-lg mb-6 flex items-center gap-2`}>
          <span className={`w-8 h-8 ${color.light} rounded-lg flex items-center justify-center`}>
            📚
          </span>
          Concepts Explained
        </h4>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {day.concepts.map((concept, i) => (
            <div key={i} className={`${color.light} rounded-xl p-4`}>
              <h5 className={`font-bold ${color.text} mb-2`}>{concept.title}</h5>
              <p className="text-gray-600 text-sm">{concept.explanation}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Practice Tasks */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h4 className={`font-bold ${color.text} text-lg mb-4 flex items-center gap-2`}>
          <span className={`w-8 h-8 ${color.light} rounded-lg flex items-center justify-center`}>
            ✅
          </span>
          Practice Tasks
        </h4>
        <div className="grid md:grid-cols-2 gap-3">
          {day.practiceTasks.map((task, i) => (
            <label key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
              <input type="checkbox" className="w-5 h-5 rounded mt-0.5 text-indigo-600" />
              <span className="text-gray-600">{task}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Debugging Task */}
      <div className={`bg-white rounded-2xl shadow-lg p-6 border-l-4 ${color.border}`}>
        <h4 className={`font-bold ${color.text} text-lg mb-4 flex items-center gap-2`}>
          <span className={`w-8 h-8 ${color.light} rounded-lg flex items-center justify-center`}>
            🐛
          </span>
          Debugging Challenge
        </h4>
        <div className="bg-gray-900 rounded-xl p-4 mb-4 overflow-x-auto">
          <pre className="text-green-400 text-sm font-mono whitespace-pre-wrap">{day.debuggingTask.code}</pre>
        </div>
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg mb-4">
          <p className="text-amber-800 font-medium">💡 Hint: {day.debuggingTask.hint}</p>
        </div>
        <button
          onClick={() => setShowSolution(!showSolution)}
          className={`px-4 py-2 ${color.bg} text-white rounded-lg hover:opacity-90 transition-opacity`}
        >
          {showSolution ? 'Hide Solution' : 'Show Solution'}
        </button>
        {showSolution && (
          <div className="mt-4 bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
            <p className="text-green-800"><strong>Solution:</strong> {day.debuggingTask.solution}</p>
          </div>
        )}
      </div>

      {/* AI Task */}
      <div className="bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl p-6 text-white">
        <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
          <span className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
            🤖
          </span>
          AI Task
        </h4>
        <p className="text-purple-100">{day.aiTask}</p>
      </div>

      {/* Daily Challenge */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-6 text-white">
        <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
          <span className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
            ⭐
          </span>
          Daily Challenge
        </h4>
        <p className="text-amber-100">{day.dailyChallenge}</p>
      </div>
    </div>
  );
}
