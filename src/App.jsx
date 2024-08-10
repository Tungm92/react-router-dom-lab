import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
// import MailboxList from './components/MailboxList';
import { useState } from 'react';
// import MailboxDetails from './components/MailboxDetails';
import MailboxForm from './components/MailboxForm';

// create the state of mailboxes at the start of the app
const initialState = []

const App = () => {
  
  // create the mailboxes
  const [mailboxes, setMailboxes] = useState(initialState);

  // function to add mailbox
  const addMailbox = (newMailboxData) => {
    
    // automatically create an _id for each mailbox in the array
    newMailboxData._id = mailboxes.length + 1;

    // add the mailbox to the array
    setMailboxes([...mailboxes, newMailboxData]);
  };
  
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<h1>Post Office</h1>} />
        <Route path='/mailboxes/new' element={<MailboxForm  addMailbox={addMailbox} />} />
        {/* <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes} />} /> */}

        <Route path='*' element={<h2>Mailbox Not Found!</h2>} />
      </Routes>
    </>
  )
};

export default App;