import type { ReactNode } from 'react';

export interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  onClick?: () => void;
}

export interface ButtonProps {
  title: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  rounded?: 'sm' | 'md' | 'full';
}

// interfaces/index.ts

// Redux: Counter state
export interface CounterState {
  value: number;
}

// Job object structure
export interface Job {
  id: string;
  title: string;
  description: string;
  budget?: number;
  location?: string;
  postedAt?: string;
  isActive: boolean;
  clientId: string;
  category?: string;
}

// User object structure
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'client' | 'worker';
  phone?: string;
  location?: string;
  profileImageUrl?: string;
}

// Props for JobCard component
export interface JobCardProps {
  job: Job;
  onClick?: () => void;
}

// Props for Button component
export interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
}

// Props for Layout (optional if needed)
export interface LayoutProps {
  children: ReactNode;
}

