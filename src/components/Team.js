import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import '../App.scss';
import teamData from '../data/team-data.json';
import salonImg from '../img/SageSalon117.jpg';
import maryImg from '../img/SageSalon38.jpg';
import BannerComponent from './Banner';

function TeamComponent ({ teamData }){


 return (
  <div>
    <BannerComponent imgPath={salonImg} />
    <div className="stylist-outer">
      <StylistComponent teamData={teamData}/>
    </div>
  </div>

 )
}

// const TeamMember = ({ teamData }) => (
//   <ul>
//     {teamData.map(item =>{
//       console.log(item)
//       return <div>{item}</div>;
//     }
//   )}
//   </ul>
// );


function StylistComponent() {
  var commentNodes = teamData.map(function (member, i){
    console.log(member.teamMember);
        return (
          <Grid item xs={6} className="stylist-img-outer" key={i}>
            <div className="team-member-outer">
              <div className="team-member" style={{ background: `url(${member.teamMember.imageTag}) center center`, backgroundSize: 'cover', backgroundColor: 'rgba(233, 232, 234, 1)' }}>
                <div className="txt-wrapper">
                  <h1 className="team-name">{member.teamMember.name}</h1>
                  <h3 className="team-title">{member.teamMember.position}</h3>
                </div>
              </div>
            </div>
          </Grid>
        );
    });
  return (
    <div>
      <Container maxWidth="md">
        <Grid container direction={'row'}>
        {commentNodes}
      </Grid>
      </Container>

    </div>
  )
}

export default TeamComponent;
