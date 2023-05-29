import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate()
  const [ülke, setUlke] = useState([]);
  const { namee } = useParams();
  //! buraya App.js deki path ile geldiğimizde, home dan gelen yoldaki name sayesinde (useParam İLE name i yakalayıp), alttaki adresten, buraya name ile gelen  ülkenin verileri çekilecek, onunla ilgili birkaç özellik ekrana bastırılacak
  console.log(namee);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${namee}`)
      .then((res) => res.json())
      .then((data) => setUlke(data));
  }, [namee]);
  console.log(ülke.map((a)=>console.log(a.maps.googleMaps)));
  return (
    <div>
      {ülke.map(
        ({ flags, name, region, population, capital }, id) =>
          namee === name.common && (
            <div
              className="card mb-3 container mt-5"
              key={id}
              style={{ maxWidth: "800px" }}
            >
              <div className="row g-0">
                <div className="col-md-6  d-flex">
                  <img
                    src={flags.png}
                    className="img-fluid rounded-start"
                    alt="..."
                    width={"100%"}
                    height={"100vh"}
                  />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">
                      {name.common} <sub>({name.official})</sub>
                    </h5>
                    <hr />
                    <p className="card-text">
                      Capital : <b>{capital}</b>
                    </p>
                    <p className="card-text">
                      Region : <b>{region}</b>
                    </p>
                    <p className="card-text">
                      Population : <b>{population}</b>
                    </p>
                    <button
                      className="btn btn-primary "
                      onClick={() => navigate(-1)}
                    >
                      GO BACK{" "}
                    </button>
                    <button
                      className="btn btn-warning ms-2"
                      onClick={() => navigate("/")}
                    >
                      GO HOME
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
      )}
    </div>

    // <div>
    //   {ülke.map(({ flags, name, region, population }, id) =>
    //     namee === name.common && (
    //     <div key={id}>
    //       <img src={flags.png} alt="" />
    //       <p>Name: {name.common}</p>
    //       <p>Region: {region}</p>
    //       <p>Population: {population}</p>
    //     </div>
    //   ))}
    // </div>
  );
};

export default Details;


