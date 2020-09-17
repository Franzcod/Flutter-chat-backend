
/**
 * path: api/login
 */


const { Router, response} = require('express');
const router = Router();


router.post('/new', (req, res = response) => {
   
    res.json({
        ok: true,
        msg: 'Crear Usuario'
    })
});

module.exports=router;