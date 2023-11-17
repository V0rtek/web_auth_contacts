const express = require('express');
const db = require('../databases/sqliteInMemory.js');
const {isAuth} = require('../middleware/auth.js');

// eslint-disable-next-line new-cap
const router = express.Router();

/**
 * Route public
 * Connecte toujours peux importe le mot de passe, tant que le email existe.
 */
router.post('/login', function(req, res) {
  const {email} = req.body;
  const sql = 'SELECT * FROM contacts WHERE email = ?';
  db.all(sql, [email], (err, rows) => {
    if (err) return res.status(400).json({'error': err.message});

    return res.json({token: '123456789'});
  });
});

// Route privé
router.get('/contacts', isAuth, function(req, res) {
  const sql = 'SELECT * FROM contacts ORDER BY name';
  db.all(sql, [], (err, rows) => {
    if (err) {
      res.status(400).json({'error': err.message});
      return;
    }
    res.json(rows);
  });
});

// Route privé
router.get('/contacts/:id', isAuth, function(req, res) {
  const sql = 'SELECT * FROM contacts WHERE id = ?';
  db.all(sql, [req.params.id], (err, rows) => {
    if (err) {
      res.status(400).json({'error': err.message});
      return;
    }
    res.json(rows);
  });
});

// Route privé
router.delete('/contacts/:id', isAuth, function(req, res) {
  const sql = 'DELETE FROM contacts WHERE id = ?';
  db.all(sql, [req.params.id], (err, rows) => {
    if (err) {
      res.status(400).json({'error': err.message});
      return;
    }
    res.json(rows);
  });
});

// Route privé
router.put('/contacts', isAuth, async function(req, res) {
  const {id, name, email, phone} = req.body;

  const sql = id === undefined ?
    `INSERT INTO contacts(name, email, phone) 
      VALUES(?,?,?)` :
    `UPDATE contacts SET 
      name=?,
      email=?,
      phone=?        
      WHERE id=?`;
  db.all(sql, [name, email, phone, id], (err, rows) => {
    if (err) {
      res.status(400).json({'error': err.message});
      return;
    }
    res.json(rows);
  });
});


module.exports = router;
