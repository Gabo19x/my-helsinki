export default function Part(props) {
    return(
        <p>
            {props.obj['name']} | Exs: {props.obj.exercises}
        </p>
    );
}