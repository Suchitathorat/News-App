import React from 'react'
import './NewsArticle.css'

function NewsArticle({author,title,description,url,urlToImage,publishedAt}) {
  return (
    <div className='news-article-card'>
        <img src={urlToImage} alt='' className='news-article-img' />
        <h1 className='news-article-title'>{title}</h1>
        <div className='article-info'>
            <p className='aticle-author'>{author}</p>
            <p className='author-publishedAt'>{publishedAt}</p>
        </div>

        <p className='article-description'>{description}</p>
        <a className='btn-read-more' href={url} target='blank'>Read More</a>
    
    </div>
  )
}

export default NewsArticle