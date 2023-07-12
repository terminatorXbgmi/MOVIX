import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_APP_Gautam_Pareek;

const headers  = {
    /// here this space is very imporant 
    Authorization: "bearer "+ TMDB_TOKEN, 
};
export const fetchDataFromApi = async(url ,params) => {
    try{
        const{data}  = await axios.get(BASE_URL + url,{
            headers,
            params,
        }); 
        return data;
    } catch (err){
        //  console.log(err);
         return err;
    }
};
