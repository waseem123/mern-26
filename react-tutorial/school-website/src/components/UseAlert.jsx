import { useCallback } from "react";

export default function useAlert(){
    const showAlert = useCallback((message)=>{
        alert(message)
    },[]);
    return showAlert;
}