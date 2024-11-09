import React from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { Trophy, Users, Calendar, Activity } from 'lucide-react';

const navigationItems = [
  {
    name: 'Dashboard',
    icon: Activity,
    href: '#dashboard',
  },
  {
    name: 'Tournaments',
    icon: Trophy,
    href: '#tournaments',
  },
  {
    name: 'Teams',
    icon: Users,
    href: '#teams',
  },
  {
    name: 'Schedule',
    icon: Calendar,
    href: '#schedule',
  },
];

function App() {
  return (
    <Layout navigationItems={navigationItems}>
      <Dashboard />
    </Layout>
  );
}

export default App;