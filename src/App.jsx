import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Exercise from "./screens/Exercise";

// class App extends React.Component {
//   render() {
//     return(
//       <ApolloProvider client={client}>
//         <Exercise />
//       </ApolloProvider>

//     )
//   }
// }
// export default App;

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:3001/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <>
      <ApolloProvider client={client}>
        <Exercise />
      </ApolloProvider>
    </>
  );
}

export default App;
