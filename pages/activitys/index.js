import React from 'react'
import ActivityCard from './activity-card'
import { activitys } from "../../data/activitys"

const GalleryActivitys = () => {
    return (
        <div className='grid grid-cols-12 h-full'>

            <div className='col-span-2 border'>
                Activités
            </div>
            <div className='col-span-10 border'>
                <div className='grid grid-cols-12 gap-3'>
                    {activitys.map((activity) => (

                        <div key={activity.id} className='col-span-3'>
                            <ActivityCard activity={activity} />
                        </div>
                    )
                    )}
                </div>
            </div>
        </div>
    )
}

export default GalleryActivitys