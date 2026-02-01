import { useState, useEffect, useRef } from 'react';
import { generateTask, GeneratedTask } from './data/taskGenerator';

function App() {
  const [currentScreen, setCurrentScreen] = useState<'welcome' | 'training'>('welcome');
  const [currentTask, setCurrentTask] = useState<GeneratedTask | null>(null);
  const [completedTasks, setCompletedTasks] = useState(0);
  const [skippedTasks, setSkippedTasks] = useState(0);
  const [streak, setStreak] = useState(0);
  const [sessionTime, setSessionTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activityLog, setActivityLog] = useState<Array<{time: string, action: string, taskId: string}>>([]);
  
  // Submission state
  const [submissionText, setSubmissionText] = useState('');
  const [submissionFiles, setSubmissionFiles] = useState<File[]>([]);
  const [showSubmissionSuccess, setShowSubmissionSuccess] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const documentId = `TRN-2025-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

  // Timer effects
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      if (currentScreen === 'training') {
        setSessionTime(prev => prev + 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [currentScreen]);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getWorkStatus = () => {
    const hour = currentTime.getHours();
    if (hour >= 9 && hour < 17) return { status: 'Work Hours', color: 'text-green-400' };
    if (hour >= 17 && hour < 22) return { status: 'Overtime', color: 'text-yellow-400' };
    return { status: 'Off Hours', color: 'text-red-400' };
  };

  const startTraining = () => {
    setCurrentScreen('training');
    loadNewTask();
  };

  const loadNewTask = () => {
    const newTask = generateTask();
    setCurrentTask(newTask);
    setSubmissionText('');
    setSubmissionFiles([]);
    setShowSubmissionSuccess(false);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setSubmissionFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setSubmissionFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmitAndComplete = () => {
    if (currentTask) {
      setActivityLog(prev => [{
        time: currentTime.toLocaleTimeString(),
        action: 'COMPLETED',
        taskId: currentTask.id
      }, ...prev.slice(0, 19)]);
      
      setCompletedTasks(prev => prev + 1);
      setStreak(prev => prev + 1);
      setShowSubmissionSuccess(true);
      
      setTimeout(() => {
        loadNewTask();
      }, 2000);
    }
  };

  const handleSkip = () => {
    if (currentTask) {
      setActivityLog(prev => [{
        time: currentTime.toLocaleTimeString(),
        action: 'SKIPPED',
        taskId: currentTask.id
      }, ...prev.slice(0, 19)]);
      
      setSkippedTasks(prev => prev + 1);
      setStreak(0);
      loadNewTask();
    }
  };

  // Welcome Screen
  if (currentScreen === 'welcome') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        {/* Header */}
        <header className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-700 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">C</span>
                </div>
                <div>
                  <div className="text-white font-semibold">CONFIDENTIAL</div>
                  <div className="text-slate-400 text-sm">Corporate Training Division</div>
                </div>
              </div>
              <div className="text-right text-sm text-slate-400">
                <div>Document: {documentId}</div>
                <div>{currentTime.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-8">
          {/* Official Document */}
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden relative">
            {/* Watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
              <div className="text-[200px] font-bold text-slate-900 rotate-[-30deg]">CONFIDENTIAL</div>
            </div>

            {/* Letterhead */}
            <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 px-8 py-6 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full mx-auto flex items-center justify-center mb-4 shadow-xl border-4 border-amber-300/30">
                  <span className="text-white font-bold text-3xl">C</span>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wider">OFFICIAL TRAINING INVITATION</h1>
                <p className="text-amber-400 mt-2 text-sm tracking-widest">CORPORATE DEVELOPMENT PROGRAM</p>
              </div>
            </div>

            {/* Document Content */}
            <div className="px-8 py-8 relative z-10">
              {/* Date Line */}
              <div className="text-right text-slate-500 mb-8 text-sm">
                Issue Date: 4th February 2025
              </div>

              {/* Congratulations Banner */}
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-l-4 border-emerald-500 rounded-r-lg p-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🎉</div>
                  <div>
                    <h2 className="text-xl font-bold text-emerald-800 mb-2">CONGRATULATIONS!</h2>
                    <p className="text-emerald-700 leading-relaxed">
                      You have been selected to participate in our <strong>Official Corporate Training Program</strong>. 
                      This invitation represents our confidence in your potential and marks the beginning of your 
                      professional development journey with our organization.
                    </p>
                  </div>
                </div>
              </div>

              {/* Critical Notices */}
              <div className="space-y-4 mb-8">
                <div className="bg-red-50 border border-red-200 rounded-lg p-5">
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 text-xl">⚠️</span>
                    <div>
                      <h3 className="font-bold text-red-800 text-lg">SELECTION IS NOT GUARANTEED</h3>
                      <p className="text-red-700 mt-1">
                        Completing this training program <strong>does NOT automatically guarantee employment</strong>. 
                        Your final selection will be determined after evaluation of your performance, discipline, 
                        consistency, and demonstrated skills during the training period.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
                  <div className="flex items-start gap-3">
                    <span className="text-amber-500 text-xl">🔒</span>
                    <div>
                      <h3 className="font-bold text-amber-800 text-lg">COMPANY NAME IS CONFIDENTIAL</h3>
                      <p className="text-amber-700 mt-1">
                        The identity of this organization will <strong>remain confidential</strong> throughout your training. 
                        Company details, including name, location, and client information, will only be disclosed 
                        to candidates who are officially selected for permanent positions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-500 text-xl">💼</span>
                    <div>
                      <h3 className="font-bold text-blue-800 text-lg">COMPENSATION DETAILS</h3>
                      <p className="text-blue-700 mt-1">
                        Salary structure, benefits package, and employment terms will be disclosed 
                        <strong> only to candidates who successfully complete training and are selected</strong> for 
                        permanent roles. Compensation is competitive and based on industry standards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Training Overview */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-slate-800 text-white rounded-full flex items-center justify-center text-sm">📋</span>
                  Training Program Overview
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <div className="text-sm text-slate-500 mb-1">Duration</div>
                    <div className="font-semibold text-slate-800">30 Days Intensive</div>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <div className="text-sm text-slate-500 mb-1">Working Hours</div>
                    <div className="font-semibold text-slate-800">9:00 AM – 5:00 PM</div>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <div className="text-sm text-slate-500 mb-1">Overtime (Optional)</div>
                    <div className="font-semibold text-slate-800">10-15 Hours/Week</div>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <div className="text-sm text-slate-500 mb-1">Task System</div>
                    <div className="font-semibold text-slate-800">Unlimited Assignments</div>
                  </div>
                </div>
              </div>

              {/* What We Expect */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-slate-800 text-white rounded-full flex items-center justify-center text-sm">✓</span>
                  What We Expect From You
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    'Discipline & Punctuality',
                    'Consistent Daily Progress',
                    'Professional Work Ethic',
                    'Honest Self-Assessment',
                    'Willingness to Learn',
                    'Problem-Solving Attitude'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-slate-50 rounded-lg p-3 border border-slate-200">
                      <span className="text-emerald-500">✓</span>
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Task Philosophy */}
              <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg p-6 mb-8 text-white">
                <h3 className="text-lg font-bold mb-3 text-amber-400">📌 How Tasks Work</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  You will receive <strong className="text-white">unlimited real-world tasks</strong> that simulate actual 
                  professional development work. Each task is designed to test your logical thinking 
                  and problem-solving abilities. Tasks are easy to understand but require thoughtful execution.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div className="bg-slate-900/50 rounded-lg p-4">
                    <div className="text-2xl mb-2">📝</div>
                    <div className="text-sm text-slate-300">Complete tasks at your pace</div>
                  </div>
                  <div className="bg-slate-900/50 rounded-lg p-4">
                    <div className="text-2xl mb-2">📤</div>
                    <div className="text-sm text-slate-300">Submit your solutions</div>
                  </div>
                  <div className="bg-slate-900/50 rounded-lg p-4">
                    <div className="text-2xl mb-2">⏭️</div>
                    <div className="text-sm text-slate-300">Skip if needed</div>
                  </div>
                </div>
              </div>

              {/* Signature Section */}
              <div className="border-t border-slate-200 pt-8 mt-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                  <div>
                    <div className="text-slate-500 text-sm mb-2">Authorized By:</div>
                    <div className="font-serif text-2xl text-slate-700 italic">Training Director</div>
                    <div className="text-slate-500 text-sm mt-1">Corporate Development Division</div>
                  </div>
                  <div className="text-center">
                    <div className="w-24 h-24 border-4 border-amber-500 rounded-full flex items-center justify-center mx-auto">
                      <div className="text-center">
                        <div className="text-amber-600 font-bold text-xs">OFFICIAL</div>
                        <div className="text-amber-700 font-bold text-lg">SEAL</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Start Button */}
              <div className="mt-10 text-center">
                <button
                  onClick={startTraining}
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-12 py-5 rounded-xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  📋 START TRAINING PROGRAM
                </button>
                <p className="text-slate-500 text-sm mt-4">
                  By clicking start, you acknowledge the terms outlined above
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Training Screen with Task System
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900/90 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">C</span>
              </div>
              <div>
                <div className="text-white font-semibold text-sm">CONFIDENTIAL</div>
                <div className="text-slate-400 text-xs">Training Active</div>
              </div>
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <div className="hidden md:block text-center">
                <div className="text-slate-400 text-xs">Current Time</div>
                <div className="text-white font-mono">{currentTime.toLocaleTimeString()}</div>
              </div>
              <div className="hidden md:block text-center">
                <div className="text-slate-400 text-xs">Status</div>
                <div className={`font-semibold ${getWorkStatus().color}`}>{getWorkStatus().status}</div>
              </div>
              <div className="text-center">
                <div className="text-slate-400 text-xs">Session</div>
                <div className="text-white font-mono">{formatTime(sessionTime)}</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar - Stats */}
          <div className="lg:col-span-1 space-y-4">
            {/* Stats Cards */}
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span>📊</span> Your Progress
              </h3>
              <div className="space-y-3">
                <div className="bg-slate-700/50 rounded-lg p-3">
                  <div className="text-slate-400 text-xs">Completed</div>
                  <div className="text-2xl font-bold text-emerald-400">{completedTasks}</div>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-3">
                  <div className="text-slate-400 text-xs">Skipped</div>
                  <div className="text-2xl font-bold text-amber-400">{skippedTasks}</div>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-3">
                  <div className="text-slate-400 text-xs">Current Streak</div>
                  <div className="text-2xl font-bold text-blue-400">{streak} 🔥</div>
                </div>
              </div>
            </div>

            {/* Activity Log */}
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span>📜</span> Activity Log
              </h3>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {activityLog.length === 0 ? (
                  <div className="text-slate-500 text-sm text-center py-4">No activity yet</div>
                ) : (
                  activityLog.map((log, index) => (
                    <div key={index} className="flex items-center gap-2 text-xs bg-slate-700/30 rounded p-2">
                      <span className="text-slate-500">{log.time}</span>
                      <span className={log.action === 'COMPLETED' ? 'text-emerald-400' : 'text-amber-400'}>
                        {log.action}
                      </span>
                      <span className="text-slate-400 truncate">{log.taskId}</span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Main Task Area */}
          <div className="lg:col-span-3">
            {currentTask && (
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                {/* Task Header */}
                <div className="bg-gradient-to-r from-slate-800 to-slate-700 px-6 py-4">
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="bg-amber-500 text-slate-900 px-3 py-1 rounded-full text-xs font-bold">
                          {currentTask.id}
                        </span>
                        <span className="bg-slate-600 text-slate-200 px-3 py-1 rounded-full text-xs">
                          {currentTask.category}
                        </span>
                      </div>
                      <h2 className="text-white font-bold text-lg md:text-xl">{currentTask.title}</h2>
                    </div>
                    <div className="text-right">
                      <div className="text-slate-400 text-xs">Estimated Time</div>
                      <div className="text-white font-semibold">{currentTask.timeEstimate}</div>
                    </div>
                  </div>
                </div>

                {/* Task Content */}
                <div className="p-6">
                  {/* Scenario */}
                  <div className="mb-6">
                    <h3 className="text-slate-800 font-bold mb-2 flex items-center gap-2">
                      <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm">📋</span>
                      Scenario
                    </h3>
                    <p className="text-slate-600 bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                      {currentTask.scenario}
                    </p>
                  </div>

                  {/* Task Description */}
                  <div className="mb-6">
                    <h3 className="text-slate-800 font-bold mb-2 flex items-center gap-2">
                      <span className="w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-sm">📝</span>
                      Your Task
                    </h3>
                    <p className="text-slate-700 bg-emerald-50 rounded-lg p-4 border-l-4 border-emerald-500 leading-relaxed">
                      {currentTask.description}
                    </p>
                  </div>

                  {/* Constraints */}
                  <div className="mb-6">
                    <h3 className="text-slate-800 font-bold mb-2 flex items-center gap-2">
                      <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm">⚠️</span>
                      Constraints
                    </h3>
                    <ul className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400 space-y-2">
                      {currentTask.constraints.map((constraint, index) => (
                        <li key={index} className="flex items-start gap-2 text-slate-700">
                          <span className="text-red-500 mt-1">•</span>
                          <span>{constraint}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables */}
                  <div className="mb-8">
                    <h3 className="text-slate-800 font-bold mb-2 flex items-center gap-2">
                      <span className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm">📦</span>
                      Deliverables
                    </h3>
                    <ul className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-400 space-y-2">
                      {currentTask.deliverables.map((deliverable, index) => (
                        <li key={index} className="flex items-start gap-2 text-slate-700">
                          <span className="text-purple-500 font-bold">{index + 1}.</span>
                          <span>{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Submission Section */}
                  <div className="border-t border-slate-200 pt-6">
                    <h3 className="text-slate-800 font-bold mb-4 flex items-center gap-2">
                      <span className="w-6 h-6 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center text-sm">📤</span>
                      Submit Your Work
                    </h3>

                    {showSubmissionSuccess ? (
                      <div className="bg-emerald-50 border-2 border-emerald-300 rounded-xl p-8 text-center">
                        <div className="text-6xl mb-4">✅</div>
                        <h4 className="text-2xl font-bold text-emerald-700 mb-2">Submission Received!</h4>
                        <p className="text-emerald-600">Loading next task...</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {/* Text/Code Input */}
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Your Solution (Code, Diagrams, or Written Response)
                          </label>
                          <textarea
                            value={submissionText}
                            onChange={(e) => setSubmissionText(e.target.value)}
                            placeholder="Write your solution here... You can paste code, describe your diagram structure, list your decisions, or explain your approach."
                            className="w-full h-48 px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all font-mono text-sm resize-none"
                          />
                        </div>

                        {/* File Upload */}
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Attach Files (Screenshots, Documents, Code Files)
                          </label>
                          <div 
                            onClick={() => fileInputRef.current?.click()}
                            className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all"
                          >
                            <input
                              ref={fileInputRef}
                              type="file"
                              multiple
                              onChange={handleFileSelect}
                              className="hidden"
                              accept=".png,.jpg,.jpeg,.gif,.pdf,.txt,.js,.ts,.html,.css,.json,.md"
                            />
                            <div className="text-4xl mb-2">📁</div>
                            <p className="text-slate-600 font-medium">Click to upload files</p>
                            <p className="text-slate-400 text-sm mt-1">PNG, JPG, PDF, TXT, JS, TS, HTML, CSS, JSON, MD</p>
                          </div>

                          {/* Uploaded Files List */}
                          {submissionFiles.length > 0 && (
                            <div className="mt-4 space-y-2">
                              {submissionFiles.map((file, index) => (
                                <div key={index} className="flex items-center justify-between bg-slate-100 rounded-lg px-4 py-2">
                                  <div className="flex items-center gap-3">
                                    <span className="text-xl">📄</span>
                                    <div>
                                      <div className="font-medium text-slate-700 text-sm">{file.name}</div>
                                      <div className="text-slate-400 text-xs">{(file.size / 1024).toFixed(1)} KB</div>
                                    </div>
                                  </div>
                                  <button
                                    onClick={() => removeFile(index)}
                                    className="text-red-500 hover:text-red-700 p-1"
                                  >
                                    ✕
                                  </button>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                          <button
                            onClick={handleSubmitAndComplete}
                            disabled={!submissionText.trim() && submissionFiles.length === 0}
                            className={`flex-1 py-4 px-6 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 ${
                              submissionText.trim() || submissionFiles.length > 0
                                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02]'
                                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                            }`}
                          >
                            <span>✅</span>
                            <span>I HAVE COMPLETED</span>
                          </button>
                          
                          <button
                            onClick={handleSkip}
                            className="flex-1 py-4 px-6 rounded-xl font-bold text-lg bg-slate-200 hover:bg-slate-300 text-slate-700 transition-all flex items-center justify-center gap-2"
                          >
                            <span>⏭️</span>
                            <span>SKIP</span>
                          </button>
                        </div>

                        <p className="text-center text-slate-500 text-sm mt-2">
                          Submit your solution to complete, or skip to get a new task
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
