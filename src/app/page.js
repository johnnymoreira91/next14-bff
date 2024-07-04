'use client'

import { useListRobots } from '../infra/graphql/hooks/useListRobots'

export default function Default() {
  const { data, error, loading } = useListRobots();

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
