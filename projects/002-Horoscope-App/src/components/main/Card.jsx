
const Card = (data) => {
    return (
      <div className="cards">
        {/* <h1>Ben Card Compenentiyim</h1>
            her data sayisi kadar ben card compenentiyim yazisi dönüyr. */}
        <div className="title">
          <h1>{data.title}</h1>
        </div>
        <div className="date">
          <h2>{data.date}</h2>
        </div>
        <img src={data.image} className="image" alt="" />
        <div className="card-over">
          <p>{data.desc}</p>
        </div>
      </div>
    );
}

export default Card;