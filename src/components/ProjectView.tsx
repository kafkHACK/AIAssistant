import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { Project } from '@/lib/types';

const ProjectView = () => {
  const projects: Project[] = [
    {
      id: '1',
      name: 'Website Redesign',
      progress: 65,
      tasks: [],
    },
    {
      id: '2',
      name: 'Marketing Campaign',
      progress: 30,
      tasks: [],
    },
  ];

  return (
    <div className="space-y-4 animate-fade-in">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.id} className="p-4">
            <h3 className="font-medium mb-2">{project.name}</h3>
            <Progress value={project.progress} className="h-2" />
            <p className="text-sm text-gray-500 mt-2">{project.progress}% complete</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectView;