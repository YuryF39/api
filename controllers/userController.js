export function usuariosGet(nombre,apellidos,edad) {

    try {
        const usuario = {
            msg : 'Usuario encontrado',
            nombre,
            apellidos,
            edad
        };

        return usuario;
    } catch (error) {
        console.log('Error al traer el usuario');
        throw error;
    }
}

export function usuariosPost(nombre,apellidos,edad) {

    try {
        const usuario = {
            msg : 'Usuario creado',
            nombre,
            apellidos,
            edad
        };

        return usuario;
    } catch (error) {
        console.log('Error al crear el usuario');
        throw error;
    }
} 

export function usuariosPut(id){
    try {
        const usuario = {
            msg: 'Usuario encontrado para editar',
            id
        };
        return usuario;
    } catch (error) {
        console.log('Error al editar el usuario');
        throw error;
    }
}

export function usuariosPatch(id){
    try {
        const usuario = {
            msg: 'Usuario encontrado para actualizar',
            id
        };
        return usuario;
    } catch (error) {
        console.log('Error al actualizar usuario');
        throw error;
    }
}

export function usuariosDelete(id){
    try {
        const usuario = {
            msg: 'Usuario eliminado correctamente',
            id
        };
        return usuario;
    } catch (error) {
        console.log('Error al eliminar al usuario');
        throw error;
    }
}
