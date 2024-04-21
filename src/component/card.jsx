
export const Card = ({ image, children }) => {
    return (
      <div className="cards">
        <div className="card">
            {image && <img src={image} className="card-img-top" alt="Card" />}
        {children}
        </div>
      </div>
    );
  };
