const PersonaCard = ({ persona }) => {
    return (
        <div className="card m-2" style={{width: "18rem"}}>
        <div className="card-body">
            <img src={persona.picture['large']} alt={persona.name['first']} className="card-img-top"/>
            <h5 className="card-title">{persona.name['first']} {persona.name['last']}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{persona.email}</h6>
        </div>
        </div>
    );
}
PersonaCard.defaultProps = {
    persona: {
        name: "Lorem Ipsum",
        email: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        picture: "https://via.placeholder.com/150"
    }
}
export default PersonaCard;
