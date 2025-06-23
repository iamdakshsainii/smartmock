
export default function ResourcesLayout({ children }) {
    return (
      <div className="min-h-screen bg-gray-50 text-gray-900 p-6">
        <div className="max-w-5xl mx-auto">
          {/* Optional: Section header */}
          <header className="mb-8">
            <h1 className="text-3xl font-bold">📚 Quick Revision</h1>
            <p className="text-gray-600 mt-2">Brush up your concepts before the interview</p>
          </header>

          {/* Page Content */}
          {children}
        </div>
      </div>
    );
  }
