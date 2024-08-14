import "./styles/about.css"
import { Marquee } from "../Helper modules/marquee"

export function About(){
    return(
        <div id="about_section">
            <h1>
                I'm Dami.
            </h1>
            <div id="hero">
                <div className="image" id="potrait"style={{backgroundImage:'url(../public/misc_images/profile.jpg)'}}><span>Valedictorian</span></div>
                <div id="descrip">
                    <h2>
                        I'm a Software Engineer with personal experience in Web development!
                    </h2>
                    <p>
                        My name is Damilola Aina and I am a third-year undergraduate student at the University of Toronto, majoring in Computer Engineering with a minor in Artificial Intelligence.
                        <br/><br/>
                        Currently a member of UTSM (University of Toronto Super-Mileage) where we design and develop energy efficient vehicle prototypes; driving them in competitions.
                    </p>
                </div>
            </div>
            <div>
                
                
                

                <Marquee>
                    <div className="image" id="icon_image" style={{backgroundImage:'url(../public/skills_logos/C.svg)'}}><span>C</span></div>
                    <div className="image" id="icon_image" style={{backgroundImage:'url(../public/skills_logos/CPlusPlus.svg)'}}><span>C++</span></div>
                    <div className="image" id="icon_image" style={{backgroundImage:'url(../public/skills_logos/Python.svg)'}}><span>Python</span></div>
                    <div className="image" id="icon_image" style={{backgroundImage:'url(../public/skills_logos/Pytorch.svg)'}}><span>PyTorch</span></div>
                    <div className="image" id="icon_image" style={{backgroundImage:'url(../public/skills_logos/JS.svg)'}}><span>JavaScript</span></div>
                </Marquee>
                <Marquee>
                    <div className="image" id="icon_image" style={{backgroundImage:'url(../public/skills_logos/CSS.svg)'}}><span>CSS3</span></div>
                    <div className="image" id="icon_image" style={{backgroundImage:'url(../public/skills_logos/HTML.svg)'}}><span>HTML5</span></div>
                    <div className="image" id="icon_image" style={{backgroundImage:'url(../public/skills_logos/React.svg)'}}><span>React Native</span></div>
                    <div className="image" id="icon_image" style={{backgroundImage:'url(../public/skills_logos/ThreeJS.svg)'}}><span>ThreeJS</span></div>
                </Marquee>
                <Marquee>
                    <div className="image" id="icon_image" style={{backgroundImage:'url(../public/skills_logos/SOLIDWORKS.svg)'}}><span>SOLIDWORKS</span></div>
                    <div className="image" id="icon_image" style={{backgroundImage:'url(../public/skills_logos/VerilogHDL.svg)'}}><span>VerilogHDL</span></div>
                    <div className="image" id="icon_image" style={{backgroundImage:'url(../public/skills_logos/Arduino.svg)'}}><span>Arduino</span></div>
                    <div className="image" id="icon_image" style={{backgroundImage:'url(../public/skills_logos/VSCode.svg)'}}><span>VSCode IDE</span></div>
                    <div className="image" id="icon_image" style={{backgroundImage:'url(../public/skills_logos/Assembly.svg)'}}><span>Nios II Assembly</span></div>
                </Marquee>
            </div>
            <h2 id="mid-a">
                I believe in a passionate, diverse and collaborative environment with every problem, project and client.
            </h2>
            <p id="mid-b">
                With every project, the short term goal is to find ways to improve my current skills in order to put out more project with a long term goal of solving current problems with my different clients or the environment.
            </p>
            <div id="grid-4box">
                <div style={{gridColumnStart:'1', gridColumnEnd:'2', gridRowStart:'1', gridRowEnd:'2'}} className="grid-square">
                    <h3>
                        01
                    </h3>
                    <h2>
                        Software Development
                    </h2>
                    <p>
                        I am proficient in Python, C, C++, JavaScript, and React. My expertise spans Machine Learning (with a recent focus on Deep Learning) using Python, Web Development with React, and systems programming, including low-level programming and hardware interfacing with C, Assembly (NIOS II), and C++.
                    </p>
                </div>
                
                <div style={{gridColumnStart:'2', gridColumnEnd:'3', gridRowStart:'1', gridRowEnd:'2'}} className="grid-square">
                    <h3>
                        02
                    </h3>
                    <h2>
                        Electronics & Circuit Design
                    </h2>
                    <p>
                        With half of my degree integrated with Electrical Engineering, I have acquired substantial knowledge in the field. My experience includes using Arduinos to script robots, designing circuits, and even recreating low-level computer machines in Minecraft!
                    </p>
                </div>

                <div style={{gridColumnStart:'1', gridColumnEnd:'2', gridRowStart:'2', gridRowEnd:'3'}} className="grid-square">
                    <h3>
                        03
                    </h3>
                    <h2>
                        Project Management
                    </h2>
                    <p>
                        In group projects, fostering strong relationships with both clientele and team members is a top priority. Regular meetings, internal deadlines, and progress management, supported by tools like MS Projects, Slack, and Gantt charts, are key to achieving this.
                    </p>
                </div>

                <div style={{gridColumnStart:'2', gridColumnEnd:'3', gridRowStart:'2', gridRowEnd:'3'}} className="grid-square">
                    <h3>
                        04
                    </h3>
                    <h2>
                        Mechanical Design
                    </h2>
                    <p>
                        Within my design team, I handle a significant portion of SOLIDWORKS CAD tasks, ranging from simple holders and parts to aerobody designs, ensuring that drawings and measurements are accurately translated into physical designs that meet technical specifications.
                    </p>
                </div>
            </div>
            <p id="end-paragraph">
                As far as I remember, I first started with <a href="https://scratch.mit.edu/" target="_blank" style={{textDecoration:'none', color:'black'}}>Scratch</a>, using it as a learning tool while participating in and winning competitions. This experience sparked my interest in Python, which later expanded to other programming languages and technologies.
                <br/><br/>
                Learning is a passion of mine, especially when it involves hands-on work. I vividly recall making an electromagnetic motor in my final year of high school, building numerous Lego robots, and even creating my first 'heavy-duty' extension plug in grade 9 (which may or may not have short-circuited the house's electricity...).
                <br/><br/>
                Beyond my career focus, I continue to enjoy various sports, outdoor adventures, and occasional hobbies. My most recent accomplishment was a skiing trip where, thankfully, I managed not to break an ankle!
            </p>
            <Marquee>
                <div className="image gallery_images" id="large_image" style={{backgroundImage:'url(../public/misc_images/large-01.jpg)'}}><span>Milton, Ontario</span></div>
                <div className="image gallery_images" id="small_image" style={{backgroundImage:'url(../public/misc_images/small-01.jpg)'}}><span>Coldwater, Ontario</span></div>
                <div className="image gallery_images" id="medium_image" style={{backgroundImage:'url(../public/misc_images/medium-01.jpg)'}}><span>Front Campus, University of Toronto</span></div>
                <div className="image gallery_images" id="small_image" style={{backgroundImage:'url(../public/misc_images/small-02.jpg)'}}><span>Calgary, Alberta</span></div>
                
            </Marquee>
        </div>
    )
}