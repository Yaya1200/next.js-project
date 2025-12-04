import getallusers from '../lib/getallusers';
import UserItems from './useritem';

export default async function PropertiesPage() {
  const data = await getallusers();

  return (
    <div>
      {data.map((element: { id: number; name: string }) => (
        <UserItems key={element.id} id={element.id} name={element.name} />
      ))}
    </div>
  );
}


