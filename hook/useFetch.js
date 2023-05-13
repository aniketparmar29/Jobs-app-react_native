import { useState,useEffect } from "react";
import axios from "axios";
import {RAPID_API_KEY} from '@env';
const rapidApiKey = RAPID_API_KEY
const useFetch = (endpoint,query) =>{
    const [data, setdata] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const [error,setError] = useState(null);
    const axios = require('axios');

const options = {
  method: 'GET',
  url: `https://jsearch.p.rapidapi.com/${endpoint}`,
  headers: {
    'X-RapidAPI-Key':rapidApiKey,
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  },
  params: {...query}
};

const fetchData = async () =>{
    setisLoading(true);

    try{
        const res = await axios.request(options);
        setdata(res.data.data);
        setisLoading(false)
    }catch(err){
        setError(error)
        alert('There is an Error')
    }finally{
        setisLoading(false)
    }
}


useEffect(()=>{
    fetchData();
},[]);

const refetch = () =>{
    setisLoading(true);
    fetchData();
}

return { data,isLoading,error,refetch};

}