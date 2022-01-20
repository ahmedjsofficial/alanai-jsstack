import React from 'react';
import '../Instruction/Instructstyle.css';
const InstructCards = (props) => {
    return (
        <>
            <div className="col-lg-3 col-md-6 col-sm-6 col-10 mx-auto mx-lg-0">
                <div className="card card-setting">
                    <div className="card-header card-theme">
                        <h5 className="card-title">{props.title}</h5>
                    </div>
                    <div className="card-body mt-5 card-body-bg">
                        {props.info ? <h5 className="card-text"><strong className="sources">{props.title.split(' ')[2]} </strong> <br />{props.info}</h5> : null}
                    </div>
                    <div className="card-footer card-theme">
                        <h5 className="card-text">Try saying: <br /> <i>{props.text}</i></h5>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InstructCards;
