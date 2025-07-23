//desestruturação é mais recomendado: traz os arquivos desejados somente
import { disconnectDatabase, databaseType } from './utils/database.js'

//importando o modulo que usei export default

//import { getDataFromApi } from './utils/api.js'
import * as api from './utils/api.cjs'

api.getDataFromApi();