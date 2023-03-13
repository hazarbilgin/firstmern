const express = require("express");
const {
  notOlustur,
  notGetir,
  notSil,
  notGüncelle,
} = require("../controllers/notController");

const { notlarGetir } = require("../controllers/notController");

const router = express.Router();

const NotModel = require("../models/notModel");
//hepsini getir
router.get("/", notlarGetir);
//getir
router.get("/:id", notGetir);
//ekle
router.post("/", notOlustur);
//sil
router.delete("/:id", notSil);
//güncelle
router.patch("/:id", notGüncelle);
module.exports = router;
