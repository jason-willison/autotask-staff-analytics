# Autotask Staff Analytics Dashboard

A Next.js 14 dashboard for monitoring staff timesheet compliance and analytics at Perigon One.

## 🎯 Features

### ✅ **Completed Dashboard Components**
- **Key Metrics Cards** - Total hours, billability %, compliance rate, missing entries
- **Staff Performance Grid** - Visual 5-day timesheet status for all staff
- **Missing Timesheet Alerts** - Real-time alerts for missing/partial entries  
- **Weekly Hours Trend Chart** - Total vs billable hours by day
- **Team Billability Breakdown** - Pie chart of billable vs non-billable time
- **Responsive Design** - Works on desktop, tablet, and mobile

### 📊 **Live Mock Data**
- **Realistic Perigon One Staff** - 12 team members across departments
- **Current Week Simulation** - Monday to Friday timesheet data
- **Alert Scenarios** - Missing entries, partial days, compliance issues
- **Performance Patterns** - Varied billability and productivity metrics

## 🚀 **Getting Started**

### Running the Development Server
```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the dashboard.

## 🏗)*Architecture**

### Tech Stack
- **Next.js 14** - React framework with App Router
- **TypeScript** - Full type safety
- **Tailwind CSS** - Utility-first styling
- **Recharts** - Chart library for data visualization
- **Lucide React** - Icon library

## 🔌 **API Integration Ready**

The dashboard is designed to easily connect to your custom Autotask API:

### Required Endpoints
- `GET /api/staff` - Staff member list
- `GET /api/time-entries/summary` - Daily time entry summary
- `GET /api/time-entries/missing` - Missing timesheet data
- `GET /api/analytics/team-overview` - Dashboard metrics

## 📱 **Responsive Features**

- **Desktop (1200px+)** - Full grid layout with all components
- **Tablet (768-1200px)** - Stacked layout, simplified charts  
- **Mobile (<768px)** - Single column, essential metrics only

## 🎨 **Design System**

### Color Coding
- 🟢 **Green** - Complete entries, good performance
- 🟡 **Yellow** - Partial entries, attention needed
- 🔴 **Red** - Missing entries, urgent action required
- 🔵 **Blue** - Information, neutral status

### Status Icons
- ✅ Complete timesheet entry
- ⚠️ Partial or incomplete entry
- ❌ Missing timesheet entry
- 📈 Trending up / 📉 Trending down

## 🚀 **Next Steps**

1. Connect to your custom Autotask API
2. Replace mock data with real-time data
3. Deploy to Vercel or Netlify for live URL
4. Add authentication and user access controls

== ✅ **MVP Complete** - Fully functional dashboard with mock data
=> 🔄 **Ready for API Integration** - Designed for easy backend connection
=> 📊 **Production Ready UI** - Professional design suitable for management use

The dashboard is ready to demonstrate and can be connected to your Autotask API whenever it's available!