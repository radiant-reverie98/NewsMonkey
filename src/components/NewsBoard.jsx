import { useEffect } from 'react';
import React, { useState } from 'react'
import NewsItem from "./NewsItem";


export default function NewsBoard(props){
  const [page,setPage] = useState(1);
  const[totalResult,setTotalResult] = useState(0);
    const [article,setArticle] = useState([]);
    const api = async() =>{
        const url = "https://newsapi.org/v2/top-headlines?category=sports&apiKey=c9b2482b5da24654a2e729b8d68be333&pageSize=20";

        const data = await fetch(url);
        const result = await data.json();
        //console.log(result.articles);
        setArticle(result.articles);
        console.log(result.totalResults);
        setTotalResult(result.totalResults);
        //console.log(result.articles[0]);
    };
    const handleNextClick = async() =>{
      if((Math.ceil(totalResult/20))>page){
        setPage(prevPage => {
          const newPage = prevPage + 1; // Calculate the new page value
  
          console.log("New Page:", newPage); // Correct logging
  
          fetchNews(newPage); // Call function to fetch news with the correct page
  
          return newPage; // Return new state
        });
      }
      
    }
    const handlePrevClick = async() =>{
      setPage(prevPage => {
        const newPage = prevPage - 1; // Calculate the new page value

        console.log("New Page:", newPage); // Correct logging

        fetchNews(newPage); // Call function to fetch news with the correct page

        return newPage; // Return new state
      });
    }
      const fetchNews = async (pageNum) => {
        const url = `https://newsapi.org/v2/top-headlines?category=sports&apiKey=c9b2482b5da24654a2e729b8d68be333&page=${pageNum}&pageSize=10`;
    
        const data = await fetch(url);
        const result = await data.json();
        setArticle(result.articles);
    };
    useEffect(()=>{
      api();
    },[]);



  return (
    <div>
      <h1 className={`text-${props.mode === 'primary'?'dark':'light'} my-4`}>Top Headlines</h1>
      <div className = "row">
      {article.map((news,index)=>{
        return <div className="col-md-4 my-3" key={index}>
            <NewsItem page={props.page} mode={props.mode} title = {news.title ?news.title :"No Title Available"} desc = {news.description? news.description.slice(0,80): "No description available"} img = {news.urlToImage} url = {news.url}/>
            </div>
      })}
      </div>
      <div className="container d-flex justify-content-between">
      <button type="button" disabled ={page<=1} className={`btn btn-${props.mode === 'primary'?'dark':'primary'}`} onClick = {handlePrevClick}>Previous</button>
      <button type="button" className={`btn btn-${props.mode === 'primary'?'dark':'primary'}`} onClick ={handleNextClick} disabled ={((Math.ceil(totalResult/20))<=page)}>Next</button>
      </div>
    </div>

  )
}
