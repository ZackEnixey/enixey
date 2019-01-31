import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

// COMPONENTS, IMAGES
import Header from '../../header/Header';
import demoIcon from '../../images/demoIcon.png';
import profilePhoto from '../../images/profilePhoto.png';

// ACTIONS
import * as dashboardActions from '../../../actions/dashboardActions';


class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            demo: '',
            currentHeight: document.documentElement.clientHeight-60,
        };
       this.resize = this.resize.bind(this);
    }

    resize() {
        this.setState({
            currentHeight: document.documentElement.clientHeight-60,
        })
    }

    componentDidMount() {
        window.addEventListener('resize', this.resize)
        console.log('did');
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize)
        console.log('will');
    }

    render() {

        let dashboardHeight = this.state.currentHeight;

        let workExperiencesList = [
            {'id': '0', 'employerName': 'SILVER GULCH',       'jobPosition': 'Server',                  'workPeriod': 'JUN 2015 - OCT 2015', 'workDescriptoin': "My job at the United States, AK. Serving guests, I spent 6 months in the USA working as a server at Anchorage international airport which improved my English to advanced level and I gained self-confidence and native way of speaking and pronouncing." },
            {'id': '1', 'employerName': 'SELF-EMPLOYED',      'jobPosition': 'Freelancing',             'workPeriod': 'APR 2016 - NOW',      'workDescriptoin': "In my free time I'm making websites in HTML, CSS/Sass and JavaScript for smaller shops, and artists (example: www.lepsastranazivota.com, www.vaslektor.com, www.larte.rs) some of them might be expired, that’s up to the owner, but I’m keeping all source codes on my laptop. Also, I worked as a web designer on web site www.aldotravel.co.rs, changing the source code and maintaining data. Next to the making-websites-job I teach English and I find big joy working with students, preparing them for job interviews and exams." },
            {'id': '2', 'employerName': 'MAZE DIGITAL',       'jobPosition': 'Front-End developer',     'workPeriod': 'NOV 2016 - FEB 2017', 'workDescriptoin': "My first 3-months internship on Malta, EU. Working on the new social app from scratch, for JCI organization, building the whole website interface with HTML and CSS (using the help of Bootstrap) and using JavaScript with AJAX, jQuery, JSON to make it usable and more interactive, asynchronous, etc. also using XML and Symphony to make a website from templates to be more maintainable. The whole project was done in Windows 10 operating system. Considering this was from the scratch and I had to improvise a lot and to use a lot of new technologies, I must say this was a real challenge for me, and I loved it." },
            {'id': '3', 'employerName': 'GlocalIT',           'jobPosition': 'Full Stack Web Developer','workPeriod': 'FEB 2017 - SEP 2017', 'workDescriptoin': "My second 6-months internship in Novi Sad, Serbia. The job that required the most from me. Full-time job, 40 hours per week where I worked on developing company’s app, working with TypeScript (TS), NodeJS and MySQL, I had to write code in TypeScript and compile it to JavaScript and fix if any compiling error happened, also I used Angular2 and jQuery if needed. All my source code had to be neat, readable, safe, tested, asynchronous, so I had constantly to use threads and callbacks, fixing, unit testing to make that happen. All the time I worked in a LINUX operating system with Node and a LINUX terminal making myself familiar with LINUX operating system. All of this made me a junior Web Developer (more precisely ‘Node.js developer’) who's secure in the correctness of the code he writes." },
            {'id': '4', 'employerName': 'JiWay',              'jobPosition': 'Front-End developer',     'workPeriod': 'JAN 2018 - JAN 2019', 'workDescriptoin': "Working on React-Redux and improving my skills in Front-End tools usage, like HTML, CSS, SASS ES6, working with Java and it's framework Spring, also working with SQL." },
            {'id': '5', 'employerName': 'ENIXEY association', 'jobPosition': 'Journalist/blogger',      'workPeriod': 'JAN 2019 - NOW',      'workDescriptoin': "Chairman and chief executive officer, founding of Enixey cultural assosiation for improving and boosting learning and helping young talents get into the public. Language and rhetoric are stressed." },
        ]

        let educationList = [
            {'id': "0", 'schoolName': "Private programming schools and courses",            'courseName': "Web Development",                        'educationPeriod': "JAN 2016 - APR 2016",        'educationDescription': "Web design and development, working in Dreamweaver and Photoshop, working with HTML CSS/Sass and JavaScript, later I continued to learn and improve my JavaScript skills at Shaw academy courses making smaller projects." },
            {'id': "1", 'schoolName': "Execom - course",                                    'courseName': "Networking for Web Developers",          'educationPeriod': "FEB 2017 — APR 2017",        'educationDescription': "Learning about API, TCP, IP, HTTP, p2p communications, the anatomy of web browsers etc. from experienced software developers in local software engineering company." },
            {'id': "2", 'schoolName': "Pluralsight, Lynda, and online tutorials",           'courseName': "IT skills improving",                    'educationPeriod': "JUN 2016 — no need to stop", 'educationDescription': "Since I’ve discovered those websites I’m active member constantly learning and improving. So far, I finished courses for TypeScript, JavaScript, Angular2, NodeJS, Photoshop and started a lot of topics in IT and management fields." },
            {'id': "3", 'schoolName': "Faculty of Technical Science, Bachelor Studies",     'courseName': "Computer science and automatization",    'educationPeriod': "OCT 2011 - JUN 2017",        'educationDescription': "Obtained an undergraduate academic BS degree (Bachelor of science). I've gained the capability of critical thinking and problem-solving, also I learned the basics of programming and engineering." },
            {'id': "4", 'schoolName': "Singidunum University, Master Studies",               'courseName': "Software engineering",                   'educationPeriod': "OCT 2018 — NOW",             'educationDescription': "Since I’ve discovered those websites I’m active member constantly learning and improving. So far, I finished courses for TypeScript, JavaScript, Angular2, NodeJS, Photoshop and started a lot of topics in IT and management fields." }
        ]

        let listOfWorks = workExperiencesList.slice(0).reverse().map( item => {
            return(
                <div className="aboutWorkExperienceWrapper">
                    <div className="aboutWorkExperienceTitleAndPeriodWrapper">
                        <div className="employerWrapper" >
                            <div className="employer"> {item.employerName}   </div>
                            <div className="position"> {item.jobPosition}    </div>
                        </div>
                        <div className="workDate">
                            {item.workPeriod}
                        </div>
                    </div>
                    <div className="workDescription">
                        {item.workDescriptoin}
                    </div>
                </div>
            )
        })

         let listOfEducation = educationList.slice(0).reverse().map( item => {
            return(
                <div className="aboutWorkExperienceWrapper">
                    <div className="aboutWorkExperienceTitleAndPeriodWrapper">
                        <div className="employerWrapper" >
                            <div className="employer"> {item.courseName}   </div>
                            <div className="position"> {item.schoolName}     </div>
                        </div>
                        <div className="workDate">
                            {item.educationPeriod}
                        </div>
                    </div>
                    <div className="workDescription">
                        {item.educationDescription}
                    </div>
                </div>
            )
        })

        return( 
            <div id="statisticsWrapper" >   
                <Header/>  
                <div className="aboutBodyWrapperScroller" style={{"height": dashboardHeight}} >
                    <div className="aboutBodyWrapper" >                       
                        <div id="aboutPhotoAndContactInfoWrapper" className="aboutPhotoAndContactInfoWrapper" >
                            <div id="aboutPhotoDiv" className="aboutPhotoDiv" >
                                <img id="profileSwttinPhoto" className="aboutPhotoPhoto" src={profilePhoto} />
                            </div>
                            <div id="aboutContactInfoWrapper" className="aboutContactInfoWrapper" >
                                <div id="aboutContactInfoNAME" className="aboutContactInfoNAME">
                                    Zack Enixey
                                </div>  
                                <div id="aboutContactInftoContacts" className="aboutContactInftoContacts">
                                    <div id="contactsOne" className="contactsOne" >
                                        <div className="contactTextLeft"> Boulevard Jase Tomic  19/43 </div>
                                        <div className="contactTextLeft"> Novi Sad Serbia </div>
                                    </div>
                                    <div id="contactsTwo" className="contactsTwo" >
                                        <div className="contactTextRight"> zoran.zilic.zack@gmail.com               </div>
                                        <div className="contactTextRight"> zoran.zilic.18@singimail.rs              </div>
                                        <div className="contactTextRight"> Facebook:  ZZFTN90                 </div>
                                        <div className="contactTextRight"> LinkedIN:  zoran-zilic-zack     </div>
                                        <div className="contactTextRight"> INSTAGRAM: zack.j.enixey         </div>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div id="aboutContentWrapper" className="aboutContentWrapper" >
                            
                            <div id="aboutObjective" className="aboutContainerPart">
                                <h1 className="aboutTitleText appsGreenBackground" > OBJECTIVES </h1>
                                <p className="aboutParagraphText" >
                                    I graduated from the University of Novi Sad this autumn (16.10.2017.) at the field: “Computing and Control Engineering” at Faculty of Technical Science (FTN) in Novi Sad. During studies, I traveled to volunteer and to improve my communication and management skills, but also, I did lots of internships in the field of Web Development to improve myself as a programmer. I’m familiar with C, C++, C# and Java programming languages as they were my obligatory subjects at the University. I'm a big fan of Object Oriented Programming and I feel comfortable working in OOP field, but also, I'm a big fan of designing, which I consider as my biggest hobby alongside with learning languages, I’m working with HTML/CSS and Photoshop all the time. I wrote my own comic book. Since I graduated I’m spending time on improving my Java, JavaScript, Angular, jQuery, HTML, Sass, and SQL skills and I’m looking for a job and great work-team to fit in so I could contribute by giving my best and in the same time learn more and improve myself.
                                </p>
                            </div>                            
                            <div id="aboutEducation" className="aboutContainerPart">
                                <h1 className="aboutTitleText appsGreenBackground"> EDUCATION </h1>
                                {listOfEducation}
                            </div>
                            <div id="aboutWorkExperience" className="aboutContainerPart">
                                <h1 className="aboutTitleText appsGreenBackground"> WORK EXPERIENCE </h1>
                                {listOfWorks}
                                
                            </div>
                            <div id="aboutMyWork" className="aboutContainerPart">
                                <h1 className="aboutTitleText appsGreenBackground"> MY PROJECTS </h1>
                                <div className="textAlignleft" style={{"margin": "1%"}}>
                                    GitHUB repository link: 
                                </div>
                            </div>
                            <div id="aboutSkills" className="aboutContainerPart" >
                                <h1 className="aboutTitleText appsGreenBackground"> SKILLS </h1>
                                <p className="aboutParagraphText" >
                                    
                                    <div className="aboutSkills"> • Languages: SERBIAN (first language), ENGLISH (C2 level of knowledge, it’s my second language), also FRENCH and GERMAN – A2 level,     </div>
                                    <div className="aboutSkills"> • Computer skills, IT, web design,      </div>
                                    <div className="aboutSkills"> • I am always willing to learn new things and to improve myself in my profession: such as learning new programming languages, or human language, drawing classes, animation online courses; or improve myself in other fields: like Yoga classes, massage, meditation or barman course, learning to play new instrument or attending Life-Coaching classes etc.     </div>
                                    <div className="aboutSkills"> • I'm communicative, positive, tolerant, persistent, team player, agile, flexible, innovative, creative...      </div>
                                    <div className="aboutSkills"> • My skills while working on something are: thinking & problem-solving, being creative, drawing, sketching, always being constructive, being focused, decision-making, dealing with difficult situations etc.       </div>
                               </p>
                            </div>
                            <div id="aboutInterests" className="aboutContainerPart">
                                <h1 className="aboutTitleText appsGreenBackground"> INTERESTS </h1>
                                <p className="aboutParagraphText" >
                                    <div className="aboutSkills"> Programming, Design, Photoshop, Style, Painting, Art, Music, studying, Reading, Volunteering… </div>
                                    
                                    <div className="aboutSkills"> My Volunteering: </div>
                                    <div className="aboutSkills"> "Cultural exchange", GoEco organization, July 2016 - September 2016, Israel, Tel Aviv/Jerusalem. </div>
                                    <div className="aboutSkills"> Promoting the culture of my country, strengthening the relations between the two countries, improving tourism, working with travelers from all over the world, organizing workshops with topics of human rights and equality. </div>
                                    <div className="aboutSkills"> "Sheltering stray animals", Spans organization, Novi Sad. </div>
                                    <div className="aboutSkills"> "Promoting Vegan food", Black House, vegan house, Novi Sad. Cooking free meals and organizing workshops to make more people familiar with the healthy way of vegan diet. </div>



                                </p>
                            </div>
                            <div id="aboutAboutMe" className="aboutContainerPart">
                                <h1 className="aboutTitleText appsGreenBackground"> ABOUT ME </h1>
                                <div>
                                    <div className="aboutParagraphText" >
                                        I can say that I'm a hard worker, I stick to the goals, I like to work in groups, I'm a team player, I hate to let people down, but I make that ‘letting down’ hard to happen by letting people know what I think, or if I work with people I always try to let them know my current progress, updating and informing them about all they need to know; therefore, I always expose and talk about current project problems. I’m not ashamed to ask for help, I’ve found so far, every person in IT world more than willing and happy to help, if there is no answer in the office then StackOverflow is always there for me. I would like to apply all knowledge that I gained during my University studies and to learn even more in real life situations, real work environment with right people to give me directions to become even better in my profession, also in return I will give my best to contribute to the group.
                                    </div>

                                    <div className="aboutParagraphText" >
                                        I love life, I love humans, I love animals, interested in protecting the environment and human (also animal) rights, I like to travel, explore and meet new cultures and languages. Last summer I learned a little bit of Hebrew during my volunteering work in Israel, early this year I came from Malta with few, hard to pronounce, Maltese sayings. I'm always willing to help others, I love to say YES, to be positive, I do everything with a smile and I like to spread positive energy to everyone. I am interested in positive psychology and I’m solving every life situation with tranquility and common sense.
                                    </div>
                                </div>  
                            </div>
                            <div id="aboutReferences" className="aboutContainerPart">
                                <h1 className="aboutTitleText appsGreenBackground"> REFERENCES </h1>
                                    
                                    <div className="aboutReferencewrapper">
                                        <div className="textAlignleft"> Mr. Orlando Sequera, general manager  </div>
                                        <div className="textAlignleft"> Jiway Software Company, Luxemburg, EU </div>
                                        <div className="textAlignleft"> Email: osequera@jiway.lu </div>
                                    </div>

                                    <div className="aboutReferencewrapper"> 
                                        <div className="textAlignleft"> Mrs. Biljana Anusic, referent for: “Computing and Control Engineering” department </div>
                                        <div className="textAlignleft"> Faculty Technical Science, University Novi Sad, Novi Sad, Serbia </div>
                                        <div className="textAlignleft"> Email: stud.racunarstvo@uns.ac.rs </div>
                                        <div className="textAlignleft"> Phone: +381 21 485 2231 </div>
                                    </div>
                                    <div className="aboutReferencewrapper"> 
                                        <div className="textAlignleft"> Mr. Jonathan Misfud, general manager and internship supervisor </div>
                                        <div className="textAlignleft"> Maze Digital, Malta, EU </div>
                                        <div className="textAlignleft"> Email: jonathan@maze.digital </div>
                                    </div>

                                    <div className="aboutReferencewrapper"> 
                                        <div className="textAlignleft"> Mr. Nikolaj Pajkovic, general manager and internship supervisor </div>
                                        <div className="textAlignleft"> GlocalIT, Copenhagen, Denmark </div>
                                        <div className="textAlignleft"> Email: nipa@glocalit.com </div>
                                        <div className="textAlignleft"> Phone: +45 70 201 301 </div>
                                    </div>

                                    <div className="aboutReferencewrapper"> 
                                        <div className="textAlignleft"> Mr. Petar Stupar, Software Developer </div>
                                        <div className="textAlignleft"> Execom, Novi Sad, Serbia </div>
                                        <div className="textAlignleft"> Email: pstupar@execom.eu </div>
                                    </div>

                                    <div className="aboutReferencewrapper"> 
                                        <div className="textAlignleft"> Mr. David W. Mahon, General Manager </div>
                                        <div className="textAlignleft"> Silver Gulch Brewery, Anchorage, United States </div>
                                        <div className="textAlignleft"> Email: david.mahon@silvergulch.com </div>
                                    </div>
                            </div>

                            <div className="textAlignleft"> Link to my certificates and diplomas: https://drive.google.com/open?id=0B9j9JLimQco1c2JYWWN2NVhhcG8 </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state, ownProps){
    return {
        otherFeatures: state.otherFeatures,
    }
}

function mapDispatchToProps(dispatch){
    return{
        dashboardActions: bindActionCreators(dashboardActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(About);

