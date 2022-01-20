import React, { useState, useEffect, createRef } from 'react';
import { NavLink } from 'react-router-dom';
import '../NewsCards/styles.css';
import classNames from 'classnames';

import useStyles from './styles';



const NewsCards = ({ articles: { description, publishedAt, source, title, url, urlToImage }, i , activeArticle }) => {
    const classes = useStyles();

    const [elRefs, setElRefs] = useState([]);
    const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);
  
    useEffect(() => {
      window.scroll(0, 0);
  
      setElRefs((refs) => Array(20).fill().map((_, j) => refs[j] || createRef()));
    }, []);
  
    useEffect(() => {
      if (i === activeArticle && elRefs[activeArticle]) {
        scrollToRef(elRefs[activeArticle]);
      }
    }, [i, activeArticle, elRefs]);

    return (
        <>      
            <div className="col-lg-4 col-md-6 col-sm-6 col-10 mx-auto mx-lg-0">
                <div ref={elRefs[i]} className="card card_theme">
                    <img src={urlToImage || "https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png"} alt="card img" className="card-img img-fluid" />
                    <div className="card-header card-header-bg">
                        <h6 className="card-subtitle mb-2 text-muted">{(new Date(publishedAt)).toDateString()}</h6>
                        <h6 className="card-subtitle mb-2 text-muted">{source.name}</h6>
                    </div>
                    <div className="card-body news-body-bg">
                        <h5 className="card-title">{title}</h5>
                        <div className="dropdown-divider"></div>
                        <h6 className="card-text text-muted">{description}</h6>
                    </div>
                    <div className={classNames(classes.card_footer, activeArticle === i ? classes.activeCard : null)}>
                        <NavLink id="hoverLink" to={url} className={classNames(classes.navLink, activeArticle === i ? classes.activeLink : null)}>Learn More</NavLink>
                        <h4 to="" className={classNames(classes.index, activeArticle === i ? classes.activeIndex : null)}>{i + 1}</h4>
                    </div>
                </div>
            </div>            
        </>
    );
};

export default NewsCards;
