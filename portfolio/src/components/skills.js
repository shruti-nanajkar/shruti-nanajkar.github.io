import React, {Component} from 'react';
import {Grid, Cell, ProgressBar} from 'react-mdl';

class Skills extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={12}>
                        <div style={{display: 'flex', fontFamily: 'Raleway'}}>{this.props.skill} <ProgressBar style={{margin: 'auto', width: '85%'}}
                        progress={this.props.progress} /></div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Skills;