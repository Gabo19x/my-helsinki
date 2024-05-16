export default function Total(props) {
    let res = 0;

    props.obj.forEach(ele => {
        res += ele.exercises;
    });
    
    return(
        <div>
            <p>❕Number of exercises: {res}❕</p>
        </div>
    );
}