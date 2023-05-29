import "./Tabs.css"

export default function Tabs() {
    return (
        <>
            <div className="tab-bar">
                <p className="entries_tab">All Entries <span className="entries_badge">3</span></p>
                <p className="favourites_tab">Favourites <span className="favourites_badge">1</span></p>
            </div>
        </>
    );
}