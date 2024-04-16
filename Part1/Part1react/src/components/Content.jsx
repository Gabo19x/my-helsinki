import Part from "./Part";

export default function Content(props) {
    return(
        <>
            <Part obj={props.obj[0]} />
            <Part obj={props.obj[1]} />
            <Part obj={props.obj[2]} />
        </>
        
    );
}