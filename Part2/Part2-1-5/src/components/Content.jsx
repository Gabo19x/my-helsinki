import Part from "./Part";

export default function Content(props) {
    // console.log(props.parts, props.parts[0].name);

    const parts = props.parts.map(obj => (
        <Part key={obj.id} name={obj.name} exercises={obj.exercises} />
    ));

    // console.log(parts);
    return(
        <>
            {parts}
        </>
        
    );
}