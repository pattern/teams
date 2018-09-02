
import React from 'react';
import teams from './data/teams';
import TeamCard from './TeamCard';

class TeamCards extends React.Component {
    handleClick( teamId ) {
        this.props.setTeam( teamId );
    }

    render() {
        const cards = teams.map( ( team ) => {
            return (
                <TeamCard
                    isSelected={ team.id === this.props.selectedTeam }
                    key={ team.id }
                    onClick={ () => this.handleClick( team.id ) }
                    team={ team }
                />
            );
        } );

        return (
            <div className="team-cards">
                { cards }
            </div>
        );
    }
}

export default TeamCards;
