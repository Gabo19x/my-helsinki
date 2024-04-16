export default function Total(props) {
    return(
        <div>
            <p>❕Number of exercises {props.obj[0].exercises + props.obj[1].exercises + props.obj[2].exercises}❕</p>
        </div>
    );
}