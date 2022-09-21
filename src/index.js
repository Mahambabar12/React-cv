import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';


function Hi() {
  return <div>
    <h1>Maham Babar (Graphic Designer And Web developer)</h1>
    <h3 class="title"> About Me </h3>
    <p>Working give me a lot of skills and experience that believe
      make me best suiter for the job position that is being offered
      with a position of graphic designer
      Highly creative and multitalented graphic designer with extensive
      experience in print design.Exceptional collaborative and
      interpersonal skills</p>
    <h3 class="title"> Contact Info </h3>

    <ul>
      <li>
        <span class="text">03000211967</span>
      </li>
      <li>
        <span class="text">mahambabar11@gmail.com</span>
      </li>
      <li>
        <span class="text">www.linkedin.com/me</span>
      </li>
      <li>
        <span class="text">pakistan, karachi</span>
      </li>
    </ul>
    <h3 class="title"> Personal Info </h3>
    <ul>
      <li>
        <span class="text">Father Name: Babar Hussain</span>
      </li>
      <li>
        <span class="text">D.O.B: 18-11-2002</span>
      </li>
      <li>
        <span class="text">marital status: Single</span>
      </li>
      <li>
        <span class="text"> Nationality: pakistan</span>
      </li>
      <li>
        <span class="text">Religion: Islam</span>
      </li>
      <li>
        <span class="text">CNIC No:</span>
      </li>
      <li>
        <span class="text">Address:</span>
      </li>
    </ul>
    <h3 class="title"> Education </h3>
    <ul>
      <li>
        <h3>Gulshan Campus 2022:</h3>
        <h4>Web & mobile development course</h4>
      </li>
      <li>
        <h3>Graducation 2022:</h3>
        <h4>B.A on going university of karachi</h4>
      </li>
      <li>
        <h3>College GCTG karachi 2021:</h3>
        <h4>Course Graphic Designing</h4>
      </li>
      <li>
        <h3>Intermediate karachi board 2020:</h3>
        <h4>Pre Medical</h4>
      </li>
      <li>
        <h3>Matric karachi board 2017:</h3>
        <h4>Biology</h4>
      </li>
    </ul>
    <h3 class="title">Work Experience</h3>
    <ul>
            <li>
                <h3>WWF-Pakistan:</h3>
                <h4>Biodiversity of karachi coast at watland centre
                    sandspit karachi</h4>
            </li>
            <li>
                <h3>Earth Week:</h3>
                <h4>University of karachi on18 -22 april 2018</h4>
            </li>
                <h3>SZABIST ZABTech Working :
                    (Shaheed Zulfikar Ali Bhutto Institute Of
                    Science And Technology):</h3>
                    <h3>Techoid Intenship:</h3>
                <h4><li>One Month Internship</li></h4>
                <h4><li>Tshirts and Mobile Cover Design</li></h4>
        </ul>
            <h3 class="contactInfo language">Software</h3>
            <ul>
                <li>
                   <span class="text">Adobe Illustrator</span>
                </li>
                <li>
                    <span class="text">Adobe Photoshop</span>
                 </li>
                 <li>
                    <span class="text">Urdu Inpage</span>
                 </li>
                 </ul>
                 <h3 class="contactInfo language">Skills</h3>
                 <ul>
                <li>
                   <span class="text">Html</span>
                </li>
                <li>
                    <span class="text">Css</span>
                 </li>
                 <li>
                    <span class="text">Javascript</span>
                 </li>
                 <li>
                    <span class="text">Bootstrap</span>
                 </li>
                 <li>
                    <span class="text">React</span>
                 </li>
                 <li>
                    <span class="text">Ms Word</span>
                 </li>
                 <li>
                    <span class="text">Ms Excel</span>
                 </li>
                 <li>
                    <span class="text">Ms Powerpoint</span>
                 </li>
                 <li>
                    <span class="text">Computer oprating</span>
                 </li>
                 </ul>
                 <h3 class="contactInfo language">Languages</h3>
                 <ul>
                 <li>
                    <span class="text">English</span>
                 </li>
                 <li>
                    <span class="text">Urdu</span>
                 </li>
                 </ul>
  </div>;
  
}
ReactDOM.render(<Hi />, document.querySelector('#root'));