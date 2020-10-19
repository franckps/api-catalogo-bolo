
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('bolo').del()
      .then(function () {
        // Inserts seed entries
        return knex('bolo').insert([
          {imagem: 'Bolo de Ameixa.jpg', nome: 'Bolo de Ameixa', descricao: 'Massa fofinha a base de farinha de trigo selecionada e pasta de ameixas pretas. Ideal para um café da tarde com chás e bebidas cítricas.', quantidade: 3, preco: 15.00},
          {imagem: 'Bolo de Banana com Canela.jpg', nome: 'Bolo de Banana com Canela', descricao: 'Duas vezes premiado pela revista Veja SP, nosso Bolo de Banana com Canela é uma receita exclusiva, com pedaços de bananas frescas misturadas a massa super fofinha e deliciosa casquinha crocante por fora.', quantidade: 3, preco: 15.00},
          {imagem: 'Bolo de Churros.jpg', nome: 'Bolo de Churros', descricao: 'Massa super fofinha a base de farinha de trigo enriquecida com ferro e ácido fólico, com generoso toque de canela e muuuita cobertura de doce de leite.', quantidade: 3, preco: 15.00},
          {imagem: 'Bolo de Paçoquita.jpg', nome: 'Bolo de Paçoquita', descricao: 'Nosso bolo feito com Paçoquita original, tem o super poder de deixar qualquer dia mais gostoso. Massa fofinha, cobertura de doce de leite e muuuita Paçoquita.', quantidade: 3, preco: 15.00},
          {imagem: 'Bolo de Cenoura.jpg', nome: 'Bolo de Cenoura', descricao: 'O Bolo de Cenoura é um clássico que não pode faltar na hora do lanche. Muito saboroso, nutritivo e leve, vai bem com chá, cafezinho fresco ou suco de frutas.', quantidade: 3, preco: 15.00},
          {imagem: 'Bolo de Cenoura com Gotas de Chocolate.jpg', nome: 'Bolo de Cenoura com Gotas de Chocolate', descricao: 'Nosso tradicional Bolo de Cenoura, fofinho e ainda mais gostoso com gotas de chocolate. ', quantidade: 3, preco: 15.00},
          {imagem: 'Bolo de Chocolate.jpg', nome: 'Bolo de Chocolate', descricao: 'Nada melhor que um bolo de chocolate bem fofinho para deixar o dia mais gostoso, né? Nossa receita exclusiva tem alta concentração de cacau e sabor único.', quantidade: 3, preco: 15.00},
          {imagem: 'Bolo de Coco.jpg', nome: 'Bolo de Coco', descricao: 'Deixe o café da tarde ou café da manhã mais saborosos com nosso bolo tradicional de coco. Receita exclusiva com crocante de coco e coco fresco misturado à massa.', quantidade: 3, preco: 15.00},
          {imagem: 'Bolo Formigueiro.jpg', nome: 'Bolo Formigueiro', descricao: 'Em dúvida do que oferecer para os convidados no café da tarde? Nossa receita exclusiva de bolo formigueiro é uma opção deliciosa para reunir amigos e família. Fofinho e com chocolate na medida certa.', quantidade: 3, preco: 15.00},
          {imagem: 'Bolo de Fubá.jpg', nome: 'Bolo de Fubá', descricao: 'Bolo típico das festas juninas Brasil a fora, o nosso bolo de fubá é uma receita exclusiva e cheia de sabor, para se comer o ano todo, de preferência acompanhado de um café fresquinho e boas histórias!', quantidade: 3, preco: 15.00},
          {imagem: 'Bolo de Fubá com Erva Doce.jpg', nome: 'Bolo de Fubá com Erva Doce', descricao: 'Esse é aquele bolo de fubá clássico da vovó, uma receita cheia de sabor e memória afetiva, com erva doce, muito amor e ingredientes selecionados.', quantidade: 3, preco: 15.00},
          {imagem: 'Bolo de Fubá com Goiabada.jpg', nome: 'Bolo de Fubá com Goiabada', descricao: 'Bolo de fubá fresquinho, feito com ingredientes selecionados e generosos pedaços de goiabada para deixar nosso clássico ainda mais gostoso.', quantidade: 3, preco: 15.00},
          {imagem: 'Bolo de Fubá Crocante.jpg', nome: 'Bolo de Fubá Crocante', descricao: 'Receita exclusiva e fofinha com casquinha crocante e erva doce encorpada à massa. Ideal para acompanhar aquele cafezinho ou chá da tarde.', quantidade: 3, preco: 15.00},
          {imagem: 'Bolo de Goiabada.jpg', nome: 'Bolo de Goiabada', descricao: 'Super fofinho, a base de farinha de trigo e muuuita goiabada fresquinha encorpada a massa. Surpreenda-se!', quantidade: 3, preco: 15.00},
          {imagem: 'Bolo de Iogurte.jpg', nome: 'Bolo de Iogurte', descricao: 'Que iogurte é uma delícia e muito nutritivo, o mundo inteiro já sabe. Imagine todo esse sabor e cremosidade fazendo parte de um delicioso bolo Tradicional!', quantidade: 3, preco: 15.00},
          {imagem: 'Bolo de Iogurte com Limão Siciliano.jpg', nome: 'Bolo de Iogurte com Limão Siciliano', descricao: 'O encontro da leveza com a doçura, em equilíbrio com o sabor azedinho e fresco do limão siciliano. Convide os amigos e passe o café, é sucesso garantido.', quantidade: 3, preco: 15.00},
          {imagem: 'Bolo de Laranja.jpg', nome: 'Bolo de Laranja', descricao: 'O bolo de laranja Tradicional tem sabor e aroma irresistíveis. Feito com laranjas fresquinhas e selecionadas, é perfeito para o café da manhã, chá da tarde ou lanchinho no trabalho.', quantidade: 3, preco: 15.00},
          {imagem: 'Bolo de Limão.jpg', nome: 'Bolo de Limão', descricao: 'Se você quer uma sobremesa sofisticada para deixar o café da tarde ainda mais especial, nosso bolo de limão é a aposta certa! Massa leve, raspas de limão e os melhores ingredientes.', quantidade: 3, preco: 15.00},
          {imagem: 'Bolo de Maçã com Canela.jpg', nome: 'Bolo de Maçã com Canela', descricao: 'Casamento perfeito de maçã com canela. Massa super leve e fofinha, feita sem leite, com pedaços de maçãs fresquinhas e deliciosa casquinha crocante com canela.', quantidade: 3, preco: 15.00},
          {imagem: 'Bolo de Maçã com Canela e Nozes.jpg', nome: 'Bolo de Maçã com Canela e Nozes', descricao: 'Essa versão do nosso bolo de maçã com canela é especial para quem adora nozes, que dão o toque especial para a receita, garantindo textura e sabor surpreendentes.', quantidade: 3, preco: 15.00},
          {imagem: 'Bolo de Mandioca.jpg', nome: 'Bolo de Mandioca', descricao: 'Uma deliciosa receita que lembra as tardes da infância na casa dos avós. O nosso bolo de mandioca é feito sem farinha de trigo e com toque especial de coco ralado.', quantidade: 3, preco: 15.00},
        ]);
      });
  };
  