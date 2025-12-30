import gql from "graphql-tag";

const typeDefs = gql`
  type Query {
    getSeries(offset: Int): SeriesResponse
  }

  type SeriesResponse {
    status: String
    data: [Series]
  }

  type Series {
    id: String
    name: String
    startDate: String
    endDate: String
    odi: Int
    t20: Int
    test: Int
    squads: Int
    matches: Int
  }
`;

export default typeDefs;
