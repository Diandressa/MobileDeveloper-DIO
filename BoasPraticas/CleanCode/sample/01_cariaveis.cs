// 🔠 Use nomes descritivos e consistentes para variáveis, funções e classes.

// ❌ muito subjetivo
string name = 'andressa';

string userName = "andressa";
string productName = 'mouse';

// ❌ muito subjetivo
double tax = 0.1;

//✅ taxa de envio
double sandingTax = 0;
double sendingTaxBase = 0.1;
double sendingTaxMaximum = 1;

// ✨ Evite 'números mágicos', números largados sem contexto.

// ❌ número mágico é um número jogado sem sentido -> subjetivo

if(tax < 2.0){
    //...
}

//✅ números com sentidos semânticos, número nomeados permitem fácil leitura
const double TAX_LIMIT_BY_COUNTRY = 2.0;

if(sandingTax < TAX_LIMIT_BY_COUNTRY){
    //...
}

// sugestão: const em MAIÚSCULO (podemos usar o underline para separação, em vez do camel case) e let em minusculo

//⛔ Evite abreviações que não sejam amplamente conhecidas.

// ❌ muito subjetivo
double myST = 3.0;

//✅ nome mais legível
double userPersonalSendingTax = 3.0;

double rng = 1; //❌ abreviado
double range = 1; //❌ subjetivo - intervalo de que?
double rangeOfDaysToSendingProduct = 1; //✅ específico!