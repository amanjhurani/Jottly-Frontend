import ReactMarkdown from "react-markdown";
import { useState } from "react";

const Main = ({ activeNote, onUpdateNote, isUpdated, setUpdateStatus }) => {
  const onEditField = (field, value) => {
    onUpdateNote({
      ...activeNote,
      [field]: value,
      lastModified: Date.now(),
      isImp: false,
      isPinned: false
    });
    setUpdateStatus(false);
  };
  

  if (!activeNote) return <div className="no-active-note">No Active Note</div>;
  const activeNoteBody = activeNote.body === '.' ? '' : activeNote.body;
  return (
    <div className="app-main" >
      <div className="app-main-note-edit">
        <div className="app-main-note-header">
          <input
            type="text"
            id="title"
            placeholder="Note Title"
            value={activeNote.title}
            onChange={(e) => onEditField("title", e.target.value)}
            autoFocus
          // onFocus={setEditFocus(true)}
          />
          { isUpdated ?
            <div>
            <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
              <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
              <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </svg>
          </div> : 
          <div>
          </div>
          }
        </div>
        <textarea
          id="body"
          placeholder="Write your note here..."
          value={activeNoteBody}
          onChange={(e) => onEditField("body", e.target.value)}
        />
        <div className="app-main-note-preview">
          <h1 className="preview-title">{activeNote.title}</h1>
          <ReactMarkdown className="markdown-preview" >
            {activeNoteBody}
          </ReactMarkdown>
        </div>
      </div>

    </div>
  );
};

export default Main;
