import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const  [emailLocalStorage, setEmailLocalStorage] = useState("");
  const navigate = useNavigate();

  async function getEmailLocalStorage() {
    const exists = localStorage.getItem('email');
    if (exists) {
      const json = JSON.parse(exists);
      setEmailLocalStorage(json.email);
      return;
    }
    navigate('/')
  }

  useEffect(() => {
    getEmailLocalStorage();
  }, [])
  
  return (
    <header>
      <div>{ emailLocalStorage }</div>
      <div>Minhas Tarefas</div>
    </header>
  )
}

export default Header;