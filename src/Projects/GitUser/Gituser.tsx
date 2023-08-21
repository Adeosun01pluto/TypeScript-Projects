import React, { useState } from 'react';
import './gituser.css'; // We'll create this CSS file later

const Gituser = () => {
  const [username, setUsername] = useState<string>('');
  const [userData, setUserData] = useState<any>(null); // Store user data

  const fetchUserData = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <div className="user-search">
      <h1>GitHub User Search</h1>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={fetchUserData}>Search</button>
      {userData && (
        <div className="user-data">
          <img src={userData.avatar_url} alt="User Avatar" />
          <h2>{userData.name}</h2>
          <p>{userData.bio}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            Visit Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Gituser;
