import TaskInput from './TaskInput';
import TaskList from './TaskList';
import ProjectView from './ProjectView';
import MoodTracker from './MoodTracker';

const Dashboard = () => {
  return (
    <div className="container mx-auto p-4 space-y-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-primary mb-2">AI Assistant</h1>
        <p className="text-gray-600">Your personal productivity companion</p>
      </header>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-8">
          <TaskInput />
          <TaskList />
        </div>
        <div className="space-y-8">
          <MoodTracker />
          <ProjectView />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;