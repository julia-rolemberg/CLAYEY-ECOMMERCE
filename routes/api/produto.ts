import express = require("express");
import wrap = require("express-async-error-wrapper");
import Produto = require("../../models/produto");

const router = express.Router();

router.get("/listar", wrap(async (req: express.Request, res: express.Response) => {
	let lista = await Produto.listar();

	res.json(lista);
}));

export = router;