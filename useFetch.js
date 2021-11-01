import { useEffect, useRef, useState } from 'react'

export const useFetch = (url) => {
    const [data, setData] = useState({
        data:null,
        error:null,
        loading:true
    });
    const isMounted= useRef(true);
    useEffect(() => {

        return () => {
            isMounted.current=false;
        }
    }, []);

    useEffect(()=>{
        setData({
            data:null,
            error:null,
            loading:true,
        })
        fetch(url).then(resp=>resp.json()).then(data=>{
            if(isMounted.current){
                setData({
                    data,
                    loading:false,
                    error:null
                })
            }
            
        }).catch(()=>{
            setData({
                data:null,
                error:'No se encontro',
                loading:'false',
            })
        });
    },[url]);

    return data;
    
}

