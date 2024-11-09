import React from 'react';

interface TournamentCardProps {
  name: string;
  teams: number;
  matches: number;
  completed: number;
  status: 'upcoming' | 'ongoing' | 'completed';
}

export function TournamentCard({
  name,
  teams,
  matches,
  completed,
  status,
}: TournamentCardProps) {
  const progress = (completed / matches) * 100;

  return (
    <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <span
          className={`px-2 py-1 text-xs font-medium rounded ${
            status === 'ongoing'
              ? 'bg-green-100 text-green-800'
              : 'bg-blue-100 text-blue-800'
          }`}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Teams</span>
          <span className="font-medium">{teams}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Total Matches</span>
          <span className="font-medium">{matches}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Completed</span>
          <span className="font-medium">{completed}</span>
        </div>
      </div>

      <div className="mt-4">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          {progress}% matches completed
        </p>
      </div>
    </div>
  );
}