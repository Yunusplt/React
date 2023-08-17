import "./Main.scss";
import data from '../../helpers/data';


const Main = () => {
   console.log(data);
    return(
        <div className="main">
            {data.map((item, index) => {
                return (
                  <div className="cards" key={index}>
                    <div className="resim">
                      <img src={item.src.large} className="image" alt="" />
                    </div>
                    <div className="artistName">
                      <a href="#">{item.photographer}</a>
                    </div>
                  </div>
                );
            })}

        </div>
    )
}
export default Main;
