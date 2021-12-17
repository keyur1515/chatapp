import React from 'react';
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import { auth } from '../firebase';

const Chats = () => {
  const history = useHistory();

  const handleLogout = async () => {
    await auth.signOut();

    history.push('/')
  }

  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">
          Waver~
        </div>
        <div onClick={handleLogout} className="logout-tab">
          Logout
        </div>
      </div>

      <ChatEngine
        height="calc(100vh - 66px)"
        projectId="219cfcd8-5ce4-428c-ba2b-287f2ab87e42"
        userName="."
        userSecret="."
      />
    </div>
  );
}

export default Chats;
