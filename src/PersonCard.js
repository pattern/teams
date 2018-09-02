
import React from 'react';

let genInitials = function( name ) {
    const splitName = name.split( ' ' );
    return splitName[ 0 ][ 0 ] + splitName[ splitName.length - 1 ][ 0 ];
};

let getColorClass = function( person ) {
    return 'color-' + person.name[ 0 ].toLowerCase();
};

class PersonCard extends React.Component {
    onClick( person ) {
        if( this.props.setPerson ) {
            this.props.setPerson( person );
        }
    }

    render() {
        if( !this.props.person ) {
            return null;
        }
        return (
            <div
                className={ 'person-card ' + getColorClass( this.props.person ) }
                onClick={ () => this.onClick( this.props.person ) }>
                <div className="initials">{ genInitials( this.props.person.name ) }</div>
            </div>
        );
    }
}

export default PersonCard;
