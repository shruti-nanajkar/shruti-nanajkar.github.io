import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import user from '../user.jpeg';

class Landing extends Component {
    render() {
        return(
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src={user}
                            alt="avatar"
                            className="userIcon-img"
                        />

                        <div className="banner-text">
                            <h1>Software Developer</h1>

                            <hr />

                            <p>JAVA | JavaScript | Angular6 | NodeJS | React | SQL</p>

                            <div className="social-links">

                                {/* LinkedIn handle */}
                                <a href="https://linkedin.com/in/shruti-nanajkar" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* GitHub handle */}
                                <a href="https://github.com/shruti-nanajkar" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                            </div>

                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;