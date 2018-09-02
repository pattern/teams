
import React from 'react';

class TeamCard extends React.Component {
    render() {
        const team = this.props.team;
        return (
            <div
                className={ this.props.isSelected ? 'selected team-card' : 'team-card' }
                onClick={ () => this.props.onClick() }>
                { team.iconSrc ? <img alt={ team.name + ' Team Icon' } className="team-icon" src={ team.iconSrc } /> : null }
                <h3 className="team-name">{ team.name }</h3>
                { team.tagline ? <div className="team-abbr">{ team.tagline }</div> : <div className="team-abbr">&nbsp;</div> }
            </div>
        );
    }
}

export default TeamCard;
