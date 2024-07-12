// FeedbackForm.js
import React from 'react';
import './FeedbackForm.css';

const FeedbackForm = () => {
    return (
        <div className="feedback-form">
            <h3>Tu Opinión es Valiosa</h3>
            <textarea placeholder="Comparte tus pensamientos sobre los instrumentos andinos..."></textarea>
            <button className="andean-button">Enviar Comentario</button>
        </div>
    );
};

export default FeedbackForm;


