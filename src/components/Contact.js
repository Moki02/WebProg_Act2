import React from 'react';

const Contact = () => {
    return (
        <section>
            <h1>Contact Us</h1>
            <form>
                <label>
                    Name: 
                    <input type="text" name="name" />
                </label>
                <label>
                    Email: 
                    <input type="email" name="email" />
                </label>
                <label>
                    Message:
                    <textarea name="message"></textarea>
                </label>
                <button type="submit" disabled>Submit</button>
            </form>
        </section>
    );
};

export default Contact;
