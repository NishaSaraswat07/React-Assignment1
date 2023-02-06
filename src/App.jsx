import { useState, useEffect } from 'react'
import about from './assets/Meicon.png'
import idea from './assets/idea.jpeg'
import design from './assets/design.png'
import './App.css'


function App() {

  const [activeArticle, useActiveArticle] = useState([
    {
      articleNo: 1,
      title: 'About me',
      discription: 'Currently pursuing Frontend Devloper course from Changemaker Education',
      img: about,
      discription2: 'Till now i have learnt html,css and javascript and the journey is still on and trying my best to learn React javascript framework.'
    },
    {
      articleNo: 2,
      title: 'Idea',
      discription: 'I have may ideas for my first personal project like Random number generator or a randome picture generator as we have learnt to use API in our previous javascript course!',
      img: idea
    },
    {
      articleNo: 3,
      title: 'Design Style',
      discription: 'I will try to make something simple and will take insperation from this design!',
      img: design
    }
  ]);

  const [itemPerPage,setItemPerapge] = useState(1)
  const [page, setPage] = useState({
    startPage: 0,
    endPage: itemPerPage
  });

  const [counter, setcounter] = useState(1);
  const onPagechange = (start, end) => {
    console.log(start, end);
    setPage({ startPage: start, endPage: end });
  }
  useEffect(() => {
    const value = itemPerPage * counter;
    // console.log('start value:'+ (value-page.endPage));
    // console.log('end value:'+ value);
    onPagechange(value - itemPerPage, value);
  }, [counter]);

  const buttonClick = (type) =>{
    if(type === 'pre'){
        if(counter === 1){
            setcounter(1);
        }else{
          setcounter(counter-1);
        }
    }else if(type === 'next'){
      console.log(activeArticle.length)
      if(counter === activeArticle.length){
        setcounter(3);
      }else{
        setcounter(counter+1);
      }
    }
    }
  
  return (
    <>
      <article className="aboutme">
        {activeArticle.slice(page.startPage, page.endPage).map((article) => {
          return (
            <div key={article.articleNo}>
              <div className='article'>
                <h1>{article.title}</h1>
                <p>{article.discription}</p>
                <div className='image'>
                  <img src={article.img} height='400' width='320' />
                </div>
                <p>{article.discription2}</p>
              </div>
            </div>
          )
        })}
      </article>
      <div className="button">
        <button onClick={() => buttonClick('pre')}> Previous </button>
        <button onClick={() => buttonClick('next')}>Next</button>
      </div>
    </>
  )
}

export default App
