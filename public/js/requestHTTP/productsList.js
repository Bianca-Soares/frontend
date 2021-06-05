function goBack(){
  window.history.back()
}

  class Pauta {
    constructor(data, hora, sala, processo, nomeParte, cpf, objeto, nomeAdvogado){
      this.data = data;
      this.hora = hora;
      this.sala = sala;
      this.processo = processo;
      this.nomeParte = nomeParte;
      this.cpf = cpf;
      this.objeto = objeto;
      this.nomeAdvogado = nomeAdvogado;
    }
  }