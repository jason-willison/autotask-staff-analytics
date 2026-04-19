// Core data types for Autotask Analytics Dashboard

export interface Staff {
  id: number;
  name: string;
  email: string;
  department: string;
  role: string;
  active: boolean;
}

export interface TimeEntry {
  id: number;
  staff_id: number;
  date: string;
  hours: number;
  billable_hours: number;
  activity: string;
  client: string;
  status: 'complete' | 'partial' | 'missing';
}

export interface DailyTimeEntry {
  staff_id: number;
  name: string;
  date: string;
  total_hours: number;
  billable_hours: number;
  entries_count: number;
  last_entry_time?: string;
  status: 'complete' | 'partial' | 'missing';
}

export interface StaffProductivity {
  staff_id: number;
  name: string;
  period: string;
  start_date: string;
  end_date: string;
  total_hours: number;
  billable_hours: number;
  billable_ratio: number;
  days_with_entries: number;
  days_expected: number;
  missing_days: string[];
  activities: Activity[];
}

export interface Activity {
  activity_name: string;
  hours: number;
  percentage: number;
}

export interface DashboardMetrics {
  total_staff: number;
  total_hours: number;
  average_hours_per_staff: number;
  billable_hours: number;
  billable_ratio: number;
  compliance_rate: number;
  missing_count: number;
  period: string;
  start_date: string;
  end_date: string;
}

export interface MissingTimesheetData {
  date: string;
  total_staff: number;
  missing_count: number;
  missing_staff: MissingStaff[];
}

export interface MissingStaff {
  staff_id: number;
  name: string;
  department: string;
  last_entry_date: string;
  days_missing: number;
}

export interface Alert {
  id: string;
  staff_id: number;
  name: string;
  type: 'missing' | 'partial' | 'late' | 'overbudget';
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  date: string;
  days_affected?: number;
}

export interface ClientTimeAllocation {
  client_id: number;
  client_name: string;
  total_hours: number;
  billable_hours: number;
  staff_count: number;
  top_activities: Activity[];
}

export type DateRange = 'today' | 'week' | 'month' | 'quarter';
export type ViewMode = 'grid' | 'list' | 'chart';