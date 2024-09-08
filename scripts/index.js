// Classe Pessoa
class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
      this.veiculo = null;  // Cada pessoa pode ter um veículo.
    }
  
    comprarVeiculo(veiculo) {
      this.veiculo = veiculo;
      console.log(`${this.nome} comprou um ${veiculo.marca} ${veiculo.modelo}.`);
    }
  
    mostrarDetalhes() {
      const veiculoDetalhes = this.veiculo
        ? ` e possui um veículo: ${this.veiculo.mostrarDetalhes()}` //! Operador Ternário
        : " e não possui veículo."; //! Se for "null", a const = veiculoDetalhes recebe está string.
      return `Pessoa: ${this.nome}, Idade: ${this.idade} anos${veiculoDetalhes}`;
    }
  }

  class Veiculo {
    constructor(marca, modelo) {
      this.marca = marca;
      this.modelo = modelo;
    }
  
    mostrarDetalhes() {
      return `Veículo: ${this.marca} ${this.modelo}`;
    }
  }
  
  const pessoa1 = new Pessoa("Maria", 35);
  const pessoa2 = new Pessoa("João", 40);
  const pessoa3 = new Pessoa("Pedro", 20);
  
  const veiculo1 = new Veiculo("Toyota", "Corolla");
  const veiculo2 = new Veiculo("Honda", "Civic");
  
  pessoa1.comprarVeiculo(veiculo1);
  pessoa2.comprarVeiculo(veiculo2);
  
  console.log(pessoa1.mostrarDetalhes());
  console.log(pessoa2.mostrarDetalhes());
  console.log(pessoa3.mostrarDetalhes());
  