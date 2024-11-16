import { Task } from '@/lib/types';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, AlertCircle } from "lucide-react";

const TaskList = () => {
  const tasks: Task[] = [
    {
      id: '1',
      title: 'Complete project proposal',
      description: 'Draft and review the Q4 project proposal',
      status: 'in-progress',
      priority: 'high',
      dueDate: new Date('2024-03-20'),
    },
    {
      id: '2',
      title: 'Schedule team meeting',
      status: 'todo',
      priority: 'medium',
      dueDate: new Date('2024-03-15'),
    },
  ];

  const getPriorityIcon = (priority: Task['priority']) => {
    switch (priority) {
      case 'high':
        return <AlertCircle className="w-4 h-4 text-red-500" />;
      case 'medium':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'low':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
    }
  };

  return (
    <div className="space-y-4 animate-fade-in">
      <h2 className="text-2xl font-semibold mb-4">Tasks</h2>
      {tasks.map((task) => (
        <Card key={task.id} className="p-4 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {getPriorityIcon(task.priority)}
              <div>
                <h3 className="font-medium">{task.title}</h3>
                {task.description && (
                  <p className="text-sm text-gray-500">{task.description}</p>
                )}
              </div>
            </div>
            <Badge variant={task.status === 'done' ? 'default' : 'secondary'}>
              {task.status}
            </Badge>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default TaskList;