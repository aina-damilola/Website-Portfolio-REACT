import "./styles/about.css"
import { Marquee } from "../Helper modules/marquee"

export function About(){
    return(
        <div id="about_section">
            <h1>
                About me.
            </h1>
            <div id="hero">
                <div className="image" id="potrait"style={{backgroundImage:'url(./misc_images/profile.jpg)'}}></div>
                <div id="descrip">
                    <h2>
                        I'm a Software Engineer with personal experience in Web development!
                    </h2>
                    <p>
                    My name is Damilola Aina, a third-year Computer Engineering student at the University of Toronto with a minor in Artificial Intelligence. I am passionate about applying technology to solve real-world problems. As an active member of the UTSM team, I help design and develop energy-efficient vehicle prototypes for competitive testing, advancing sustainable transportation solutions.
                    </p>
                </div>
            </div>
            <div>
                
                
                

                <Marquee>
                    <div className="image" id="icon_image" style={{backgroundImage:'url(./skills_logos/C.svg)'}}><span>C</span></div>
                    <div className="image" id="icon_image" style={{backgroundImage:'url(./skills_logos/CPlusPlus.svg)'}}><span>C++</span></div>
                    <div className="image" id="icon_image" style={{backgroundImage:'url(./skills_logos/Python.svg)'}}><span>Python</span></div>
                    <div className="image" id="icon_image" style={{backgroundImage:'url(./skills_logos/Pytorch.svg)'}}><span>PyTorch</span></div>
                    <div className="image" id="icon_image" style={{backgroundImage:'url(./skills_logos/JS.svg)'}}><span>JavaScript</span></div>
                </Marquee>
                <Marquee>
                    <div className="image" id="icon_image" style={{backgroundImage:'url(./skills_logos/CSS.svg)'}}><span>CSS3</span></div>
                    <div className="image" id="icon_image" style={{backgroundImage:'url(./skills_logos/HTML.svg)'}}><span>HTML5</span></div>
                    <div className="image" id="icon_image" style={{backgroundImage:'url(./skills_logos/React.svg)'}}><span>React Native</span></div>
                    <div className="image" id="icon_image" style={{backgroundImage:'url(./skills_logos/ThreeJS.svg)'}}><span>ThreeJS</span></div>
                </Marquee>
                <Marquee>
                    <div className="image" id="icon_image" style={{backgroundImage:'url(./skills_logos/SOLIDWORKS.svg)'}}><span>SOLIDWORKS</span></div>
                    <div className="image" id="icon_image" style={{backgroundImage:'url(./skills_logos/VerilogHDL.svg)'}}><span>VerilogHDL</span></div>
                    <div className="image" id="icon_image" style={{backgroundImage:'url(./skills_logos/Arduino.svg)'}}><span>Arduino</span></div>
                    <div className="image" id="icon_image" style={{backgroundImage:'url(./skills_logos/VSCode.svg)'}}><span>VSCode IDE</span></div>
                    <div className="image" id="icon_image" style={{backgroundImage:'url(./skills_logos/Assembly.svg)'}}><span>Nios II Assembly</span></div>
                    <div className="image" id="icon_image" style={{backgroundImage:'url(./skills_logos/Git.svg)'}}><span>Git</span></div>
                    <div className="image" id="icon_image" style={{backgroundImage:'url(./skills_logos/CircuitDesign.svg'}}><span>Circuit Design</span></div>
                </Marquee>
            </div>
            <h2 id="mid-a">
                I thrive in diverse, collaborative environments, approaching every challenge with passion and teamwork.
            </h2>
            <p id="mid-b">
                With each project, my short-term goal is to refine my skills, while my long-term focus is on solving real-world problems for clients and the environment.
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
                        I am proficient in Python, C, C++, JavaScript, and React, with expertise in Machine Learning (recently focusing on Deep Learning), Web Development with React, and systems programming, including low-level programming and hardware interfacing using C, Assembly (NIOS II), and C++.
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
                        With half of my degree focused on Electrical Engineering, I have gained substantial expertise in the field. My experience includes scripting robots with Arduinos, designing circuits, and even recreating low-level computer machines in Minecraft.
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
                        In group projects, building strong relationships with clients and team members is a top priority. I ensure success through regular meetings, internal deadlines, and progress tracking using tools like MS Projects, Slack, and Gantt charts.
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
                        On my design team, I manage a substantial portion of SOLIDWORKS CAD tasks, from simple parts and holders to complex aerobody designs. I ensure precise translation of drawings and measurements into physical designs that meet all technical specifications.
                    </p>
                </div>
            </div>
            <p id="end-paragraph">
                I began my journey with <a href="https://scratch.mit.edu/" target="_blank" style={{textDecoration:'none', color:'black'}}>Scratch</a>, using it as a learning tool while winning competitions. This ignited my passion for Python, which eventually grew to include other programming languages and technologies.
                <br/><br/>
                I'm driven by hands-on learning, from building an electromagnetic motor in high school to constructing Lego robots and even creating my first 'heavy-duty' extension plug in grade 9—though it did cause a house-wide short circuit!
                <br/><br/>
                Outside of my career, I enjoy sports, outdoor adventures, and hobbies, with my latest accomplishment being a successful (and injury-free) skiing trip.
            </p>
            <div id="photo_gallery">
                <Marquee>
                    <div className="image gallery_images" id="large_image" style={{backgroundImage:'url(./misc_images/large-01.jpg)'}}><span>Milton, Ontario</span></div>
                    <div className="image gallery_images" id="small_image" style={{backgroundImage:'url(./misc_images/small-01.jpg)'}}><span>Coldwater, Ontario</span></div>
                    <div className="image gallery_images" id="medium_image" style={{backgroundImage:'url(./misc_images/medium-01.jpg)'}}><span>Front Campus, University of Toronto</span></div>
                    <div className="image gallery_images" id="small_image" style={{backgroundImage:'url(./misc_images/small-02.jpg)'}}><span>Calgary, Alberta</span></div>
                </Marquee>
            </div>
            
        </div>
    )
}