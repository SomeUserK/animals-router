import { Switch, Route, Link } from 'wouter';
import ListOfAnimals from './components/list-of-animals';
import './App.css';
import AnimalDetail from './components/animal-detail';
import fn404 from './components/404';

function App() {
  return (
    <Switch>
      <Route path="/">
        <h1>Bienvenida</h1>
        {/* Link sirve para crear una SPA, reemplaza los anchor '<a>' y cambia el 'href' por 'to' */}
        <Link to="/animals">Ir a animales ➡</Link>
      </Route>
      <Route path="/animals" component={ListOfAnimals} />
      {/* <Route path="/animals/:id">
        {params => <AnimalDetail animalId={params.id} />}
      </Route> */}
      <Route path="/animals/:id" component={AnimalDetail} />
      <Route path="/*" component={fn404} />
    </Switch>
  );
}

export default App;
