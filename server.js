/*
Importer les composants serveur
*/
  const express = require('express');
  const path = require('path');
//

/*
Configuration du serveur
*/
  // Définir les variables serveur
  const server = express();
  const port = 3000;

  // Définition du dossier static du client
  server.set( 'view', __dirname + '/wwww' );
  server.use( express.static(path.join(__dirname, 'www') ) );
//

/*
Lancer le serveur
*/
  server.listen( port, () => console.log(`Serveur listenin on port ${port}`) )
//