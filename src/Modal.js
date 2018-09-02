
import React from 'react';
import PersonFaceCard from './PersonFaceCard';

class Modal extends React.Component {
    handleClickInside = event => {
        event.stopPropagation();
    };

    render() {
        const person = this.props.person;
        if( !person ) {
            return null;
        }
        return (
            <div className={ this.props.show ? 'modal show' : 'modal' } onClick={ () => this.props.onClose() }>
                <div className="modal-content" onClick={ event => this.handleClickInside( event ) }>
                    <div className="left">
                        <PersonFaceCard person={ person } />
                        <div className="name">{ this.props.person.name }</div>
                        <div className="role">{ this.props.person.role }</div>
                    </div>
                    <div className="right">
                        <img alt="Close Modal" className="close-icon" src="close-x.svg" onClick={ () => this.props.onClose() } />
                        <div className="text">
                            <div className="text-spacer"></div>
                            <h3>Bio</h3>
                            <div dangerouslySetInnerHTML={{ __html : this.props.person.bio }} />
                            <div className="text-spacer"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;
