import { Link } from 'wouter';
import { animals } from '../../data.js';

export default function ListOfAnimals() {
  return (
    <div>
      <Link to="/">Volver a atras</Link>
      <h2>Lista de animales:</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {animals.map(a => (
          <li key={a.id}>
            <Link to={`/animals/${a.id}`}>{a.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
