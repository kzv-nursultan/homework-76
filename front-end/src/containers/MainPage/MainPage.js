import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PostHandler from '../../components/PostHandler/PostHandler';
import FormBlock from '../FormBlock/FormBlock';


const MainPage = () =>{

    const [posts, setPosts] = useState([]);
    const [newDate, setNewDate] = useState(['http://localhost:8000/messages?datetime=2021-03-14T04:08:33.163Z']);
    const url = ' http://localhost:8000/messages';
            
    const GetDataFromApi = async () =>{
        const response = await fetch(url);
        if(response.ok) {
            const newPosts = await response.json();
            setPosts(newPosts);
        };
    };

    useEffect(()=>{
        GetDataFromApi().catch(console.error);
    },[]);


    useEffect(()=>{
        setInterval(async() => {
            const response = await axios.get(newDate);
            if (response.data) {
                console.log(response.data);
                if (response.data.length>0) {
                    const newDateCopy = newDate;
                    newDateCopy[0] = 'http://localhost:8000/messages?datetime='+
                                    (response.data[response.data.length-1].date);
                    setNewDate(newDateCopy);
                    GetDataFromApi();
                };
            };
        }, 4000);
    },[newDate]);


    return(
        <>
        <FormBlock
        url={url}/>
        {posts.map(post=>(
          <PostHandler 
          key = {post.id}
          author = {post.author}
          message = {post.message}
          date = {post.datetime}/>
        ))}
        </>
    );
};

export default MainPage;