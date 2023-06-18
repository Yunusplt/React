import { combineReducers, legacy_createStore as createStore } from "redux";
import "./App.css";
import Counter from "./components/counter/Counter";
import Todo from "./components/todo/Todo";
import { Provider } from "react-redux";
import counterReducer from "./redux/reducers/counterReducer";
import todoReducer from "./redux/reducers/todoReducer";

function App() {
 

const topluReducer=combineReducers({counterReducer:counterReducer,todoReducer:todoReducer})
//todo reducer folder i altindaki tüm reducer file lari. combineReducer catisi altinda toplaniyor. valuelar file name. keys are newname. Cocuklar keyleri görecek. yani napiyoruz. tüm Reducerlar combineReducer ile bir araya getiriliyor. daha sonra CombineReducer createStore yapiliyor. store name e atiliyor. provider sarmalinda store props gibi gönderiliyor. bütün cocuklar bütün reducerlari görsün diye. 


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
