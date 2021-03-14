import db from './firebase/config';
import {retronarDocumento} from './herpers/mostrar-documentos';
const usuario={
    nombre: 'melisa',
    activo:true,
    fechaNaci:47853
}

const usuarioRef= db.collection('usuarios');
const btnNext = document.createElement('button');
btnNext.innerText = 'Next page';
document.body.append( btnNext)

let lastDocument: any =null;
btnNext.addEventListener('click', () => {
    const query = usuarioRef
        .orderBy('nombre')
        .startAfter(lastDocument)

query.limit(2).get().then(snap =>{
    lastDocument = snap.docs[ snap.docs.length -1];
    retronarDocumento(snap);
})

});
btnNext.click();