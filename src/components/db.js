import Dexie from 'dexie';

const db = new Dexie('myDB');
db.version(1).stores({ favorites: '++id, type, artwork, name, genre, url' });

export default db;