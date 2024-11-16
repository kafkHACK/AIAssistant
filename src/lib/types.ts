export interface Task {
  id: string;
  title: string;
  description?: string;
  status: 'todo' | 'in-progress' | 'done';
  priority: 'low' | 'medium' | 'high';
  dueDate?: Date;
}

export interface Project {
  id: string;
  name: string;
  progress: number;
  tasks: Task[];
}

export interface MoodEntry {
  id: string;
  mood: 'great' | 'good' | 'neutral' | 'bad' | 'terrible';
  timestamp: Date;
  note?: string;
}