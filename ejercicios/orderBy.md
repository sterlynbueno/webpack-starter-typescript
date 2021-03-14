organizacion de los registros
... const usuarioRef= db.collection('usuarios'); usuarioRef.orderBy('usuario') .get().then(retronarDocumento)

.....