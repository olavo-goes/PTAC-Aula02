import { useState } from "react"

export default function Main (){
    const [nome, setNome] = useState("Nome");
    return(
        <Main>

          <imput
          type="text"
          nome=""
          id=""
          onChenge={(event) => setNome(event.target.value)}
          
          
          
          />


        </Main>
    )
}