import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { connect } from 'react-redux';

import axios from 'axios';
import Config from '../../../Services/Config';

function NewThreadModal({ auth, show, onClosed, onSaved, categories }) {
    const [loading, setLoading] = useState(false);
    const [category_id, setCategoryId] = useState(null);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [formErrors, setFormErrors] = useState({ category_id: null, title: null, content: null });

    function handleCategoryChange(event) {
        setCategoryId(event.target.value)
    }

    function handleTitleChange(event) {
        setTitle(event.target.value);
    }

    function handleContentChange(event) {
        setContent(event.target.value);
    }

    function handleFormSubmit(event) {
        event.preventDefault();

        setFormErrors({ category_id: null, title: null, content: null });
        setLoading(true);

        const threadAttributes = { category_id, title, content };
        const endpoint = `${Config.remoteBaseUrl}/threads?token=${auth.token}`;

        axios.post(endpoint, threadAttributes)
            .then(({ data: thread }) => onSaved(thread.data))
            .catch(_handleFormErrors)
            .finally(() => setLoading(false));

    }

    function _handleFormErrors(error) {
        if(error.response.data.errors) {
            const { errors } = error.response.data;
            let errorsExtracted = { category_id: null, title: null, content: null };

            for(let key in errors) {
                errorsExtracted[key] = errors[key][0];
            }

            setFormErrors({...errorsExtracted});
        }
    }


    return (
        <Modal
            show={show}
            onHide={() => onClosed(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
            centered={true}
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    Create a new thread
                </Modal.Title>
            </Modal.Header>
            <form action="" method="POST" onSubmit={handleFormSubmit}>
                <Modal.Body>
                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <select name="category_id" className="form-control" id="category" onChange={handleCategoryChange}>
                            {
                                categories.map((category) => (
                                    <option value={category.id} key={category.id} >
                                        { category.name }
                                    </option>
                                ))
                            }
                        </select>
                        {
                            formErrors['category_id'] !== null &&
                            <small id="categoryHelp" className="form-text text-danger">
                                { formErrors['category_id'] }
                            </small>
                        }


                    </div>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" id="title" aria-describedby="emailHelp"
                               placeholder="Enter the thread title" onChange={handleTitleChange} />
                        {
                            formErrors['title'] !== null &&
                            <small id="titleHelp" className="form-text text-danger">
                                { formErrors['title'] }
                            </small>
                        }
                    </div>

                    <div className="form-group">
                        <label htmlFor="title">Content</label>
                        <textarea className="form-control " placeholder="Enter the thread content"
                          onChange={handleContentChange}
                        />
                        {
                            formErrors['content'] !== null &&
                            <small id="contentHelp" className="form-text text-danger">
                                { formErrors['content'] }
                            </small>
                        }
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-success" type="submit">
                        { loading ? 'Saving...' : 'Save changes' } <i className="fa fa-check" />
                    </button>
                </Modal.Footer>
            </form>
        </Modal>
    )
}

const mapStateToProps = ({ categories }) => ({ categories });

export default connect(mapStateToProps)(NewThreadModal);
