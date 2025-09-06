function RecipeCard({name, cuisine, description}){
    return(
        <div style={{border: '1px solid #ccc', padding: '16px', margin: '8px', borderRadius:  '8px'}}>
            <h2>{name}</h2>
            <p><strong>Cuisine :</strong> {cuisine}</p>
            <p>{description}</p>
        </div>
    );    
}

export default RecipeCard;