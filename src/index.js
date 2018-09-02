
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import people from './data/people';
import teams from './data/teams';
import Members from './Members';
import Modal from './Modal';
import TeamCards from './TeamCards';
import config from './data/config';

class Body extends React.Component {
    render() {
        const team = teams.find( team => team.id === this.props.selectedTeam );
        let members = [];
        people.forEach( ( person ) => {
            if( person.teams.includes( team.id ) ) {
                members.push( person );
            }
        } );

        return (
            <div className="body">
                <h2>{ team.name }</h2>
                <h4>Description:</h4>
                <p>{ team.description }</p>
                <h4>Members ({ members.length }):</h4>
                <Members
                    members={ members }
                    selectedTeam={ this.props.selectedTeam }
                    setPerson={ ( person ) => this.props.setPerson( person ) }
                />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="header-inner">
                    <img
                        alt={ config.pageTitle }
                        src={ config.headerImage.src }
                        style={ config.headerImage.style }/>
                    <TeamCards
                        selectedTeam={ this.props.selectedTeam }
                        setTeam={ ( teamId ) => this.props.setTeam( teamId ) }
                    />
                </div>
            </div>
        );
    }
}

class App extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            modalOpen : false,
            selectedTeam : 0,
            selectedPerson : undefined,
        };
    }

    componentDidMount() {
        document.title = config.pageTitle;
    }

    setModalState( state ) {
        this.setState( {
            modalOpen : state,
        } );
    }

    setPerson( person ) {
        this.setState( {
            selectedPerson : person,
        } );
        this.setModalState( true );
    }

    setTeam( teamId ) {
        this.setState( {
            selectedTeam : teamId,
        } );
    }

    render() {
        return (
            <div className="container">
                <Modal
                    onClose={ () => this.setModalState( false ) }
                    person={ this.state.selectedPerson }
                    show={ this.state.modalOpen }
                />
                <Header
                    selectedTeam={ this.state.selectedTeam }
                    setTeam={ ( teamId ) => this.setTeam( teamId ) }
                />
                <Body
                    selectedTeam={ this.state.selectedTeam }
                    setPerson={ ( person ) => this.setPerson( person ) }
                />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
