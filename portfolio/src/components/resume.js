import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
// import user from '../user.jpeg';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <h2 style={{paddingTop: '2em', fontFamily: 'Acme'}}>Shruti Nanajkar</h2>
                        {/* <h4 style={{color: 'grey', fontFamily: 'Raleway'}}>Software Developer</h4> */}
                        <hr style={{borderTop: '3px solid #12267c', width: '90%'}} />
                        <p style={{fontFamily: 'Raleway'}}>Graduate Student | Information Systems | Software Developer | Actively seeking fulltime opportunities from May 2019</p>
                        <hr style={{borderTop: '3px solid #12267c', width: '90%'}} />
                        <i className="fa fa-envelope" aria-hidden="true" style={{fontSize: '40px'}}/>
                        <p style={{fontFamily: 'Raleway'}}>nanajkarshruti@gmail.com</p>
                        <hr style={{borderTop: '3px solid #12267c', width: '90%'}} />
                    </Cell>

                    <Cell col={8} className="resume-right-col">
                        <h2 style={{fontFamily: 'Source Serif Pro'}}>EDUCATION</h2>
                        
                        {/* MS */}
                        <Education
                            startMonth="Sep"
                            startYear={2017}
                            endMonth="May"
                            endYear={2019}
                            degreeName="Master of Science in Information Systems"
                            schoolName="Northeastern University"
                            schoolCity="Boston"
                            schoolState="Massachusetts"
                        />

                        {/* BE */}
                        <Education
                            startMonth="Aug"
                            startYear={2011}
                            endMonth="Jun"
                            endYear={2015}
                            degreeName="Bachelor of Engineering in Information Technology"
                            schoolName="KJ Somaiya College of Engineering"
                            schoolCity="Mumbai"
                            schoolState="India"
                        />

                        <hr style={{ borderTop: '3px solid #12267c'}} />

                        <h2 style={{fontFamily: 'Source Serif Pro'}}>EXPERIENCE</h2>
                        {/* Virgin Pulse */}
                        <Experience
                            startMonth="Jul"
                            startYear={2018}
                            endMonth="Jan"
                            endYear={2019} 
                            position="Software Engineer Intern"
                            companyName="Virgin Pulse"
                            companyCity="Framingham"
                            companyState="Massachusetts"
                        />

                        {/*  Netmonastery */}
                        <Experience 
                            startMonth="Nov"
                            startYear={2016}
                            endMonth="Feb"
                            endYear={2017}
                            position="Software Engineer"
                            companyName="Netmonastery Network Security Pvt Ltd."
                            companyCity="Mumbai"
                            companyState="India"
                        />

                        {/*  Accenture */}
                        <Experience 
                            startMonth="Jun"
                            startYear={2015}
                            endMonth="Jun"
                            endYear={2016}
                            position="Associate Software Engineer"
                            companyName="Accenture"
                            companyCity="Mumbai"
                            companyState="India"
                        />

                        <hr style={{ borderTop: '3px solid #12267c'}} />

                        <h2 style={{fontFamily: 'Source Serif Pro'}}>SKILLS</h2>
                        <Skills 
                            skill="JAVA"
                            progress={60}
                        />

                        <Skills 
                            skill="Spring"
                            progress={50}
                        />

                        <Skills 
                            skill="Hibernate"
                            progress={50}
                        />

                        <Skills 
                            skill="HTML5"
                            progress={90}
                        />

                        <Skills 
                            skill="CSS3"
                            progress={80}
                        />

                        <Skills
                            skill="Bootstrap"
                            progress={80}
                        />

                        <Skills 
                            skill="JavaScript"
                            progress={70}
                        />

                        <Skills 
                            skill="Angular6"
                            progress={70}
                        />

                        <Skills 
                            skill="NodeJs"
                            progress={70}
                        />

                        <Skills 
                            skill="Git"
                            progress={95}
                        />

                        <Skills 
                            skill="JIRA"
                            progress={95}
                        />

                        <Skills 
                            skill="MySQL"
                            progress={70}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;