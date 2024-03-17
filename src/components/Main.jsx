import { useState } from "react"


export default function Main(){

const [nome, setNome] = useState("");
const [telefone, setTelefone] = useState("");

    return(
        <main>

        <input
        type="text"
        nome=""
        id=""
        onChange={(event) => setNome(event.target.value)}
        />
        {nome}
        
    
<form>
    <label For ="telefone">Telefone:</label>
    
        <input
        type="tel"
        nome=""
        id=""
        onChange={(event) => setTelefone(event.target.value)}/>
        {telefone}


        <button type="submit">
            <p>aperte</p>
        </button>
        </form>

        
        </main>
);

}