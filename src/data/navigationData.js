// src/data/navigationData.js
import { 
  LayoutDashboard, 
  Calendar, 
  Clipboard, 
  BarChart3, 
  User, 
  Settings,
  Clock,
  MessageCircle,
  HelpCircle
} from 'lucide-react';

export const navigationItems = [
  {
    id: 'dashboard',
    name: 'Dashboard', 
    icon: LayoutDashboard,
    active: false
  },
  {
    id: 'appointments',
    name: 'Appointments',
    icon: Clipboard,
    active: false
  },
  {
    id: 'calendar',
    name: 'Calendar',
    icon: Calendar,
    active: false
  },
  {
    id: 'analytics',
    name: 'Analytics',
    icon: BarChart3,
    active: false
  },
  {
    id: 'patients',
    name: 'Patients',
    icon: User,
    active: false
  },
  {
    id: 'schedule',
    name: 'Schedule',
    icon: Clock,
    active: false
  },
  {
    id: 'messages',
    name: 'Messages',
    icon: MessageCircle,
    active: false
  },
  {
    id: 'help',
    name: 'Help',
    icon: HelpCircle,
    active: false
  },
  {
    id: 'settings',
    name: 'Settings',
    icon: Settings,
    active: false
  }
];
