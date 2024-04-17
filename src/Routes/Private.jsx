import { useContext } from "react";
import { ProviderContext } from "../provider/Provider";
import {Navigate,useLocation} from 'react-router-dom'


const Private = ({children}) => {
    const{user,loder,another,setanother,setLoder} = useContext(ProviderContext)
    const location = useLocation();
   
    if(another==true && loder==true){
        console.log(another,loder)
        
        return <span className="loading loading-spinner loading-lg text-center"></span>
    }
    
    
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
    
};

export default Private;