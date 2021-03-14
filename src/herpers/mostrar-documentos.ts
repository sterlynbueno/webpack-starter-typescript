import firebase from 'firebase';
export const retronarDocumento = (snapshop: firebase.firestore.QuerySnapshot) =>{
    const documentos: any[] =[];

    snapshop.forEach( snapHijo => {
       documentos.push ({
            id: snapHijo.id,
            ...snapHijo.data()
        });
        console.log (documentos)
        return documentos;    
    });
}