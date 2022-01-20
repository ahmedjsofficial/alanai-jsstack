import React, { useEffect , useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import wordsToNumbers from 'words-to-numbers';
import Instruction from '../src/components/Instruction/Instruction.js';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import { NavLink } from 'react-router-dom';

import logo from '../src/Logo/Code.png';
import thumbnail from "../src/Logo/alan.jpg";

const alanKey = '6bab60b4b7f1a89658a96ffa94e107552e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
    const [activeArticle, setActiveArticle] = useState(-1);
    const [newsArticles, setNewsArticles] = useState([]);

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles, number }) => {
                if (command === 'newHeadlines') {
                  setNewsArticles(articles);
                  setActiveArticle(-1);
                }else if (command === 'highlight') {
                  setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
                } else if (command === 'open') {
                  const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
                  const article = articles[parsedNumber - 1];
        
                  if (parsedNumber > 20) {
                    alanBtn().playText('Please try that again...');
                  } else if (article) {
                    window.open(article.url, '_blank');
                    alanBtn().playText('Opening...');
                  } else {
                    alanBtn().playText('Please try that again...');
                  }
                }
            },
        });
    }, []);

    return (
        <>
            <div className="text-center container-fluid">
            <div className="alanThumbnail_div">
                <img src={thumbnail} className="img-fluid alanThumbnail" alt={thumbnail} />
              </div>
              {newsArticles.length ? (
                <div className="container">                  
                  <div className="row gy-3">
                    <div className="col-lg-4 col-md-4 col-sm-10 col-10 mx-lg-auto mx-md-auto mx-sm-auto mx-auto">
                        <div className="inst_card_body">
                          <h3>
                            Follow this Instruction
                            <div className="dropdown-divider"></div>
                            Open the Article Number <br/>AS You Wants
                          </h3>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-10 col-10 mx-lg-auto mx-md-auto mx-sm-auto mx-auto">
                      <div className="inst_card_body">
                        <h3>
                          Follow this Instruction
                          <div className="dropdown-divider"></div>
                          Go Back
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
            <Instruction articles={newsArticles} activeArticle={activeArticle} />

            {!newsArticles.length ? (
              <footer>
                <div className="container">
                  <h4>
                    <strong>Created By</strong> 
                    <NavLink className="btn-link" to="https://www.instagram.com/"> Muhammad Ahmed</NavLink>
                    <NavLink className="btn-link" to="https://www.youtube.com/" target="_blank"> Coding Maina</NavLink>
                    <img src={logo} className="img-fluid footer-logo" alt="footer img" to="" />
                  </h4>
                </div>
              </footer>
            ) : null}
        </>
    )
}

export default App;
