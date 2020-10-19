
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('caracteristica').del()
    .then(function () {
      // Inserts seed entries
      return knex('caracteristica').insert([
        {imagem: '', tipo: 'sabor', nome: 'ameixa', descricao: ''},
        {imagem: '', tipo: 'sabor', nome: 'banana', descricao: ''},
        {imagem: '', tipo: 'sabor', nome: 'canela', descricao: ''},
        {imagem: '', tipo: 'sabor', nome: 'churros', descricao: ''},
        {imagem: '', tipo: 'sabor', nome: 'paçoca', descricao: ''},
        {imagem: '', tipo: 'sabor', nome: 'cenoura', descricao: ''},
        {imagem: '', tipo: 'sabor', nome: 'chocolate', descricao: ''},
        {imagem: '', tipo: 'sabor', nome: 'coco', descricao: ''},
        {imagem: '', tipo: 'sabor', nome: 'fubá', descricao: ''},
        {imagem: '', tipo: 'sabor', nome: 'erva doce', descricao: ''},
        {imagem: '', tipo: 'sabor', nome: 'goiabada', descricao: ''},
        {imagem: '', tipo: 'sabor', nome: 'iogurte', descricao: ''},
        {imagem: '', tipo: 'sabor', nome: 'limão', descricao: ''},
        {imagem: '', tipo: 'sabor', nome: 'laranja', descricao: ''},
        {imagem: '', tipo: 'sabor', nome: 'maçã', descricao: ''},
        {imagem: '', tipo: 'sabor', nome: 'nozes', descricao: ''},
        {imagem: '', tipo: 'sabor', nome: 'mandioca', descricao: ''},
      ]);
    });
};
