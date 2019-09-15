import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function SearchModal(props) {
    return (
        <Modal show={props.show} onHide={props.handlerCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>{props.modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{props.modalBody}</Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={props.handlerCloseModal}>
                    <span role="img" aria-label="thumbs up emoji">👍</span>
                </Button>
            </Modal.Footer>
        </Modal>
    );
}