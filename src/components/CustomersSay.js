export default function CustomersSay(props) {
    return (
        <article className="testimonial-card">
            <img src="rating.png" alt="rating icon"></img>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </article>
    );
}