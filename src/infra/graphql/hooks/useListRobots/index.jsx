// 'use client'
import { gql, useQuery } from '@apollo/client';

const GET_ROBOTS = gql`
  query ListRobots {
    listRobots {
      id
      name
      type
      uuid
  }
}
`;

const { loading, error, data } = useQuery(GET_ROBOTS);

export {
  loading,
  error,
  data
}