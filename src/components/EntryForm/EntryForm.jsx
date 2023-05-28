import "./EntryForm.css";

export default function EntryForm() {
     return (
        <>
                    
            <form>
                <h2 className="form_title">NEW ENTRY</h2>
                <label htmlFor="motto">Motto</label>
                <input id="motto" placeholder="Enter your text here..."></input>
                <label htmlFor="notes">Notes</label>
                <textarea id="notes" placeholder="Enter your text here..."></textarea>
                <button className="submit__button" type="submit">Create</button>            
            </form>
        </>
    );
}

