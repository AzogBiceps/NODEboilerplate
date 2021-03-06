/*
Configurer le module de route
*/
  const express = require('express');
  const router = express.Router();
//

/*
Configure MySQL
*/
  const mysql = require('mysql');
  const connexion =mysql.createConnection({
    host       : 'localhost',
    user       : 'root',
    password   : 'root',
    port       : 8889,
    database   : 'NODEboilerplate'
  });
  connexion.connect();
//

/*
Définition du CRUD
*/
  // Create Item: POST
  router.post('/article', (req, res) => {
    /*
      Pour créer un article il faut une valeur pour :
      - titre
      - content
    */
    res.json({ msg: 'Create Article' })
  });
  // Read all Item: GET
  router.get('/article', (req, res) => {
    res.json({ msg: 'Read all Article' })
  });
  // Read one Item: GET
  router.get('/article/:id', (req, res) => {
    res.json({ msg: 'Read one Article' })
  });
  // Update one Item: PUT
  router.put('/article/:id', (req, res) => {
    /*
      Pour éditer un article il faut une valeur pour :
      - titre
      - content
    */
    res.json({ msg: 'Update one Article' })
  });
  // Delete one Item: DELETE
  router.delete('/article/:id', (req, res) => {
    res.json({ msg: 'Delete one Article' })
  });
//


/*
Exporter le module de route
*/
  module.exports = router;
//