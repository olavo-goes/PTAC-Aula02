import { useState } from "react"



export default function Main(){

const [nome, setNome] = useState("");
const [telefone, setTelefone] = useState("");
const [listaContatos,setContatos] = useState([]);                    // estado inicial para uma lista
const [numero,setNumero] = useState([]);    

const registrar = (event) => {
    event.preventDefault();  // serve para previnir o envio do formulario, ou seja não vai mais enviar o formulario apenas salvas as informações.
    alert("deu certo");
    setContatos([...listaContatos,{
        nomeSalvo: nome,                                      // coloca na lista os usuarios e salva o nome 
        telefone: telefone,    
        numeroSalvo: Numero
    } ]); // modifica a lista e adiciona objetos.

}

console.table(listaContatos);                       // exibe as informações em formato de tabela.

const remover = (id) => {
    const novaLista = listaContatos.filter(
        (contato,index)=>{
            if(index !== id){
                return contato
            }
            else{
                return null 
            }
        }
    );

    setContatos(novaLista);

}


return(
    <main>
        <form onSubmit={registrar}>
        <label htmlFor="nome">nome</label>
    <input
    type="text"
    nome="nome-contato"
    id="nome"
    value={nome}
    onChange={(event) => setNome(event.target.value)}
    />
    {nome}

<label htmlFor="numero">numero</label>
<input
type="nunber"
nome="numero"
id="Numero"
value={numero}
onChange={(event) => setNumero(event.target.value)}
/>
{numero}

<button type="submit">
            <p>Enviar</p>
        </button>


    <label htmlFor ="">telefone:</label>
    
        <input
        type="tel"
        nome="telefone-contato"
        id="telefone"
        value= {telefone}
        onChange={(event) => setTelefone(event.target.value)}/>
        {telefone}


        <button>salvar</button>
        </form>

{listaContatos.map((contato, index) => 

<div key = {index}>

    <p>{contato.nomeSalvo}</p>
    <p>{contato.telefone}</p>

</div>

)}    


{listaContatos.map((contato, index)=>

<div keu = {index}>

<p>{contato.nomeSalvo}</p>
<p>{contato.telefone}</p>
<button onClick={()=> remover (index)}>X</button>

</div>




)}





        </main>
);

}

