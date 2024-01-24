import { combineReducers, legacy_createStore as createStore } from "redux";
import "./App.css";
import Counter from "./components/counter/Counter";
import Todo from "./components/todo/Todo";
import { Provider } from "react-redux";
import counterReducer from "./redux/reducers/counterReducer";
import todoReducer from "./redux/reducers/todoReducer";

function App() {
 
// combineReducer
const topluReducer=combineReducers({counterReducer:counterReducer,todoReducer:todoReducer})
//Eger birden fayla reducer var ise reducer folder i altindaki tüm reducer file lari. combineReducer catisi altinda toplaniyor. {counterReducer(key) : conterReducer(value)}  keyler childlarin görecegi isimlerdir. farkli olarak da verilebilir. valuelar ise mevcut reducer filelarimizi temsil etmektedir. 
// CombineReducers catisi altinda toplanan reducerlar createStore a atilir.
// ardindan createStore tanimlanan store valuesuda Provider iceresibde store attribute ile servis edilir. böylece Provider sarmalinda bulunan tüm pageler oder compenentler tüm reducerlara counterReducer, todoReducer ismi ile erisebilir. 
// child da ise degiskenler useSelector ile functionlar ise dispatch ile elde edilir. 

// createStore
const store=createStore(topluReducer)

  return (
    <div className="app">
      <Provider store={store}>
        <Counter />
        <Todo />
      </Provider>
    </div>
  );
}

export default App;
