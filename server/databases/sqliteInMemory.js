const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(':memory:', (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message);
    throw err;
  } else {
    console.log('Connected to the SQLite database.');
    db.run(`CREATE TABLE contacts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            phone TEXT NOT NULL
        )`,
    (err) => {
      if (err) {
        // Table already created
      } else {
        // Table just created, creating some rows
        const insert = `INSERT INTO contacts 
        (name, email, phone) VALUES (?,?,?)`;
        db.run(insert, [
          'Kevin Bessette',
          'kbessette@cstjean.qc.ca',
          '555-555-5555',
        ]);
        db.run(insert, [
          'Monsieur Administrateur',
          'administrateur@cstjean.qc.ca',
          '444-444-4444']);
        db.run(insert, [
          'Monsieur Modérateur',
          'moderateur@cstjean.qc.ca',
          '333-333-3333']);
        db.run(insert, [
          'Monsieur Utilisateur',
          'utilisateur@cstjean.qc.ca',
          '333-333-3333']);
      }
    });
  }
});


module.exports = db;
