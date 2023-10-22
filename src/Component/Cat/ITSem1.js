import React, { useState } from 'react'
// import AppChe22 from './Subjects/AppChe22';
import Cal22 from '../Subjects/Cal22';
import ProgFun22 from '../Subjects/ProgFun22';
// import Beee22 from './Subjects/Beee22';
// import EngGra22 from './Subjects/EngGra22';
import QuantPhy22 from '../Subjects/QuantPhy22'
import ProfCom22 from '../Subjects/ProfCom22'
import FundaBT22 from '../Subjects/FundaBT22'
function ITSem1() {

    const [display, setDisplay] = useState(<QuantPhy22 />)
    const QuantPhyEvent = () => {
        setDisplay(<QuantPhy22/>)

    }

    const CalEvent = () => {
        setDisplay(<Cal22/>)

    }

    const ProgFunEvent = () => {
        setDisplay(<ProgFun22/>)

    }

    const ProfComEvent = () => {
        setDisplay(<ProfCom22/>)
    }

    const FundaBTEvent = () => {
        setDisplay(<FundaBT22/>)
    }
    return (
        <>
            <div className="pyqBodyView">
                <div className="pyqLeftbar">
                    <div className="subList">
                        <ul>
                            <li onClick={QuantPhyEvent}>Quantum Physics</li>
                            <li onClick={CalEvent}>Calculus</li>
                            <li onClick={ProfComEvent}>Professional Communication</li>
                            {/* <li onClick={FundaBTEvent}>Fundamentals of Biotechnology</li> */}
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

export default ITSem1