import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Experience extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4} style={{fontFamily: 'Raleway'}}>
                        {this.props.startMonth}  {this.props.startYear} - {this.props.endMonth}  {this.props.endYear}
                    </Cell>
                    <Cell col={8}>
                        <h4 style={{marginTop: '0px', fontFamily: 'Raleway'}}>{this.props.position}</h4>
                        <p>{this.props.companyName}, {this.props.companyCity}, {this.props.companyState}</p>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Experience;