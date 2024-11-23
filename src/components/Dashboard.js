import React, { useEffect, useState } from 'react';

const Dashboard = () => {
    const [name, setName] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('/api/user', {
                    credentials: 'include', // Include cookies in the request
                });
                if (response.ok) {
                    const data = await response.json();
                    setName(data.name);
                } else {
                    console.error('User not found');
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <div className="text-center mt-10">
            <h1 className="text-2xl">Welcome, {name}!</h1>
        </div>
    );
};

export default Dashboard;