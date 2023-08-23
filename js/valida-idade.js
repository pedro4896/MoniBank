export default function ehMaiordeIdade(campo){
    const dataNascimento = new Date(campo.value);
    if(!validaIdade(dataNascimento)){
        campo.setCustomValidity('O usuário não é maior de idade')
    }
}

function validaIdade(data){
    const dataAtual = new Date()
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate()); //pega a data inserida e atribui +18 anos
    return dataAtual >= dataMais18;
}