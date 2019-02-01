import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Education extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4} style={{fontFamily: 'Raleway'}}>
                        {this.props.startMonth}  {this.props.startYear} - {this.props.endMonth}  {this.props.endYear}
                    </Cell>
                    <Cell col={8}>
                        <h4 style={{marginTop: '0px', fontFamily: 'Raleway'}}>{this.props.degreeName}</h4>
                        <p>{this.props.schoolName}, {this.props.schoolCity}, {this.props.schoolState}</p>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Education;