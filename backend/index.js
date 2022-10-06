const upper_case = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const lower_case = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

const symbols = ['!', '@', '#', '$', '%', '&', '*', '(', ')', '-', '_', '=', '+', '~', '^', ';', ':', '[',
'{', '}', ']', '?', '/', '>', '<', '|']

function generate(){
    let displaySenha = document.getElementById('PwdGenerator')
    let _input_size = document.getElementById('input_size')
    let _input_upper = document.getElementById('upper')
    let _input_lower = document.getElementById('lower')
    let _input_numb = document.getElementById('Numbers')
    let _input_symb = document.getElementById('Symbols')

    let denominator = 0
    

    if (_input_upper.checked || _input_lower.checked || _input_numb.checked || _input_symb.checked){

        _input_size = _input_size.value

    

    console.log(_input_size)
    
    if (_input_upper.checked){
        ++denominator
        console.log('upper ligado')
    }

    if (_input_lower.checked){
        ++denominator
        console.log('Lower ligado')
    }

    if (_input_numb.checked){
        ++denominator
        console.log('Numbers ligado')
    }
    if (_input_symb.checked){
        ++denominator
        console.log('Symbols ligado')
    }

    let division = parseInt(_input_size / denominator)

    let lista = []

    for (let i = 0; i < division; i++){
        if (_input_upper.checked){
            lista.push(upper_case[Math.floor(Math.random() * upper_case.length)])
        } else{
            break
        }
    }

    for (let i = 0; i < division; i++){
        if (_input_lower.checked){
            lista.push(lower_case[Math.floor(Math.random() * lower_case.length)])
        } else{
            break
        }
    }


    for (let i = 0; i < division; i++){
        if (_input_numb.checked){
            lista.push(numbers[Math.floor(Math.random() * numbers.length)])
        } else{
            break
        }
    }

    for (let i = 0; i < division; i++){
        if (_input_symb.checked){
            lista.push(symbols[Math.floor(Math.random() * symbols.length)])
        } else{
            break
        }
    }


    console.log(lista.length)


    while (lista.length < _input_size){
        if (_input_upper.checked){
            lista.push(upper_case[Math.floor(Math.random() * upper_case.length)])
        }

        if (lista < _input_size){
            lista.push(lower_case[Math.floor(Math.random() * lower_case.length)])
        }

        if (lista < _input_size){
            lista.push(numbers[Math.floor(Math.random() * numbers.length)])
        }

        if (lista < _input_size){
            lista.push(symbols[Math.floor(Math.random() * symbols.length)])
        }

    }

    for (let i = lista.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [lista[i], lista[j]] = [lista[j], lista[i]];
    }

    
    let senha = lista.join('')

    displaySenha.value = senha

    console.log(senha)
    
    }else{
        window.alert('Choose a size and enable some option')
    }

    }
    

function copy(){
    let displaySenha = document.getElementById('PwdGenerator')

    displaySenha.select();
    displaySenha.setSelectionRange(0, 99999)
    document.execCommand("copy");


}
