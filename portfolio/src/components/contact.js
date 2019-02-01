import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import contactUser from '../last_user.jpeg';

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        {/* <h2>Shruti Nanajkar</h2> */}
                        <img 
                            src={contactUser}
                            alt="conatct-avatar"
                            className="contact-img"
                        />
                        {/* <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Graduate Student | Information Systems | Software Developer | Actively seeking fulltime opportunities from May 2019</p> */}
                    </Cell>
                    <Cell col={6}>
                        <h3 style={{fontFamily: 'Acme'}}>Contact Me</h3>
                        <hr />

                    <div className="contact-list">
                        <List>

                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Raleway'}}>
                                    <i className="fa fa-envelope" aria-hidden="true" />
                                    nanajkarshruti@gmail.com
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Raleway'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true" />
                                    (617)-697-1544
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Raleway'}}>
                                    <i className="fa fa-skype" aria-hidden="true" />
                                    shruti.nanajkar
                                </ListItemContent>
                            </ListItem>

                        </List>
                    </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;