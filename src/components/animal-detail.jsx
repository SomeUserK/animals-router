import { Link, useParams } from 'wouter';
import { animals } from '../../data.js';

export default function AnimalDetail() {
  const { id: animalId } = useParams();
  const animal = animals.find(a => a.id === parseInt(animalId));

  if (!animal) {
    return (
      <div>
        <h2>Animal no encontrado</h2>
        <Link to="/animals">Volver a atras</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Detalle del animal</h2>
      <div>
        <h2>{animal.name}</h2>
        <p>{animal.description}</p>
        <Link to="/animals">Volver a atras</Link>
      </div>
    </div>
  );
}
