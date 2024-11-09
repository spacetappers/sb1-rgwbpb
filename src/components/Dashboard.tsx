import React from 'react';
import { TournamentCard } from './TournamentCard';
import { LiveMatchCard } from './LiveMatchCard';
import { StatsCard } from './StatsCard';
import { Calendar, Trophy, Users, Activity } from 'lucide-react';

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="Active Tournaments"
          value="3"
          icon={Trophy}
          trend="+1 this month"
        />
        <StatsCard
          title="Total Teams"
          value="24"
          icon={Users}
          trend="+2 this week"
        />
        <StatsCard
          title="Upcoming Matches"
          value="12"
          icon={Calendar}
          trend="Next: Today"
        />
        <StatsCard
          title="Live Matches"
          value="2"
          icon={Activity}
          trend="3 completed today"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <h2 className="text-lg font-semibold mb-4">Live Matches</h2>
          <div className="space-y-4">
            <LiveMatchCard
              team1="Mumbai Titans"
              team2="Chennai Kings"
              score1="186/4"
              score2="142/3"
              overs="16.2"
              status="Live"
            />
            <LiveMatchCard
              team1="Delhi Dragons"
              team2="Punjab Warriors"
              score1="167/8"
              score2="--"
              overs="0.0"
              status="Starting Soon"
            />
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Active Tournaments</h2>
          <div className="space-y-4">
            <TournamentCard
              name="Premier League 2024"
              teams={8}
              matches={24}
              completed={16}
              status="ongoing"
            />
            <TournamentCard
              name="T20 Championship"
              teams={6}
              matches={15}
              completed={0}
              status="upcoming"
            />
          </div>
        </div>
      </div>
    </div>
  );
}