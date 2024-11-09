import React from 'react';

interface LiveMatchCardProps {
  team1: string;
  team2: string;
  score1: string;
  score2: string;
  overs: string;
  status: 'Live' | 'Starting Soon' | 'Completed';
}

export function LiveMatchCard({
  team1,
  team2,
  score1,
  score2,
  overs,
  status,
}: LiveMatchCardProps) {
  return (
    <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Match #123</h3>
        <span
          className={`px-2 py-1 text-xs font-medium rounded ${
            status === 'Live'
              ? 'bg-red-100 text-red-800'
              : 'bg-blue-100 text-blue-800'
          }`}
        >
          {status}
        </span>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            <span className="font-medium">{team1}</span>
          </div>
          <span className="font-semibold">{score1}</span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            <span className="font-medium">{team2}</span>
          </div>
          <span className="font-semibold">{score2}</span>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t">
        <p className="text-sm text-gray-600">
          {status === 'Live' ? `Current Over: ${overs}` : 'Match starts soon'}
        </p>
      </div>
    </div>
  );
}