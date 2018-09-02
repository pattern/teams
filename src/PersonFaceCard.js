
import React from 'react';
import md5 from 'md5';

let genInitials = function( name ) {
    const splitName = name.split( ' ' );
    return splitName[ 0 ][ 0 ] + splitName[ splitName.length - 1 ][ 0 ];
};

let getColorClass = function( person ) {
    return 'color-' + person.name[ 0 ].toLowerCase();
};

const gravatarImageUrl = function( person ) {
    const hash = md5( person.gravatarEmail );
    return `https://www.gravatar.com/avatar/${ hash }`;
};

class PersonFaceCard extends React.Component {
    onClick( person ) {
        if( this.props.setPerson ) {
            this.props.setPerson( person );
        }
    }

    render() {
        if( !this.props.person ) {
            return null;
        }

        let card;
        if( this.props.person.gravatarEmail ) {
            card = (
                <img alt={ this.props.person.name + ' Gravatar Image' } className="face-card" src={ gravatarImageUrl( this.props.person ) } />
            );
        } else {
            card = (
                <div
                    className={ 'person-card ' + getColorClass( this.props.person ) }
                    onClick={ () => this.onClick( this.props.person ) }>
                    <div className="initials">{ genInitials( this.props.person.name ) }</div>
                </div>
            );
        }

        return card;
    }
}

export default PersonFaceCard;
