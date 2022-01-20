import React from 'react';
import NewsCards from '../NewsCards/NewsCards';
import InstructCards from './InstructCards';
import infoCards from '../Instruction/InfoJson';
const Instruction = ({ articles , activeArticle }) => {

    if(!articles.length){
        return(
            <>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">

                            <div className="row gy-3">
                                {
                                    infoCards.map((value , index)=>{
                                    return <InstructCards 
                                        key = {index}
                                        title = {value.titles}
                                        info = {value.infos}
                                        text = {value.texts}
                                    />})
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">

                            <div className="row gy-5">
                                {articles.map((articles, i) => (
                                    <NewsCards i={i} articles={articles} activeArticle={activeArticle}/>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </main>

            
        </>
    );
};

export default Instruction;
