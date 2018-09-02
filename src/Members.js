
import React from 'react';
import PersonCard from './PersonCard';

class Members extends React.Component {
    render() {
        let personCards = [];
        this.props.members.forEach( ( person ) => {
            personCards.push(
                <PersonCard
                    key={ person.name }
                    person={ person }
                    setPerson={ ( person ) => this.props.setPerson( person ) }
                />
            );
        } );

        return (
            <div>
                { personCards }
            </div>
        );
    }
}

export default Members;
