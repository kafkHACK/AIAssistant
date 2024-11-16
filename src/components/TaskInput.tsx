import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle } from "lucide-react";

const TaskInput = () => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement natural language processing
    console.log('Processing task:', input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-2 animate-fade-in">
      <div className="flex items-center space-x-2">
        <MessageCircle className="w-5 h-5 text-primary" />
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your task naturally, e.g., 'Remind me to call John tomorrow at 2pm'"
          className="flex-1"
        />
        <Button type="submit">Add Task</Button>
      </div>
    </form>
  );
};

export default TaskInput;