import Note from './Note'   //*importing notes from note.js file

//!It contains all the notes list
const NotesList = () => {
    return (
        <div className='notes-list'>
            <Note />
        </div>
    )
}
export default NotesList;