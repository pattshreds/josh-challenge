import './App.css';
import ListSpecies from './components/ListSpecies';
import Nav from './components/Nav';
// import ListPeople from './components/ListPeople';
// import Test from './components/Test';


function App() {
    return (
        <div className='App'>
            <Nav />
            <ListSpecies />
            {/* <ListPeople /> */}
            {/* <Test /> */}
        </div>
    );
}

export default App;
