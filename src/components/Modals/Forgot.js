import React from 'react';
import './Modal.css';

export default function ModalF() {
    return (
        <div
            role="button"
            className="modal-wrapper"
            onClick={() => this.props.history.goBack()}
        >
            <div
                role="button"
                className="modal"
                onClick={e => e.stopPropagation()}
            >
                <p>
                    CONTENT
                </p>
            </div>
        </div>
    );
}