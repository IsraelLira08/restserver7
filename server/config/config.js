// PUERTO
process.env.PORT = process.env.PORT || 3000;

//ENTORNO
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//CONECCION A LA BASE DE DATOS
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafeteria';
} else {
    urlDB = 'mongodb+srv://admin:ICJmHIMXBzPWYZ8T@cluster0-fnvzt.mongodb.net/cafeteria';
}
process.env.URLDB = urlDB;