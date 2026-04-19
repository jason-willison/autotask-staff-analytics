import { clsx, type ClassValue } from 'clsx';

// Utility function for combining Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return clsx(...inputs);
}

// Date utilities for mock data generation
export function formatDate(date: string | Date) {\n  const d = typeof date === 'string' ? new Date(date) : date;\n  return d.toISOString().split('T')[0];
}

export function generateMockDate(daysAgo: number) {\n  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return formatDate(date);
}

// Helper function for status colors
export function getStatusColor(status: 'complete' | 'partial' | 'missing') {
  switch (status) {
    case 'complete':
      return 'bg-green-50 text-green-700 border-green-200';
    case 'partial':
      return 'bg-yellow-50 text-yellow-700 border-yellow-200';
    case 'missing':
      return 'bg-red-50 text-red-700 border-red-200';
    default:
      return 'bg-gray-50 text-gray-700 border-gray-200';
  }
}

// Severity color mapping
export function getSeverityColor(severity: 'low' | 'medium' | 'high' | 'critical') {
  switch (severity) {
    case 'low':
      return 'bg-blue-50 text-blue-700 border-blue-200';
    case 'medium':
      return 'bg-yellow-50 text-yellow-700 border-yellow-200';
    case 'high':
      return 'bg-orange-50 text-orange-700 border-orange-200';
    case 'critical':
      return 'bg-red-50 text-red-700 border-red-200';
    default:
      return 'bg-gray-50 text-gray-700 border-gray-200';
  }
}

// Format hours for display
export function formatHours(hours: number) {
  return hours === 0 ? '-' : `${hours.toFixed(1)}h`;
}

// Format percentage
export function formatPercentage(percentage: number) {
  return `${Math.round(percentage * 100)}%`;
}