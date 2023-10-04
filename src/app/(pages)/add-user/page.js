"use client"
import { useState } from 'react';
import axios from 'axios';
import styles from './user-form.module.scss';

const AddUser = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Front-end validation
        const { email, password, confirmPassword } = formData;
        const newErrors = {};
        if (!email) newErrors.email = 'Email is required';
        if (!password) newErrors.password = 'Password is required';
        if (password !== confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            const response = await axios.post('/api/users', formData);

            // Handle success
            setSuccessMessage(response.data.message);
            setFormData({ email: '', password: '', confirmPassword: '' });
            setErrors({});
        } catch (error) {
            // Handle error
            setErrors({ ...errors, server: 'An error occurred on the server' });
        }
    };

    return (
        <div className={styles.addUserContainer}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <span className={styles.error}>{errors.email}</span>}
                </label>

                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && (
                        <span className={styles.error}>{errors.password}</span>
                    )}
                </label>

                <label>
                    Confirm Password:
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                    {errors.confirmPassword && (
                        <span className={styles.error}>{errors.confirmPassword}</span>
                    )}
                </label>

                <button type="submit">Submit</button>

                {errors.server && <span className={styles.error}>{errors.server}</span>}
                {successMessage && (
                    <div className={styles.success}>{successMessage}</div>
                )}
            </form>
        </div>
    );
};

export default AddUser;