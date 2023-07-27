import React from 'react';
import ActivityCard from './activity-card';
import { activitys } from '../../data/activitys';

const GalleryActivitys = () => {
  return (
    <div className="flex flex-row justify-end h-full">
      
      <div className="flex-1 border p-4 flex flex-wrap gap-3">
        {activitys.map((activity) => (
          <div key={activity.id} className="w-1/4 mb-4">
            <ActivityCard activity={activity} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryActivitys;
