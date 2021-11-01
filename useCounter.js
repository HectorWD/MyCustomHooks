import { useState } from 'react'


export const useCounter = (initialValue=0) => {
    const [numero, setNumero] = useState(initialValue);

    const incrementar=(factor=1)=>{
        setNumero(numero+factor);
    }
    const decrementar=(factor=1)=>{
        setNumero(numero-factor);
    }
    const reset=()=>{
        setNumero(initialValue);
    }
    return{
        numero,
        incrementar,
        decrementar,
        reset
    }
}

