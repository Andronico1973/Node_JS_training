
const fs = require('fs');
const colors =  require('colors');
const crearArchivo = async( base = 5, listar = false, hasta =10 ) => {

    try {
        
    
    let salida = '';
    let consola = '';

    for( let i = 1; i <= hasta; i++) {
        consola += (`${ base } ${ 'x'.red} ${ i } ${ '='.red } ${ base * i }\n`);
        salida += (`${ base } x ${ i } = ${ base * i } \n`);
    }

    if ( listar ) {
        console.log('==================='.red);
        console.log('   Tabla del:'.green,   colors.blue( base));
        console.log('==================='.red);
        console.log(consola);
     }
    
    fs.writeFileSync( `./salida/tabla- ${ base }.txt`, salida);
    
    return `tabla- ${ base }.txt creada`;

    } catch (err) {
        throw err;
    }

    
}

module.exports = {
    crearArchivo 
}



