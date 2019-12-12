import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import '../App.scss';
import salonImg from '../img/SageSalon108.jpg';
import BannerComponent from './Banner';

function ServicesComponent (){
  return (
    <div>
      <BannerComponent imgPath={salonImg} />
      <ServiceList />
    </div>

  )
}

function ServiceList (){
  return (
    <div className="service-list-outer">
      <Container maxWidth="md">
        <Grid container direction={'row'} className="service-section-outer">
          <Grid item xs={1}></Grid>
          <Grid item xs={10}>
            <h1 className="services-title">Sage Services</h1>
            <p className="">All new guests will receive a free consultation with one of our specially trained stylists. Please contact Sage Salon to confirm pricing.</p>
              <ExpansionPanel>
               <ExpansionPanelSummary
                 expandIcon={<ExpandMoreIcon />}
                 aria-controls="panel1a-content"
                 id="panel1a-header"
               >
                <h3 className="service-sub-title">Hair Styling</h3>
               </ExpansionPanelSummary>
               <ExpansionPanelDetails>
                 <Grid item xs={12} className="service-section">
                     <p className="service">Haircut</p>
                     <p className="service">Blowdry&#47;Finish</p>
                     <p className="service">Childs Cut &#40;12 and under&#41;</p>
                 </Grid>
               </ExpansionPanelDetails>
             </ExpansionPanel>
             <ExpansionPanel>
               <ExpansionPanelSummary
                 expandIcon={<ExpandMoreIcon />}
                 aria-controls="panel2a-content"
                 id="panel2a-header"
               >
                <h3 className="service-sub-title">Color</h3>
               </ExpansionPanelSummary>
               <ExpansionPanelDetails>
                 <Grid item xs={12} className="service-section">
                     <p className="service">Glaze&#47;Demi &#8211; Permanent</p>
                     <p className="service">Single Process</p>
                     <p className="service">Highlight &#40;full head&#41;</p>
                     <p className="service">Highlight &#40;partial&#41;</p>
                     <p className="service">Single Process with Highlight</p>
                     <p className="service">Balayage</p>
                     <p className="service">Hair Painting</p>
                 </Grid>
               </ExpansionPanelDetails>
             </ExpansionPanel>
             <ExpansionPanel>
               <ExpansionPanelSummary
                 expandIcon={<ExpandMoreIcon />}
                 aria-controls="panel3a-content"
                 id="panel3a-header"
               >
               <h3 className="service-sub-title">Mens</h3>
               </ExpansionPanelSummary>
               <ExpansionPanelDetails>
                 <Grid item xs={12} className="service-section">
                     <p className="service">Cut</p>
                     <p className="service">Color</p>
                 </Grid>
               </ExpansionPanelDetails>
             </ExpansionPanel>
             <ExpansionPanel>
               <ExpansionPanelSummary
                 expandIcon={<ExpandMoreIcon />}
                 aria-controls="panel3a-content"
                 id="panel3a-header"
               >
               <h3 className="service-sub-title">Keratin Treatment&#47;Relaxers</h3>
               </ExpansionPanelSummary>
               <ExpansionPanelDetails>
                 <Grid item xs={12} className="service-section">
                     <p className="service">Keratin Blowout</p>
                     <p className="service">Keratin</p>
                     <p className="service">Relaxer</p>
                 </Grid>
               </ExpansionPanelDetails>
             </ExpansionPanel>
             <ExpansionPanel>
               <ExpansionPanelSummary
                 expandIcon={<ExpandMoreIcon />}
                 aria-controls="panel3a-content"
                 id="panel3a-header"
               >
               <h3 className="service-sub-title">Hair Extensions</h3>
               </ExpansionPanelSummary>
               <ExpansionPanelDetails>
                 <Grid item xs={12} className="service-section">
                     <p className="service">By appointment only</p>
                 </Grid>
               </ExpansionPanelDetails>
             </ExpansionPanel>
             <ExpansionPanel>
               <ExpansionPanelSummary
                 expandIcon={<ExpandMoreIcon />}
                 aria-controls="panel3a-content"
                 id="panel3a-header"
               >
               <h3 className="service-sub-title">Permanent Waves</h3>
               </ExpansionPanelSummary>
               <ExpansionPanelDetails>
                 <Grid item xs={12} className="service-section">
                     <p className="service">Perm</p>
                 </Grid>
               </ExpansionPanelDetails>
             </ExpansionPanel>
             <ExpansionPanel>
               <ExpansionPanelSummary
                 expandIcon={<ExpandMoreIcon />}
                 aria-controls="panel3a-content"
                 id="panel3a-header"
               >
               <h3 className="service-sub-title">Weddings and Special Events</h3>
               </ExpansionPanelSummary>
               <ExpansionPanelDetails>
                 <Grid item xs={12} className="service-section">
                     <p className="service">By appointment only</p>
                 </Grid>
               </ExpansionPanelDetails>
             </ExpansionPanel>
             <ExpansionPanel>
               <ExpansionPanelSummary
                 expandIcon={<ExpandMoreIcon />}
                 aria-controls="panel3a-content"
                 id="panel3a-header"
               >
                 <h3 className="service-sub-title">Makeup</h3>
               </ExpansionPanelSummary>
               <ExpansionPanelDetails>
                 <Grid item xs={12} className="service-section">
                     <p className="service">Application</p>
                     <p className="service">Lash Application</p>
                 </Grid>
               </ExpansionPanelDetails>
             </ExpansionPanel>
             <ExpansionPanel>
               <ExpansionPanelSummary
                 expandIcon={<ExpandMoreIcon />}
                 aria-controls="panel3a-content"
                 id="panel3a-header"
               >
               <h3 className="service-sub-title">Waxing Services</h3>
               </ExpansionPanelSummary>
               <ExpansionPanelDetails>
                 <Grid item xs={12} className="service-section">
                     <p className="service">Brows</p>
                     <p className="service">Lip</p>
                     <p className="service">Chin</p>
                 </Grid>
               </ExpansionPanelDetails>
             </ExpansionPanel>
             <h1 className="services-title">Lashes at Sage</h1>
               <ExpansionPanel>
                 <ExpansionPanelSummary
                   expandIcon={<ExpandMoreIcon />}
                   aria-controls="panel3a-content"
                   id="panel3a-header"
                 >
                   <h3 className="service-sub-title">Lash Extensions</h3>
                 </ExpansionPanelSummary>
                 <ExpansionPanelDetails>
                   <Grid item xs={12} className="service-section">
                       <p className="service">Classic Lashes</p>
                       <p className="service">Hybrid Lashes</p>
                       <p className="service">Volume Lashes</p>
                       <p className="service">Classic Fill</p>
                       <p className="service">Volume Fill</p>
                   </Grid>
                 </ExpansionPanelDetails>
               </ExpansionPanel>
               <ExpansionPanel>
                 <ExpansionPanelSummary
                   expandIcon={<ExpandMoreIcon />}
                   aria-controls="panel3a-content"
                   id="panel3a-header"
                 >
                   <h3 className="service-sub-title">Waxing Services</h3>
                 </ExpansionPanelSummary>
                 <ExpansionPanelDetails>
                   <Grid item xs={12} className="service-section">
                       <p className="service">Brow Wax</p>
                       <p className="service">Brow Wax and Tint</p>
                   </Grid>
                 </ExpansionPanelDetails>
               </ExpansionPanel>
               <ExpansionPanel>
                 <ExpansionPanelSummary
                   expandIcon={<ExpandMoreIcon />}
                   aria-controls="panel3a-content"
                   id="panel3a-header"
                 >
                   <h3 className="service-sub-title">Tanning Services</h3>
                 </ExpansionPanelSummary>
                 <ExpansionPanelDetails>
                   <Grid item xs={12} className="service-section">
                       <p className="service">Spray Tan</p>
                   </Grid>
                 </ExpansionPanelDetails>
               </ExpansionPanel>
               <h1 className="services-title">Products</h1>
                 <Grid item xs={12} className="service-section">
                     <p className="service">Eufora</p>
                     <p className="service">Redkin Color</p>
                     <p className="service">Unite</p>
                 </Grid>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>

      </Container>
    </div>
  )
}

export default ServicesComponent;
