import "./Main.scss"
import {data} from '../../helpers/data'
import Card from "./Card";


const Main = () => {
  console.log(data);
  return (
    <div className="card-container">
      {/* <h1>{data[0].title}</h1> */}
      {/* {data.map((item) => {
        return (
          <div className="card" key={item.id}>
            <h2>{item.title}</h2>
          </div>
        )
      })} */}
      {/* {data.map((item,index) => <Card/>  )}  //todo Ben Card Compenentiyim. */}
      {data.map((item,index) => <Card {...item} key={index} />  )}
    </div>
  );
}

export default Main