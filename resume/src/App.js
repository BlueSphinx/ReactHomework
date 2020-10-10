import React, { Component } from 'react';

import './App.css';

class App extends Component {

 

  render() {
    //css ต้องอยู่ใน render
    const jump = {fontSize: "2em", fontWeight: "bold"}

    return (
      <div style={{ backgroundColor: "skyBlue" }}>
        <div className="App" style={{ maxWidth: "700px", margin: "auto" }}>
          <div className="stuff" style={{ display: "inline-block", marginLeft: "55px", marginTop: "6px", width: "75%", height: "1000px" }}>
            <br />
            <br />
            <div className="fullname" style={{ textAlign: "center" }}>
              <span className="jump" style={{...jump,color:"salmon"}}>Thatana Banchuencharoensuk</span>
            </div>
            <br />
            <br />
            <hr />
            <br />
            <p className="head" style={{ fontSize: "20px", fontWeight: "bold" }}>Work Experiences</p>
            <br />

            {/* <!-- Company 1 --> */}
            <span className="company" style={{ fontWeight: "bold", fontSize: "15px" }}>Water Grill Restaurants, Bangkok, Thailand - [Feb'12-Current]</span>
            <br />
            <span className="detail" style={{ fontStyle: "italic", fontSize: "15px" }}>Authentic Thai food restaurants locate in Silom and Si Praya district.</span>
            <br />
            <span className="position" style={{ fontWeight: "bold", fontSize: "15px" }}>Co-Founder, Business Development Team</span>
            <br />
            <ul>
              <li>Conducted HR process by recruiting, training and developing staffs.</li>
              <li>Setup strategic plan in order to increase profit and reduce cost.</li>
              <li>Managed accounting for utility and daily expenses.</li>
              <li>Dealt with and resolved customer complaints.</li>
            </ul>

            <br />

            {/* <!-- Company 2 --> */}
            <span className="company" style={{ fontWeight: "bold", fontSize: "15px" }}>BeamD Consulting Co., Ltd., Bangkok, Thailand - [Nov'17-Jan'18]</span>
            <br />
            <span className="project" style={{ fontSize: "15px", fontStyle: "italic", textDecoration: "underline" }}>B2B Application Project</span>
            <br />
            <span className="detail" style={{ fontStyle: "italic", fontSize: "15px" }}>A System Integration Project concerned with technical and functional consultancy for FMCG clients in the area of LE implementation.</span>
            <br />
            <span className="position" style={{ fontWeight: "bold", fontSize: "15px" }}>Business Consultant, Business Development Team</span>
            <br />
            <ul>
              <li>Developed PMO every week to update project status.</li>
              <li>Conduct training for sales team on KA/LMT Solution.</li>
              <li>Gathered requirements in order to create CR.</li>
              <li>Guided/Provided information to CST team to test defect/CRs for LE.</li>
            </ul>

            <br />

            {/* <!-- Company 3 --> */}
            <span className="company" style={{ fontWeight: "bold", fontSize: "15px" }}>Accenture Solutions Co., Ltd., Bangkok, Thailand - [Jan'13-May'13]</span>
            <br />
            <span className="project" style={{ fontSize: "15px", fontStyle: "italic", textDecoration: "underline" }}>Banking Transformation Project</span>
            <br />
            <span className="detail" style={{ fontStyle: "italic", fontSize: "15px" }}>A System Integration Project concerned with technical and functional consultancy for banking clients in the area of core banking systems implementation.</span>
            <br />
            <span className="position" style={{ fontWeight: "bold", fontSize: "15px" }}>Analyst, Data Migration Team</span>
            <br />
            <ul>
              <li>Developed PMO, prepared and assisted in banking data migration process planning in order to migrate all banking data from the used data warehouse to the new one.</li>
              <li>Designed and implemented the Batch Design template aiming to be used as a data information summary in data migration process.</li>
              <li>Developed data execution plan activities delivering activity flows that were used to present to clients and vendors.</li>
            </ul>

            <br />
            <hr />
            <br />

            <p className="head" style={{ fontSize: "20px", fontWeight: "bold" }}>Education</p>
            <br />

            {/* <!-- Education 1 --> */}
            <span className="university" style={{ fontWeight: "bold", fontSize: "15px" }}>RMIT University, Melbourne Australia - [2011-2012]</span>
            <br />
            <span className="subject" style={{ fontStyle: "italic", fontSize: "15px" }}>Master of Computing (Specialized in Software Engineering)</span>
            <br />
            <span className="subject" style={{ fontStyle: "italic", fontSize: "15px" }}>Electives: Software Architecture, Web Server and Web Technology, Network Security</span>
            <br />
            <span className="assignment" style={{ fontWeight: "bold", fontSize: "15px" }}>SuperMart Point of Sale, System Architecture Assignment</span>
            <br />
            <span className="detail" style={{ fontStyle: "italic", fontSize: "15px" }}>A software engineering project concerned with the POS system in order to provide solution for the Australian chain of supermarkets.</span>
            <br />
            <ul>
              <li>Worked in project team of six to improve customer experience by providing selfservice
                            checkout solution.</li>
              <li>Introduced cash out features for debit and credit cards in POS system.</li>
              <li>Identified possible threats that could interrupt the new solution as well as generating a
              viability assessment checklist and methods that could be used to mitigate the impact
                            of the risks.</li>
            </ul>

            <span className="assignment" style={{ fontWeight: "bold", fontSize: "15px" }}>xPad, Software Requirement Engineering Assignment</span>
            <br />
            <span className="detail" style={{ fontStyle: "italic", fontSize: "15px" }}>A software engineering assignment concerned with gathering functional and non-functional requirements for a new tablet product (similar to iPad) called xPad.</span>
            <br />
            <ul>
              <li>Worked in project team of three to select three competitive features to create a new tablet product.</li>
              <li>Conducted competitive analysis of product features offered by competitors to identify unique
                            selling point for the product.</li>
              <li>Obtained approximately 100 requirements for the chosen three different feature sets.</li>
            </ul>

            <br />

            {/* <!-- Education 2 --> */}
            <span className="university" style={{ fontWeight: "bold", fontSize: "15px" }}>RMIT University, Melbourne Australia - [2008-2010]</span>
            <br />
            <span className="subject" style={{ fontStyle: "italic", fontSize: "15px" }}>Bachelor of Information and Technology (Business Applications)</span>
            <br />
            <span className="subject" style={{ fontStyle: "italic", fontSize: "15px" }}>Electives: Business Analysis, Micro/Macro Economics, Marketing Principles</span>
            <br />
            <span className="assignment" style={{ fontWeight: "bold", fontSize: "15px" }}>Administrivia, Information Assurance and Security Assignment</span>
            <br />
            <span className="detail" style={{ fontStyle: "italic", fontSize: "15px" }}>A web- based applications assignment concerned with the usage of Microsoft tool to create
                        threat models for web-based applications.</span>
            <br />
            <ul>
              <li>Analyzed the set-up from a security perspective paying particular attention to the
              application’s architecture, issues with XSS, other web vulnerabilities, database
                            vulnerabilities in order to generate report.</li>
              <li>Identified consequences of using older releases of the WordPress blog with a list of
                            specific version number those consequences relate to.</li>
            </ul>

            <br />

            {/* <!-- Education 3 --> */}
            <span className="school" style={{ fontWeight: "bold", fontSize: "15px" }}>St.Michael Grammar School - [2005-2007]</span>
            <br />
            <span className="detail" style={{ fontStyle: "italic", fontSize: "15px" }}>Victoria Certificate Education (VCE) - Highschool</span>
            <br />
            <br />

            <hr />
            <br />

            {/* <!-- Skills & Interest --> */}
            <p className="head" style={{ fontSize: "20px", fontWeight: "bold" }}>Skills and Interest</p>
            <br />
            <span><b>Language Skills:</b> Fluent in Thai, Proficient in English (IELTS: 7.5)</span>
            <br />
            <span><b>Computing Languages:</b> HTML5, CSS3, JavaScript, Python</span>
            <br />
            <span><b>Interest:</b> Linguistics, Games, Blockchain, Stock Trading, Startup, Food & Cooking</span>
            <br />
            <br />
            <hr />
            <br />

            {/* <!-- Contact --> */}
            <p className="head" style={{ fontSize: "20px", fontWeight: "bold" }}>Contact</p>
            <br />
            <span><b>Tel:</b> 061-651-9196</span>
            <br />
            <span><b>Email:</b> thatana.b@gmail.com</span>
            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
