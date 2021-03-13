import React, {useState, useEffect} from 'react';
import PostHandler from '../../components/PostHandler/PostHandler';
import FormBlock from '../FormBlock/FormBlock';


const MainPage = () =>{

    const [posts, setPosts] = useState([]);
    const [newDate, setNewDate] = useState(['http://146.185.154.90:8000/messages?datetime=2021-01-18T16:40:27.935Z']);
    const url = ' http://localhost:8000/messages';
            
    const GetDataFromApi = async () =>{
        const response = await fetch(url);
        if(response.ok) {
            const newPosts = await response.json();
            console.log(newPosts);
            setPosts(newPosts);
        };
    };

    useEffect(()=>{
        GetDataFromApi().catch(console.error);
    },[]);


    // useEffect(()=>{
    //     setInterval(async() => {
    //             const request = await fetch(newDate);
    //             const newMessages = await request.json();
    //             if(newMessages.length > 0) {
    //                 const newDateCopy = newDate;
    //                 newDateCopy[0] = 'http://localhost:8000/messages?datetime=' + 
    //                                 (newMessages[newMessages.length-1].datetime)
    //                 setNewDate(newDateCopy);
    //             };
    //     }, 4000);
    // },[newDate]);


    return(
        <>
        <FormBlock
        url={url}/>
        {posts.map(post=>(
          <PostHandler 
          key = {post._id}
          author = {post.author}
          message = {post.message}
          date = {post.datetime}/>
        ))}
        </>
    );
};

export default MainPage;