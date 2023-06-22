class MeuErro extends Error {
    constructor(message){
        super(message);
        this.name = "Seu codigo contém um erro"
    }
}

class Produto {
    constructor(nome, dataCadastro, descricao, preco) {
        this.nome = nome;
        this.dataCadastro = dataCadastro;
        this.descricao = descricao;
        this.preco = preco;
    }
    mostrarProdutos() {
        try {
          return this.atributos();
        }
        catch(erro) {
          console.log(erro);
        }
        return this.nome +" "+ this.dataCadastro+" "+ this.descricao+" "+ this.preco;
    }
    atributos() {
    if(this.nome != "" && this.dataCadastro != "" && this.descricao != "" && this.preco != "") {
      return {
        nome: this.nome,
        dataCadastro: this.dataCadastro,
        descricao: this.descricao,
        preco: this.preco        
      };
    }
    else
      throw new MeuErro("Erro, algum campo não foi preenchido.");
    
  }
}

class ProdutoDestaque extends Produto {
    constructor(imgDestaque, nome, dataCadastro, descricao, preco) {
        super(nome, dataCadastro, descricao, preco);
        this.imgDestaque = imgDestaque;
    }
    mostrarProdDestaque() {
        return this.imgDestaque+" "+ this.nome+" "+ this.descricao;
    }
}


const produtoDest = new Produto("Coco Ralado em Flocos", "01-04-2022", "O coco é um dos alimentos mais nutritivos para a nossa saúde.", "R$ 39/Kg");
const prodDestaque = new ProdutoDestaque("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.emporionaturalfoods.com.br%2Fprodutos%2Ffava-de-baunilha-unidade%2F&psig=AOvVaw3cOQG3NDVpbT0sJqpqeYw8&ust=1687517769545000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCPiB0t7b1v8CFQAAAAAdAAAAABAI"); 

const produto1 = new Produto("Pêssego Aurora", "23-05-2023", "O pêssego é rico em fibras, bom para o funcionamento do intestino. Contém minerais como fósforo, magnésio, manganês, cobre, iodo e ferro.", "R$ 36/Kg");

const produto2 = new Produto("Linguiça Apimentada", "24-03-2023", "Suculenta, com ingredientes especialmente selecionados e muito mais sabor.", "R$ 230/Kg");

const produto3 = new Produto("Arroz Biju", "24-03-2023", "Numa refeição completa e equilibrada, para um adulto, O arroz é um alimento que preenche cerca de ¼ do prato (cerca de 140g).", "R$ 20,5/5Kg");


console.log(produtoDest.mostrarProdutos(), prodDestaque.mostrarProdDestaque());

let saidaPDest = document.getElementById("produto-destaque");
saidaPDest.innerHTML = 
` 

<div class="d-flex justify-content-center">
    <div class="card mb-3" style="max-width: 90%;">
        <div class="row g-0">
            <div class="col-md-4">
            <img src='${prodDestaque.mostrarProdDestaque()}' class="img-fluid rounded-start">
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title fs-2">${produtoDest.nome}</h5>
                <p class="card-text fs-3 fw-light">${produtoDest.descricao} <br> <span class="text-warning fs-4 fw-normal">${produtoDest.preco}</span>  </p>
                <p class="card-text"><small class="text-body-secondary">${produtoDest.dataCadastro}</small></p>
            </div>
            </div>
        </div>
        </div>
    </div>
</div>
<br><br>
 `;

function prods() {
    return `
    <div class="col">
       <div class="card" style="width: 18rem;">
           <div class="card-body">
               <h5 class="card-title">${produto2.nome}</h5>
           <p class="card-text">${produto2.descricao}</p>
           <a href="#" class="text-warning">${produto2.preco}</a>
           </div>
       </div>
   </div>
    `
}

 let saidaProd = document.getElementById("produtos");
 saidaProd.innerHTML = 
 `

 <br><br><br><br>
 <div class="container text-center">
 <div class="row">
    ${prods()}
    ${prods()}
    ${prods()}

 </div>
</div>
<br><br><br><br>

 `;
