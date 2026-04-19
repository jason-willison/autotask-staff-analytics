'use client';

import React from 'react';
import { mockStaff, mockTimeEntries, mockDashboardMetrics, mockAlerts } from '@/data/mockData';
import { getStatusColor, getSeverityColor, formatHours, formatPercentage } from '@/lib/utils';

export default function Home() {
  // Group time entries by staff
  const staffGrouped = mockStaff.map(staff => {
    const entries = mockTimeEntries.filter(e => e.staff_id === staff.id);
    return { ...staff, entries };
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Perigon One - Staff Analytics
            </h1>
            <p className="text-sm text-gray-600">
              Autotask Timesheet Analytics Dashboard
            </p>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium text-gray-900">
              Live Dashboard
            </div>
            <div className="text-xs text-gray-500">
              Updated in real-time
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-6">
        <div className="max-w-7xl mx-auto space-y-6">

          {/* Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow p4">
              <div className="flex items-center">
                <div className="text-3xl font-bold text-blue-600">{mockDashboardMetrics.total_hours}h</div>
              </div>
              <p className="text-sm text-gray-600 mt-1">Total Hours</p>
            </div>
            <div className="bg-white rounded-lg shadow p4">
              <div className="flex items-center">
                <div className="text-3xl font-bold text-green-600">{formatPercentage(mockDashboardMetrics.billable_ratio)}</div>
              </div>
              <p className="text-sm text-gray-600 mt-1">Billability</p>
            </div>
            <div className="bg-white rounded-lg shadow p4">
              <div className="flex items-center">
                <div className="text-3xl font-bold text-purple-600">{formatPercentage(mockDashboardMetrics.compliance_rate)}</div>
              </div>
              <p className="text-sm text-gray-600 mt-1">Compliance</p>
            </div>
            <div className="bg-white rounded-lg shadow p4">
              <div className="flex items-center">
                <div className="text-3xl font-bold text-red-600">{mockDashboardMetrics.missing_count}</div>
              </div>
              <p className="text-sm text-gray-600 mt-1">Missing Entries</p>
            </div>
          </div>

          {/* Alerts */}
          {mockAlerts.length > 0 && (
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Active Alerts</h2>
              <div className="space-y-3">
                {mockAlerts.map(alert => (
                  <div key={alert.id} className={`flex items-start p-3 rounded border ${getSeverityColor(alert.severity)}`}>
                    <div className="flex-shrink-0">
                      <div className="{alert.severity === 'critical' ? 'text-red-500' : alert.severity === 'high' ? 'text-orange-500' : alert.severity === 'medium' ? 'text-yellow-500' : 'text-blue-500'}">[!{alert.severity.toUpperCase()}]</div>
                    </div>
                    <div className="ml-3 flex-1">
                      <p className="text-sm font-medium">{alert.name}</p>
                      <p className="text-sm text-gray-600">{alert.message}</p>
                    </div>
                  </div>
                )))}
              </div>
            </div>
          )}

          {/* Staff Grid */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="px-6 py-4">
              <h2 className="text-xl font-semibold text-gray-900">Staff Timesheet Grid</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y-divide-y-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Staff Member
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Monday
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tuesday
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Wednesday
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Thursday
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Friday
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y-divide-y-gray-200">
                  {staffGrouped.map(staff => (
                    <tr key={staff.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{staff.name}</div>
                        <div className="text-xs text-gray-500">{staff.role}</div>
                      </td>
                      {[0, 1, 2, 3, 4].map(dayIndex => {
                        const entry = staff.entries[dayIndex];
                        return (
                          <td key={dayIndex} className="px-6 py-4 whitespace-nowrap">
                            {entry && (
                              <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(entry.status)}`}>
                                {formatHours(entry.total_hours) || 'Missing'}
                              </div>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}