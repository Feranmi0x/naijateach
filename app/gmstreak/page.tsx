"use client";

import { useState, useEffect } from "react";

// Type-safe milestone keys
type MilestoneKeys = 7 | 30 | 100;

// Reward milestones
const REWARD_MILESTONES: Record<MilestoneKeys, number> = {
  7: 10,   // 10 points for a 7-day streak
  30: 50,  // 50 points for a 30-day streak
  100: 200 // 200 points for a 100-day streak
};

const GMStreakButton = () => {
  const [streak, setStreak] = useState<number>(0);
  const [points, setPoints] = useState<number>(0);
  const [lastCheckIn, setLastCheckIn] = useState<Date | null>(null);
  const [loading, setLoading] = useState(false);

  // Load streak, points, and last check-in from localStorage on mount
  useEffect(() => {
    const storedStreak = localStorage.getItem("gmStreak");
    const storedPoints = localStorage.getItem("gmPoints");
    const storedDate = localStorage.getItem("lastCheckIn");

    if (storedStreak) setStreak(Number(storedStreak));
    if (storedPoints) setPoints(Number(storedPoints));
    if (storedDate) setLastCheckIn(new Date(storedDate));
  }, []);

  const handleCheckIn = () => {
    setLoading(true);

    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    let updatedStreak = streak;

    // Logic to update streak
    if (lastCheckIn) {
      const lastDate = new Date(lastCheckIn);

      if (lastDate.toDateString() === today.toDateString()) {
        alert("Already checked in today!");
        setLoading(false);
        return;
      }

      if (lastDate.toDateString() !== yesterday.toDateString()) {
        updatedStreak = 0; // Missed a day, reset streak
      }
    }

    updatedStreak += 1;

    // Award points if the streak hits a milestone
    const additionalPoints = REWARD_MILESTONES[updatedStreak as MilestoneKeys] || 0;
    if (additionalPoints > 0) {
      alert(`Congrats! You've earned ${additionalPoints} points for a ${updatedStreak}-day streak!`);
    }

    const updatedPoints = points + additionalPoints;

    // Update state and localStorage
    setStreak(updatedStreak);
    setPoints(updatedPoints);
    setLastCheckIn(today);

    localStorage.setItem("gmStreak", updatedStreak.toString());
    localStorage.setItem("gmPoints", updatedPoints.toString());
    localStorage.setItem("lastCheckIn", today.toISOString());

    setLoading(false);
  };

  return (
    <div className=" p-4 rounded text-center border-2">
  <h1 className="text-ms font-bold">Daily Streak</h1>
  <p className="text-gray-700 font-extrabold text-2xl">
  {streak} {streak === 1 ? "day" : "days"}
  </p>
  <p className="text-gray-700">Total Points: {points}</p>
  <button
    onClick={handleCheckIn}
    disabled={loading}
    className={`px-4 py-2 mt-2 text-white rounded ${
      loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
    }`}
  >
    {loading ? "Checking In..." : "Check In"}
  </button>
</div>
  );
};

export default GMStreakButton;