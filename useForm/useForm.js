import { useState } from "react";


export const useForm = (initialForm={}) => {
    
    const [form, setForm] = useState(initialForm)
    const reset=()=>{
        setForm(initialForm);
    }
    const handleChange=(e)=>{
       
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    };


    return [form,handleChange,reset]
}
