db.produtos.find({ 
    nome: { $regex: "Mc" },
 }, { nome: 1 })
  .count();
