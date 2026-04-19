import { format } from 'date-fns';
import type { 
  Staff, 
  DailyTimeEntry, 
  DashboardMetrics, 
  MissingTimesheetData, 
  Alert, 
  StaffProductivity,
  ClientTimeAllocation 
} from '@/lib/types';
import { generateMockDate } from '@/lib/utils';

// Mock Perigon One staff structure
export const mockStaff: Staff[] = [
  { id: 1, name: 'Jason Willison', email: 'jason.willison@perigonone.com.au', department: 'Management', role: 'CEO', active: true },
  { id: 2, name: 'John Smith', email: 'john.smith@perigonone.com.au', department: 'Technical Services', role: 'Senior Technician', active: true },
  { id: 3, name: 'Sarah Wilson', email: 'sarah.wilson@perigonone.com.au', department: 'Technical Services', role: 'Systems Administrator', active: true },
  { id: 4, name: 'Mike Johnson', email: 'mike.johnson@perigonone.com.au', department: 'Technical Services', role: 'Technician', active: true },
  { id: 5, name: 'Emma Davis', email: 'emma.davis@perigonone.com.au', department: 'Support', role: 'Support Specialist', active: true },
  { id: 6, name: 'David Lee', email: 'david.lee@perigonone.com.au', department: 'Technical Services', role: 'Network Engineer', active: true },
  { id: 7, name: 'Lisa Taylor', email: 'lisa.taylor@perigonone.com.au', department: 'Support', role: 'Help Desk Analyst', active: true },
  { id: 8, name: 'Chris Brown', email: 'chris.brown@perigonone.com.au', department: 'Technical Services', role: 'Security Specialist', active: true },
  { id: 9, name: 'Amy Chen', email: 'amy.chen@perigonone.com.au', department: 'Project Management', role: 'Project Manager', active: true },
  { id: 10, name: 'Rob Miller', email: 'rob.miller@perigonone.com.au', department: 'Technical Services', role: 'Cloud Engineer', active: true },
  { id: 11, name: 'Kate Anderson', email: 'kate.anderson@perigonone.com.au', department: 'Support', role: 'Training Coordinator', active: true },
  { id: 12, name: 'Tom Wilson', email: 'tom.wilson@perigonone.com.au', department: 'Sales', role: 'Account Manager', active: true }
];

// Generate realistic daily time entries for the current week
export const generateMockTimeEntries = (): DailyTimeEntry[] => {
  const entries: DailyTimeEntry[] = [];
  for (let i = 0; i < 5; i++) { // 5 days of week
    const date = ('2026-04-' + (14 + i).toString()); // Apr 14-18
    mockStaff.forEach(staff => {
      let status = 'complete';
      let hours = 8;
      let billable_hours = 7;
      \n      // Create realistic scenarios
      if (staff.id === 3 && i === 4) { // Sarah Wilson - friday
        status = 'missing';
        hours = 0;
        billable_hours = 0;
      } else if (staff.id === 4 && i === 4) { // Mike Johnson - friday
        status = 'partial';
        hours = 4;
        billable_hours = 3;
      } else if (staff.id === 6 && i >= 2) { // David Lee - 2 days behind
        status = 'missing';
        hours = 0;
        billable_hours = 0;
      }
      \n      entries.push({
        staff_id: staff.id,
        name: staff.name,
        date,
        total_hours: hours,
        billable_hours,
        entries_count: status === 'missing' ? 0 : 5,
        last_entry_time: status === 'missing' ? undefined : '17:00',
        status
      });
    });
  }
  return entries;
};

// Export generated data
export const mockTimeEntries = generateMockTimeEntries();

// Dashboard metrics
export const mockDashboardMetrics = {
  total_staff: 12,
  total_hours: 450.5,
  average_hours_per_staff: 37.5,
  billable_hours: 380.2,
  billable_ratio: 0.84,
  compliance_rate: 0.85,
  missing_count: 3,
  period: 'week',
  start_date: '2026-04-14',
  end_date: '2026-04-18'
};

// Alerts
export const mockAlerts = [
  {
    id: '1',
    staff_id: 3,
    name: 'Sarah Wilson',
    type: 'missing',
    severity: 'critical',
    message: 'No time entry for Friday (Today)',
    date: '2026-04-18'
  },
  {
    id: '2', 
    staff_id: 4,
    name: 'Mike Johnson',
    type: 'partial',
    severity: 'medium',
    message: 'Only 4 hours logged today (partial)',
    date: '2026-04-18'
  },
  {
    id: '3',
    staff_id: 6,
    name: 'David Lee',
    type: 'missing',
    severity: 'high',
    message: '2 days behind on timesheet entries',
    date: '2026-04-18',
    days_affected: 2
  },
  {
    id: '4',
    staff_id: 0,
    name: 'Team Compliance',
    type: 'late',
    severity: 'low',
    message: 'Weekly compliance down 3% from last week',
    date: '2026-04-18'
  }
];