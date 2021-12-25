import './assets/styles/App.scss';
import Header from "./components/Header/Header";
import AppRoutes from "./routes/AppRoutes";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {booksOperations} from "../redux/features/books";

function App() {

    return (
        <div className="App">
            <Header/>
                <AppRoutes/>
        </div>
    );
}

export default App;
