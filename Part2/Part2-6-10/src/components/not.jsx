export default function Notification({not}) {
    if(not === null) {
        return null;
    }

    return (
        <div className="Notification">
            <p>{not}</p>
        </div>
    );
}