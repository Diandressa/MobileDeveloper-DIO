//importar tudo dentro do arquivo
// as - da um apelido para tudo que está sendo importado, guarda tudo dentro de database
import * as database from './utils/database.js'

database.connectToDatabase("my-database");
database.disconnectDatabase();
