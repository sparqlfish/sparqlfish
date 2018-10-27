# SPARQLfish
GLAMhack 2018

You can try it here: https://sparqlfish.github.io/sparqlfish/

## Putting the spark back into SPARQL

We begin with the observation that a typical SPARQL endpoint is not friendly in the eyes of an average user. Typical users of cultural databases include researchers in the humanities, museum professionals and the general public. Few of these people have any coding experience and few would feel comfortable translating their questions into a SPARQL query.  

Moreover, the majority of the users expect searches of online collections to take something like the form of a regular Google search (names, a few words, or at the top end Boolean operators). This approach to search does not make use of the full potential of the graph-type databases that typically make SPARQL endpoints available. It simply does not occur to an average user to ask the database a query of the type "show me all book authors whose children or grandchildren were artists."

The extensive possibilities that are offered by graph databases to researchers in the humanities go unexplored because of a lack of awareness of their capabilities and a shortage of information about how to exploit them. Even those academics who understand the potential of these resources and have some experience in using them, it is often difficult to get an overview of the semantics of complex datasets. 

We therefore set out to develop a tool that: 
  * simplifies the entry point of a SPARQL query into a form that is accessible to any user
  * opens ways to increase the awareness of users about the possibilities for querying graph databases
  * moves away from purely text-based searches to interfaces that are more visual
  * gives an overview to a user of what kinds of nodes and relations are available in a database
  * makes it possible to explore the data in a graphical way 
  * makes it possible to formulate fundamentally new questions
  * makes it possible to work with the data in new ways
  * can eventually be applied to any SPARQL endpoint
