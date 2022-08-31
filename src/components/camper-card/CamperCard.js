
import './CamperCard.css'

const CamperCard = ({
    camper,
    included
}) => {

    const imageUrl=included.find(x=>x.id===camper.relationships.primary_image.data.id)
   
    return (<div className="card-wrapper">
        <div className="img-container">
           <img src={imageUrl.attributes.url} alt="camper's photo" /> 
        </div>
        <div className="text-container">
            <h3>{camper.attributes.name}</h3>
        </div>
    </div>);
}

export default CamperCard;