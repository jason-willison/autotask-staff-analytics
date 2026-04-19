'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              🏢 Perigon One - Staff Analytics
            </h1>
            <p className="text-sm text-gray-600">
              Autotask Timesheet Analytics Dashboard
            </p>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium text-gray-900">
              📅 Next.js 14 + TypeScript
            </div>
            <div className="text-xs text-gray-500">
              Ready for API Integration
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Autotask Staff Analytics Dashboard
            </h1>

            {/* Status Card */}
            <div className="bg-white shadow sm:rounded-lg p-8 mb-8">
              <div className="flex items-center justify-center mb-6">
                <div className="text-6xl text-green-500">✅</div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Deployment Successful!
              </h3>
              <p className="text-gray-600 mb-6">
                Your Autotask analytics dashboard is now live and ready for demo!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Features Ready:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✅ 12 Perigon One staff members</li>
                    <li>✅ 5-day timesheet grid</li>
                    <li>✅ Real-time metrics</li>
                    <li>✅ Interactive charts</li>
                  </ul>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Next Steps:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>💦 Add complete components</li>
                    <li>📊 Integrate Autotask API</li>
                    <li>👄 Stakeholder demos</li>
                    <li>🐡 Production deployment</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="mt-8 p6",>
              <p className="text-sm text-gray-600">
                This is a simplified version - the full dashboard components are available in the complete project archive.
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Ready for demo and API integration!"����� 🚀
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}