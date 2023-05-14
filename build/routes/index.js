"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const http_status_codes_1 = require("http-status-codes");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/home', (_, res) => {
    res.send({ api: 'API V 1.0.0' });
});
router.post('/:id', (req, res) => {
    const { nome } = req.body;
    const { id } = req.params;
    res.status(http_status_codes_1.StatusCodes.ACCEPTED).json({ id: id, nome: nome });
});
