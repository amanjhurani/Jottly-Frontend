import MDEditor from "@uiw/react-md-editor";

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
          {isUpdated ?
            <div>
              <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
              </svg>
            </div> :
            <div>
            </div>
          }
        </div>
        <div className="app-main-note-preview-pc">
          <div data-color-mode="light">
            <MDEditor id="body" placeholder="Write your note here..." height={660} value={activeNoteBody} onChange={(e) => onEditField("body", e)} visibleDragbar={false}/>
          </div>
        </div>
        <div className="app-main-note-preview-mobile">
          <div data-color-mode="light">
            <MDEditor id="body" maxHeight="45" placeholder="Write your note here..." height={300} value={activeNoteBody} onChange={(e) => onEditField("body", e)} preview="edit" visiableDragbar={false}/>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Main;
