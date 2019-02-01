import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button} from 'react-mdl';

class Projects extends Component {
    constructor(props){
        super(props);
        this.state={ activeTab: 0 };
    }

    // If the active Tab is 0 that means its the React tab and then we can render watever we want, activeTab = 1 is Angular
    toggleCategories(){
        //React cards
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                    {/* React Project card -- Tic tac toe game */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', fontFamily: 'Acme',
                                           background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>
                            Tic Tac Toe Game
                        </CardTitle>
                        {/* <CardText>
                            <p>Tic Tac Toe game description...</p>
                        </CardText> */}
                        <CardActions border>
                            <Button colored>
                                 <a href="https://github.com/shruti-nanajkar/React-tic-tac-toe"
                                    rel="noopener noreferrer" target="_blank">GITHUB</a>
                            </Button>
                        </CardActions>
                        {/* <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu> */}
                    </Card>

                    {/* React Project card -- Instagram Clone */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>
                            Instagram Clone
                        </CardTitle>
                        {/* <CardText>
                            <p>Instagram Clone description...</p>
                        </CardText> */}
                        <CardActions border>
                            <Button colored>
                                <a href="https://github.com/shruti-nanajkar/instagram-clone"
                                   rel="noopener noreferrer" target="_blank">GITHUB</a>
                            </Button>
                        </CardActions>
                        {/* <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu> */}
                    </Card>

                    {/* React Project card -- Weather App */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>
                            Weather App
                        </CardTitle>
                        {/* <CardText>
                            <p>Weather App description...</p>
                        </CardText> */}
                        <CardActions border>
                            <Button colored>
                                <a href="/"
                                   rel="noopener noreferrer" target="_blank">GITHUB</a>
                            </Button>
                        </CardActions>
                        {/* <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu> */}
                    </Card>



                </div>
            )
        }
        //Angular cards
        else if(this.state.activeTab === 1){
            return (
                
                <div className="projects-grid">
                    {/* Angular Project card -- Tour of heroes */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/945/1*aYD002x4UBQ4iJCRbiKJrg.png) center / cover'}}>
                            Tour of Heroes
                        </CardTitle>
                        {/* <CardText>
                            <p>Angular Tour od heroes description...</p>
                        </CardText> */}
                        <CardActions border>
                            <Button colored>
                                 <a href="https://github.com/shruti-nanajkar/angular-tour-of-heroes"
                                    rel="noopener noreferrer" target="_blank">GITHUB</a>
                            </Button>
                        </CardActions>
                        {/* <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu> */}
                    </Card>

                    {/* Angular Project card -- Todo List */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/945/1*aYD002x4UBQ4iJCRbiKJrg.png) center / cover'}}>
                            Todo List
                        </CardTitle>
                        {/* <CardText>
                            <p>Todo list description... Angular 5 used</p>
                        </CardText> */}
                        <CardActions border>
                            <Button colored>
                                <a href="https://github.com/shruti-nanajkar/Todo_Angular5"
                                   rel="noopener noreferrer" target="_blank">GITHUB</a>
                            </Button>
                        </CardActions>
                        {/* <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu> */}
                    </Card>

                    {/* Angular Project card -- cafe App */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/945/1*aYD002x4UBQ4iJCRbiKJrg.png) center / cover'}}>
                            Cafe App
                        </CardTitle>
                        {/* <CardText>
                            <p>Cafe website description... Angular2+ used</p>
                        </CardText> */}
                        <CardActions border>
                            <Button colored>
                                <a href="https://github.com/shruti-nanajkar/Cafe_Website"
                                   rel="noopener noreferrer" target="_blank">GITHUB</a>
                            </Button>
                        </CardActions>
                        {/* <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu> */}
                    </Card>
                </div>
            )
        }
    }

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab style={{fontFamily: 'Acme'}}>React</Tab>
                    <Tab style={{fontFamily: 'Acme'}}>Angular</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;