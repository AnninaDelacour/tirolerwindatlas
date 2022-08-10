import './App.css';
import WindMap from "./components/WindMap";
import NavHeader from './components/NavHeader';
import {Container} from "react-bootstrap";


function App() {
    return (
        <Container fluid>
            <div className="App">
                <NavHeader/>
                <WindMap/>
            </div>
        </Container>
    );
}

export default App;
