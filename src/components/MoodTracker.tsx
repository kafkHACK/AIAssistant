import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { MoodEntry } from '@/lib/types';

const MoodTracker = () => {
  const [currentMood, setCurrentMood] = useState<MoodEntry['mood'] | null>(null);

  const moods: Array<{ value: MoodEntry['mood']; emoji: string; label: string }> = [
    { value: 'great', emoji: '😄', label: 'Great' },
    { value: 'good', emoji: '🙂', label: 'Good' },
    { value: 'neutral', emoji: '😐', label: 'Neutral' },
    { value: 'bad', emoji: '😕', label: 'Bad' },
    { value: 'terrible', emoji: '😢', label: 'Terrible' },
  ];

  return (
    <Card className="p-6 animate-fade-in">
      <h2 className="text-xl font-semibold mb-4">How are you feeling?</h2>
      <div className="flex justify-between gap-2">
        {moods.map(({ value, emoji, label }) => (
          <Button
            key={value}
            variant={currentMood === value ? "default" : "outline"}
            className="flex-1 flex flex-col items-center p-2"
            onClick={() => setCurrentMood(value)}
          >
            <span className="text-2xl mb-1">{emoji}</span>
            <span className="text-sm">{label}</span>
          </Button>
        ))}
      </div>
    </Card>
  );
};

export default MoodTracker;