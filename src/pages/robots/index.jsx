// 'use server'
// 'use client'
import { data, error, loading } from '../../infra/graphql/hooks/useListRobots'

export default async function ListRobots() {

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <main>
      <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </main>
  );
}