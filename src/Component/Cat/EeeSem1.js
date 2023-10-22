import React, { useState } from 'react'
import AppChe22 from '../Subjects/AppChe22';
import Cal22 from '../Subjects/Cal22';
// import ProgFun22 from '../Subjects/ProgFun22';
// import Beee22 from '../Subjects/Beee22';
// import EngGra22 from '../Subjects/EngGra22';
import ProfCom22 from '../Subjects/ProfCom22';
import EMI22 from '../Subjects/EMI22'

function EeeSem1() {

    const [display, setDisplay] = useState(<AppChe22 />)
    const AppCheEvent = () => {
        setDisplay(<AppChe22/>)

    }

    const CalEvent = () => {
        setDisplay(<Cal22/>)

    }

    const ProfComEvent = () => {
        setDisplay(<ProfCom22/>)

    }

    const EMIEvent = () => {
        setDisplay(<EMI22/>)
    }
    return (
        <>
            <div className="pyqBodyView">
                <div className="pyqLeftbar">
                    <div className="subList">
                        <ul>
                            <li onClick={AppCheEvent}>Applied Chemistry</li>
                            <li onClick={CalEvent}>Calculus</li>
                            <li onClick={ProfComEvent}>Professional Comm</li>
                            <li onClick={EMIEvent}>EMI</li>
                            {/* <li onClick={ProgFunEvent}>Programming Fundamentals</li> */}
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

export default EeeSem1