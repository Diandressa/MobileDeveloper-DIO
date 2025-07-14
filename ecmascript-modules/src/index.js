//desestruturação é mais recomendado: traz os arquivos desejados somente
import { disconnectDatabase, databaseType } from './utils/database.js'

disconnectDatabase();
console.log(databaseType)
