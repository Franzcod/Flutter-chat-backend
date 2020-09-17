

const validarCampos = () => {

    const errores = validationResult(req);

    if(!errores.isEmpty()){
        return res.status(400).json({
            ok: false,
            errors: errores.mapped()
        })
    }

}


module.exports = {
    validarCampos
}