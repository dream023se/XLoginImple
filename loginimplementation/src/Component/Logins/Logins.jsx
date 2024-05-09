import React, {useState} from 'react';

const Logins= ()=>{
    const [username, setUsername]=useState('');
    const [password, setPassword]=useState('');
    const [message, setMessage]=useState('');
    const [messages, setMessages]=useState('');


    const handleSubmit=(event)=>
        {
event.preventDefault();
if(username==='user' || password==='password')
    {
        setMessage('Welcome, User!')
    }
    else {
        setMessages('Invalid username or password')
    }
        }

        return (
            <>
            <div>
      {message && <p>{message}</p>}
      {!message && (
        
        <form onSubmit={handleSubmit}>
            <h1>Login Page</h1>
            <p>{messages}</p>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
            </>
        )
    };
    export default Logins;
