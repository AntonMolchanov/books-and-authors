import './assets/styles/App.scss';
import Header from "./components/Header/Header";
import AppRoutes from "./routes/AppRoutes";
import {FC} from "react";

const App: FC = () => {
    return (
        <div className="App">
            <Header/>
            <AppRoutes/>
        </div>
    );
}

export default App;
