export const ValidationService = {
  //expressoes regulares
  cep(cep = ""): boolean {
    // essa expressao regular faz com que seja substituido tudo o que nao for digito (\D) em todo o campo (g) e substituir por uma string vazia ('')
    return cep.replace(/\D/g, "").length === 8;
  },
};
