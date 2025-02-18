import axios from 'axios';
import { useEffect, useState } from "react";

const base_url='https://softsolutionz.in/satya/Admin/Mobile/';

export function GetList(url){
    return axios.get(`${base_url}${url}`).then((result)=>{
        console.log('GetList', result);
        return result.data;
    })
}

export function GetItem(url, id){
    return axios.get(`${base_url}${url}/${id}`).then((result)=>{
        console.log('GetItem', result);
        return result.data;
    })
}

export function CreateItem(url, postData){    
    return axios.post(`${base_url}${url}`, postData)
        .then((result) => {
            console.log('CreateItem', result);
            return result.data;
        });        
}

export function UpdateItem(url, id, postData){    
    return axios.put(`${base_url}${url}/${id}`, postData)
        .then((result) => {
            console.log('UpdateItem', result);
            return result;
        });        
}

export function DeleteItem(url, id){
    return axios.delete(`${base_url}${url}/${id}`).then((result)=>{
        console.log('DeleteItem', result);
        return result;
    })
}

// Old Methods Dont use

export function GetList_old(url){
    const [data, setData] = useState([]);
    let httpOptions = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        }
    };

    useEffect(()=>{
        fetch(`${base_url}${url}`, httpOptions)
        .then((res) => res.json())
        .then((result) => setData(result));
    },[url]);

    console.log('GetList', data);
    
    return data;
}

export function CreateItem_old(url, postData){
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.post(`${base_url}${url}`, postData)
        .then((result) => setData(result));
    },[url]);
    console.log('CreateItem', data);
    return data;
}


