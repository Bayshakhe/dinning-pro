import React from 'react';

const OurAchievements = () => {
    const achievements = [
        {number: '140k+', text: 'Our Registered Member'},
        {number: '350+', text: 'Already Learning'},
        {number: '100+', text: 'Master Chef Recipe'},
        {number: '230+', text: 'Vendor Platform Partner'},
    ]
    return (
        <div className="row row-cols-2 row-cols-md-4 g-4 mb-5 text-center">
                {
                    achievements.map(a => <div className='col'>
                    <h5 className='text-warning fw-bold fs-2'>{a.number}</h5>
                    <p>{a.text}</p>
                    </div>)
                }
        </div>
    );
};

export default OurAchievements;