import React from 'react';
import {
  Title,
  ExperienceContainer,
  ExperienceWrapper,
  ExperienceDiv,
  EducationDiv,
  DateForm,
  EducationBtn,
  LinktoSchool,
  BreakLineHr,
  EETitle
} from './Experience.style.jsx'

const Experience = () => {
  return (
    <ExperienceContainer id="experience">
      <Title><span style={{ color: 'rgba(77, 217, 248, 1)' }}>&#60;</span>Educations and Experience <span style={{ color: 'rgba(77, 217, 248, 1)' }}>&#47;&#62; </span> <hr style={{ borderColor: ' rgba(57, 55, 55, 1)'}} /></Title>
      <ExperienceWrapper>
        
        <EducationDiv>
          <EETitle>Educations: <span style={{ color: 'rgba(77, 217, 248, 1)' }}>&#123;</span> <span style={{ color: 'rgba(77, 217, 248, 1)' }}>&#125;</span></EETitle>
          <BreakLineHr />
          <div>
            <EducationBtn>Vocational Training : </EducationBtn>
            <h4><span style={{ color: 'rgba(77, 217, 248, 1)' }}>* Front-end web development</span> @ <LinktoSchool href="https://www.jensenyh.se/">Jensen Yrkesutbildning</LinktoSchool><DateForm> (2020-2022) </DateForm></h4>
          </div>
          <div>
            <EducationBtn>Master Degree :</EducationBtn>
            <h4><span style={{ color: 'rgba(12, 248, 248, 1)' }}>* </span>International Marketing @ <LinktoSchool href="https://www.mdu.se/en/malardalen-university">Märladalen University </LinktoSchool> <DateForm> (2008-2009) </DateForm></h4>
          </div>
          <div>
            <EducationBtn>Bachelor Degree :</EducationBtn>
            <h4><span style={{ color: 'rgba(12, 248, 248, 1)' }}>* </span> Tourism Management @ <LinktoSchool href="https://english.jnu.edu.cn/">Jinan University</LinktoSchool><DateForm> (2003-2007) </DateForm></h4>
          </div>
        </EducationDiv>
        <hr/>
        <div>
          <ExperienceDiv>
            <EETitle>Experience: <span style={{ color: 'rgba(77, 217, 248, 1)' }}>&#123;</span> <span style={{ color: 'rgba(77, 217, 248, 1)' }}>&#125;</span></EETitle>
            <BreakLineHr />
            <h4><span style={{ color: 'rgba(77, 217, 248, 1)' }}>Sales Manager </span>@China Trading i Stockholm AB <DateForm> (2009-2019) </DateForm></h4>
            <ul style={{listStyleType:'none'}}>
              <li><span style={{ color: 'rgba(77, 217, 248, 1)', fontSize: '20px', marginRight: '10px' }}>*</span>40 to 45 million SEK in sales per year spread over 100 customers</li>
              <li><span style={{ color: 'rgba(77, 217, 248, 1)', fontSize: '20px', marginRight: '10px' }}>*</span>Full customer life-cycle from lead to long-term relationship</li>
              <li><span style={{ color: 'rgba(77, 217, 248, 1)', fontSize: '20px', marginRight: '10px' }}>*</span>Produce market commercials</li>
            </ul>   
          </ExperienceDiv>
          <ExperienceDiv>
            <h4><span style={{ color: 'rgba(77, 217, 248, 1)' }}>Account Manager </span>@<LinktoSchool href="https://www.cncbinternational.com/home/en/index.jsp">China CITIC Bank</LinktoSchool><DateForm> (2007-2008) </DateForm></h4>
            <ul style={{ listStyleType: 'none' }}>
              <li><span style={{ color: 'rgba(77, 217, 248, 1)', fontSize: '20px', marginRight: '10px' }}>*</span>Deal with customers’ feedbacks</li>
              <li><span style={{ color: 'rgba(77, 217, 248, 1)', fontSize: '20px', marginRight: '10px' }}>*</span>Doing market research and writing customer
analysis reports</li>
            </ul>
          </ExperienceDiv>
        </div>
        
      </ExperienceWrapper>
    </ExperienceContainer>
  )
}

export default Experience
