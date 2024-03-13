export { useState } from "react"

export default function Main (){
    const [nome, setNome] = useState("");
    return(
        <Main>

           <input type="text" nome="nome" id="" onChange={(event) => setNome(event.target.value)} />

        </Main>
    )
}