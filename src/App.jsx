import { useEffect, useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import Main from "./main/Main";
import Sidebar from "./sidebar/Sidebar";
import Login from "./login/Login";
import { Routes, Route } from 'react-router-dom';
import axios from "axios";
import { ObjectID } from 'bson';



function App() {
  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );
  const [authToken, setAuthToken] = useState(localStorage.token ? localStorage.token : null);
  const [isLog, setLogin] = useState(authToken ? true : false);
  const [activeNote, setActiveNote] = useState(false);
  const baseURL = 'https://jottly-app.herokuapp.com/api/v1/note';
  const baseUserURL = 'https://jottly-app.herokuapp.com/api/v1/user';
  const [isUpdated, setIsUpdated] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    let config = {
      headers: {
        authorization: authToken,
      }
    }
    await axios
      .post(baseURL+'/list', {
      }, config)
      .then((response) => {
        setNotes(response.data.data);
      });
  }, []);

  const handleLogin = async (isLog, authToken) => {
    await setLogin(isLog);
    setAuthToken(authToken)
    let config = {
      headers: {
        authorization: authToken,
      }
    }
    await axios
      .post(baseURL+'/list', {
      }, config)
      .then((response) => {
        setNotes(response.data.data);
      });
    // setNotes(notes)
  }

  const handleLogout = async () => {
    setLogin(false);
    let config = {
      headers: {
        authorization: authToken,
      }
    }
    await axios
      .post(baseUserURL+'/logout', {
      }, config)
      .then((response) => {
        console.log(response)
      });
  }

  // const getNotes = async () => {
    
  // }

  const onAddNote = async () => {
    let config = {
      headers: {
        authorization: authToken,
      }
    }
    const newNote = {
      title: "Untitled Note",
      body: "",
      isPinned: false,
      isImp: false,
      _id: new ObjectID().toString(),
      updatedAt: Date.now()
    };
    
    setNotes([newNote, ...notes]);
    setActiveNote(newNote._id);
    await axios
    .post(baseURL+'/add', {
      payload: newNote
    }, config)
    .then((response) => {
      console.log(response);
    });
    // setActiveNote(newNote._id);
    
  };

  const onDeleteNote = async (noteId) => {
    setNotes(notes.filter(({ _id }) => _id !== noteId));
    let config = {
      headers: {
        authorization: authToken,
      }
    }
    const deleteNote = {
     ids: [noteId]
    };
    await axios
    .post(baseURL+'/delete', {
      payload: deleteNote
    }, config)
    .then((response) => {
      console.log(response);
    });

  };

  const onUpdateNote = async (updatedNote) => {
    const updatedNotesArr = notes.map((note) => {
      if (note._id === updatedNote._id) {
        return updatedNote;
      }

      return note;
    });
    setNotes(updatedNotesArr);

    let config = {
      headers: {
        authorization: authToken,
      }
    }
    const updateNote = {
      title: updatedNote.title,
      body: updatedNote.body,
      isPinned: updatedNote.isPinned,
      isImp: updatedNote.isImp,
      _id: updatedNote._id,
      updatedAt: Date.now()
    };
    await axios
    .post(baseURL+'/update', {
      payload: updateNote
    }, config)
    .then((response) => {
      if(response.data.status === 200) {
        setIsUpdated(true)
      } else {
        setIsUpdated(false)
      }
    });



  };

  const getActiveNote = () => {
    return notes.find(({ _id }) => _id === activeNote);
  };

  return (
    <div className="App">
      <Routes>
      <Route path="/" element={
        !isLog ? 
        <Login isLogin = {handleLogin}/> :
          <div className="App-Home">
            <Sidebar
              notes={notes}
              onAddNote={onAddNote}
              onDeleteNote={onDeleteNote}
              activeNote={activeNote}
              setActiveNote={setActiveNote}
              isLogout={handleLogout}
            />
            <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} isUpdated={isUpdated} setUpdateStatus={setIsUpdated} />
          </div>
        } />
      </Routes>
    </div>
  );
}

export default App;
