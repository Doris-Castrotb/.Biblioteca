import{ autor }from "./autor"
import { Copia } from "./copia"
import { lector } from "./lector"
import { libro } from "./libro"


const jesusar=new autor( "jesus", "mexico", 26_02_2006)
console.log(jesusar);

const algebra=new libro("quimica","geometria analitica","poder","programador dedicado 2315",1989)
console.log(algebra);

const jesusarau=new lector(9999,"Jesus arau garcia",2294489350,"calle vicente luna SN colonia limonaria",34066910421)
console.log(jesusarau);

const Juan_rulfo= new libro("mexicano","el llamno en llamas","biografia","gallo de oro",1917)
console.log(Juan_rulfo);
