// import React, { Component } from 'react';
// import "./viewprofileui-skills-interests.css";
// import Accordion from '@material-ui/core/Accordion';
// import AccordionSummary from '@material-ui/core/AccordionSummary';
// import AccordionDetails from '@material-ui/core/AccordionDetails';
// import Typography from '@material-ui/core/Typography';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


// class ViewprofileuiSkillsAndInterests extends Component {
//     render() {
//         return (
//             <div className="viewprofileui-skills-interests">
//                 <div className="row-1">
//                     skills & interests
//                 </div>
//                 <div className="row-2">
//                     <Accordion className="accordion">
//                        <AccordionSummary className="header"
//                               expandIcon={<ExpandMoreIcon />}
//                               aria-controls="panel1a-content"
//                               id="panel1a-header"
//                        >
//                          <Typography className="header-text">crop production</Typography>
//                       </AccordionSummary>
//                    <AccordionDetails>
//                      <div className="details">
//                          <div className="details-row">
//                             <div className="details-column">
//                                 <div>
//                                     <input type="checkbox" style={{backgroundColor: "green"}}/>
//                                     <h6>fruits and vegetables</h6>
//                                 </div>
//                                 <div>
//                                     <input type="checkbox"/>
//                                     <h6>Tubers</h6>
//                                 </div>
//                             </div>
//                             <div className="details-column">
//                                 <div>
//                                     <input type="checkbox"/>
//                                     <h6>cereals</h6>
//                                 </div>
//                                 <div>
//                                     <input type="checkbox"/>
//                                     <h6>Tubers</h6>
//                                 </div>
//                             </div>
//                             <div className="details-column">
//                                 <div>
//                                     <input type="checkbox"/>
//                                     <h6>cereals</h6>
//                                 </div>
//                                 <div>
//                                     <input type="checkbox"/>
//                                     <h6>Tubers</h6>
//                                 </div>
//                             </div>
//                         </div>
//                      </div>
//                    </AccordionDetails>
//                 </Accordion>
//                 </div>
//             </div>
//         )
//     }
// }

import React, { Component } from 'react';
import "./viewprofileui-skills-interests.css";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


class ViewprofileuiSkillsAndInterests extends Component {

    render() {
        return (
            <div className="viewprofileui-skills-interests">
                <div className="row-1">
                    skills & interests
                </div>
                <div className="row-2">
                <Accordion className="accordion">
                    <AccordionSummary style={{backgroundColor:"#006633"}}
                    expandIcon={<ExpandMoreIcon style={{color: "white"}} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className="header-text">crop production</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="details">
                        <div className="details-row">
                                <div className="details-column">
                                    <div>
                                        <input type="checkbox"/>
                                        <h6>fruits and vegetables</h6>
                                    </div>
                                    <div>
                                        <input type="checkbox"/>
                                        <h6>Tubers</h6>
                                    </div>
                                </div>
                                <div className="details-column">
                                    <div>
                                        <input type="checkbox"/>
                                        <h6>cereals</h6>
                                    </div>
                                    <div>
                                        <input type="checkbox"/>
                                        <h6>Tubers</h6>
                                    </div>
                                </div>
                                <div className="details-column">
                                    <div>
                                        <input type="checkbox"/>
                                        <h6>cereals</h6>
                                    </div>
                                    <div>
                                        <input type="checkbox"/>
                                        <h6>Tubers</h6>
                                    </div>
                                </div>
                        </div>

                        <div className="details-row">
                                <div className="details-column">
                                    <div>
                                        <input type="checkbox"/>
                                        <h6>fruits and vegetables</h6>
                                    </div>
                                    <div>
                                        <input type="checkbox"/>
                                        <h6>Tubers</h6>
                                    </div>
                                </div>
                                <div className="details-column">
                                    <div>
                                        <input type="checkbox"/>
                                        <h6>cereals</h6>
                                    </div>
                                    <div>
                                        <input type="checkbox"/>
                                        <h6>Tubers</h6>
                                    </div>
                                </div>
                                <div className="details-column">
                                    <div>
                                        <input type="checkbox"/>
                                        <h6>cereals</h6>
                                    </div>
                                    <div>
                                        <input type="checkbox"/>
                                        <h6>Tubers</h6>
                                    </div>
                                </div>
                        </div>
                    </AccordionDetails>
                </Accordion>

                <Accordion className="accordion">
                    <AccordionSummary style={{backgroundColor:"#006633"}}
                    expandIcon={<ExpandMoreIcon style={{color: "white"}} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className="header-text">Animal Production</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="details">
                            <div className="details-row">
                                <h1>Work Experience Section</h1>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>

                <Accordion className="accordion">
                    <AccordionSummary style={{backgroundColor:"#006633"}}
                    expandIcon={<ExpandMoreIcon style={{color: "white"}} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className="header-text">Work Experience</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="details">
                            <div className="details-row">
                                <h1>Work Experience Section</h1>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>

                <Accordion className="accordion">
                    <AccordionSummary style={{backgroundColor:"#006633"}}
                    expandIcon={<ExpandMoreIcon style={{color: "white"}} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className="header-text">Education</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="details">
                            <div className="details-row">
                                <h1>Education Section</h1>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>

                <Accordion className="accordion">
                    <AccordionSummary style={{backgroundColor:"#006633"}}
                    expandIcon={<ExpandMoreIcon style={{color: "white"}} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className="header-text">Basic Information</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="details">
                            <div className="details-row">
                                <h1>Basic Information Section</h1>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>

                <Accordion className="accordion">
                    <AccordionSummary style={{backgroundColor:"#006633"}}
                    expandIcon={<ExpandMoreIcon style={{color: "white"}} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className="header-text">Basic Information</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="details">
                            <div className="details-row">
                                <h1>Basic Information Section</h1>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>

                <Accordion className="accordion">
                    <AccordionSummary style={{backgroundColor:"#006633"}}
                    expandIcon={<ExpandMoreIcon style={{color: "white"}} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className="header-text">Basic Information</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="details">
                            <div className="details-row">
                                <h1>Basic Information Section</h1>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
                
                </div>
                            
            </div>
          )
    }
}

export default ViewprofileuiSkillsAndInterests