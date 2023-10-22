import React from 'react'
import ckt1 from '../Images/BEEE-1-removebg-preview.png'
import ckt2 from '../Images/BEEE-2-removebg-preview.png'
import ckt3 from '../Images/BEEE-3-removebg-preview.png'
import ckt4 from '../Images/BEEE-4-removebg-preview.png'
import ckt5 from '../Images/BEEE-5-removebg-preview.png'

function Beee22() {
    return (
        <>
            <div className="test">
                <div className="header">
                    BEEE <b>Minor Ques.</b>
                </div>
                <br />
                SEM-1
                <br />
                <br />
                <div className="head">
                    I. Statement Questions:
                </div>
                <br />
                <br />
                <div className="ques">
                    <li>Steps of nortons and superposition theorems</li>
                    <br />
                    <li>Using thevenine's theorem to calculate the current in 10 ohm resistor in this circuit.</li>
                    <br />
                    <img src={ckt1} alt="Circuit" />
                    <br />
                    <br />
                    <li>
                        Use mesh analysis to find currents in all branches of the network shown.
                    </li>
                    <br />
                    <img src={ckt2} alt="Circuit" />
                    <br />
                    <br />
                    <li>Find form factor of the wave given.
                    </li>
                    <br />
                    <img src={ckt3} alt="Circuit" />
                    <br />
                    <br />
                    <li>
                        Find the value of V<sub>A</sub>,V<sub>B</sub> and V<sub>C</sub> in given ckt using nodal analysis
                    </li>
                    <br />
                    <img src={ckt4} alt="Circuit" />
                    <br />
                    <br />
                    <li>
                        Find the values of current I using mesh analysis.
                    </li>
                    <br />
                    <img src={ckt5} alt="Circuit" />
                    <br />
                    <br />
                    <li>
                        What is doping? Explain the mechanism of current flow in a P type semiconductor
                    </li>
                    <br />
                    <li>
                        Derive expression of total current density in a semiconductor.
                    </li>
                    <br />
                    <li>

                        Differentiate between direct bandgap and Indirect bandgap semiconductor. Analyse the importance of forbidden gap in determining the nature of conduction of a
                        material.

                    </li>
                    <br />
                    <li>

                        Describe Hall effect. Explain why the polarity of the Hall voltage changes depending on the conductivity type (n-type and p type) of the semiconductor.

                    </li>
                    <br />
                    <li>

                        Find T, N and B curvature and torsion for the space curve.<br />r(t)=con(t)i + sin(t)j+tk


                    </li>
                    <br />
                    <li>

                        Find the points closest to the origin that lie on the straight line 3x + 4y = 12 using constrained optimization.

                    </li>
                    <br />
                    <li>

                        Find volume of the region common to cylinders x2 + y2 = 1 and x2 +z2 = 1.

                    </li>
                    <br />
                    <li>

                        Find area of the region that lies inside the cardioid r= 1 + cos(theta) and outside the circle r= 1.

                    </li>
                    <br />
                    <li>

                        Find absolute maximum and minimum values of f(x, y) = x2 + xy + y2 - 3x + 3y on the triangular region cut from the first quadrant by the line x + y = 4.

                    </li>
                    <br />
                    <li>

                        Find linearization of f(x, y) = 1 + y + x cosy at (0,0). Also find upper bound for error over the rectangle |x| ≤0.2, |y|≤0.2.

                    </li>
                    <br />
                    <li>
                        Check the convergence or divergence of the sequence <code>(a,,)</code>. Find the limit of the sequence, if convergent. <br />
                        (i) a<sub>n</sub> = 2 <sup>1/n</sup> <br />
                        (ii) a<sub>n</sub> = (1 + (7/n))<sup>n</sup> <br />
                        (iii) a<sub>n</sub> = (4<sup>n</sup>n)<sup>1/n</sup>
                    </li>
                    <br />
                    <li>
                        a1 = cos(1). The next terms are a2 = a1 or cos(2), whichever is larger; and a3 = a2 or cos(3), whichever is larger. In general, an+1 = max(an, cos(n + 1)).
                        Discuss the convergence for the sequence.
                    </li>
                </div>
            </div>
        </>
    );
}

export default Beee22