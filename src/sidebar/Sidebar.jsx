const Sidebar = ({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) => {
  const sortedNotes = notes.sort((a, b) => b.updatedAt - a.updatedAt);

  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Notes</h1>
        <button onClick={onAddNote}>Add</button>
      </div>
      <div className="app-sidebar-notes">
        {sortedNotes.map(({ _id, title, body, updatedAt }, i) => (
          <div
            className={`app-sidebar-note ${_id === activeNote && "active"}`}
            onClick={() => setActiveNote(_id)}
          >
            <div className="sidebar-note-title">
              <strong>{title && title.substr(0, 17) + "..."}</strong>
              {/* <p>{body && body.substr(0, 100) + "..."}</p>
              <small className="note-meta">
              Last Modified{" "}
              {new Date(updatedAt).toLocaleDateString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small> */}
              <button onClick={(e) => onDeleteNote(_id)}>Delete</button>
            </div>

            <p>{body && body.substr(0, 57) + "..."}</p>
            <small className="note-meta">
              Last Modified{" "}
              {new Date(updatedAt).toLocaleDateString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
