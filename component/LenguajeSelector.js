import React from "react";
import { useRouter } from "next/router";

export default function LeguajeSelector (){
    const router = useRouter();
    console.log(router)
    const changeLang = (e) => {
    router.push(router.pathname, router.pathname,{
        locale: e.target.value
    })
    }
    
    return(
        <select onChange={changeLang} className="btn btn-secondary">
            <option value="es">Español</option>
            <option value="en">Ingles</option>
        </select>
    )
}