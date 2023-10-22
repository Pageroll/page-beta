import React, { useState } from 'react'
import AppChe22 from '../Subjects/AppChe22';
import Cal22 from '../Subjects/Cal22';
import ProgFun22 from '../Subjects/ProgFun22';
import Beee22 from '../Subjects/Beee22';
import EngGra22 from '../Subjects/EngGra22';

function EceSem1() {

    const [display, setDisplay] = useState(<AppChe22 />)
    const AppCheEvent = () => {
        setDisplay(<AppChe22/>)

    }

    const CalEvent = () => {
        setDisplay(<Cal22/>)

    }

    const ProgFunEvent = () => {
        setDisplay(<ProgFun22/>)

    }

    const BeeeEvent = () => {
        setDisplay(<Beee22/>)
    }

    const EngGraEvent = () => {
        setDisplay(<EngGra22/>)
    }
    return (
        <>
            <div className="pyqBodyView">
                <div className="pyqLeftbar">
                    <div className="subList">
                        <ul>
                            <li onClick={AppCheEvent}>Applied Chemistry</li>
                            <li onClick={CalEvent}>Calculus</li>
                            <li onClick={BeeeEvent}>BEEE</li>
                            <li onClick={EngGraEvent}>Engineering Graphics</li>
                            <li onClick={ProgFunEvent}>Programming Fundamentals</li>
                        </ul>
                    </div>
                </div>
                <div className="pyqContView">
                    {display}
                </div>
                <div className="pyqRightbar">
                    <div className="subList yearList">
                        <ul>
                            <li>2022</li>
                            {/* <li>2021</li>
                            <li>2020</li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EceSem1