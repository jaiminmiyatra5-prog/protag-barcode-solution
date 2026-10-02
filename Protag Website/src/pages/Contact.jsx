import { useState } from 'react';
import {
    FaBuilding,
    FaPhoneAlt,
    FaEnvelope,
    FaClipboardList,
    FaPaperPlane,
    FaCheckCircle,
    FaTags,
    FaBoxOpen,
    FaPrint,
    FaTape,
    FaShieldAlt,
    FaLayerGroup,
    FaTruck,
    FaHeadset,
    FaHandshake,
    FaChevronDown
} from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        contactNumber: '',
        email: '',
        reason: [],
        message: ''
    });

    const [status, setStatus] = useState('');
    const [isSending, setIsSending] = useState(false);
    const [isReasonOpen, setIsReasonOpen] = useState(false);

    const requirementOptions = [
        'Barcode Labels',
        'Barcode Ribbons',
        'Barcode Printers',
        'A4 Sheet Labels',
        'Stretch Film',
        'BOPP Tape',
        'Custom Requirement',
        'Other'
    ];

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;

        setFormData((prev) => ({
            ...prev,
            reason: checked
                ? [...prev.reason, value]
                : prev.reason.filter((item) => item !== value)
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.reason.length === 0) {
            setStatus('error');
            return;
        }

        setIsSending(true);
        setStatus('');

        try {
            const response = await fetch(
                'https://formsubmit.co/ajax/aa4543b643aa1074216f7042db88eab9',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json'
                    },
                    body: JSON.stringify({
                        _subject: `Requirement from ${formData.companyName}`,
                        _captcha: 'false',
                        companyName: formData.companyName,
                        contactNumber: formData.contactNumber,
                        email: formData.email,
                        reason: formData.reason.join(', '),
                        message: formData.message
                    })
                }
            );

            if (!response.ok) {
                throw new Error('Unable to send the requirement');
            }

            setStatus('success');
            setFormData({
                companyName: '',
                contactNumber: '',
                email: '',
                reason: [],
                message: ''
            });
        } catch (error) {
            console.error(error);
            setStatus('error');
        } finally {
            setIsSending(false);
        }
    };

    return (
        <section className="contact-page">
            {/* HERO */}
            <section className="contact-hero">
                <div className="contact-hero-overlay" />
                <div className="container contact-hero-inner">
                    <div className="hero-copy">
                        <span className="contact-label">
                            <span className="label-line" />
                            GET IN TOUCH
                        </span>

                        <h1>
                            Let’s Discuss Your
                            <span> Requirement</span>
                        </h1>

                        <p>
                            Looking for reliable barcode, labeling or industrial packaging
                            solutions? Share your requirement with our team.
                        </p>
                    </div>
                </div>
            </section>

            {/* MAIN CONTACT SECTION */}
            <section className="container contact-container">
                {/* LEFT - FORM */}
                <div className="contact-form-card">
                    <div className="form-heading">
                        <span className="form-eyebrow">
                            <FaEnvelope /> SEND US A MESSAGE
                        </span>

                        <h2>Tell Us What You Need</h2>

                        <p>
                            Fill in your details and our team will get back to you regarding
                            your requirement.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="companyName">
                                    <FaBuilding /> Company Name
                                    <span>*</span>
                                </label>

                                <input
                                    id="companyName"
                                    type="text"
                                    name="companyName"
                                    placeholder="Enter company name"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    autoComplete="organization"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="contactNumber">
                                    <FaPhoneAlt /> Contact Number
                                    <span>*</span>
                                </label>

                                <input
                                    id="contactNumber"
                                    type="tel"
                                    name="contactNumber"
                                    placeholder="Enter contact number"
                                    value={formData.contactNumber}
                                    onChange={handleChange}
                                    autoComplete="tel"
                                    inputMode="tel"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">
                                <FaEnvelope /> Email ID
                                <span>*</span>
                            </label>

                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Enter your email address"
                                value={formData.email}
                                onChange={handleChange}
                                autoComplete="email"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>
                                <FaClipboardList /> Select your requirement
                                <span>*</span>
                            </label>

                            <div className="dropdown-root">
                                <button
                                    type="button"
                                    className={`dropdown-trigger ${formData.reason.length ? 'has-value' : ''}`}
                                    onClick={() => setIsReasonOpen((prev) => !prev)}
                                >
                                    <span>{formData.reason.length ? formData.reason.join(', ') : 'Select your requirement'}</span>
                                    <FaChevronDown />
                                </button>

                                {isReasonOpen && (
                                    <div className="dropdown-menu contact-dropdown-menu">
                                        {requirementOptions.map((option) => (
                                            <label key={option} className="check-option">
                                                <input
                                                    type="checkbox"
                                                    name="reason"
                                                    value={option}
                                                    checked={formData.reason.includes(option)}
                                                    onChange={handleCheckboxChange}
                                                />
                                                <span>{option}</span>
                                            </label>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">
                                <FaClipboardList /> Message / Requirement Details
                                <span>*</span>
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                placeholder="Tell us about your product, size, quantity or any other requirement..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="contact-submit-btn"
                            disabled={isSending}
                        >
                            {isSending ? (
                                <>
                                    Sending...
                                    <span className="button-spinner" />
                                </>
                            ) : (
                                <>
                                    Send Requirement
                                    <FaPaperPlane />
                                </>
                            )}
                        </button>

                        {status === 'success' && (
                            <div className="form-success">
                                <FaCheckCircle />
                                <span>
                                    Thank you! Your requirement has been sent successfully.
                                    Our team will contact you shortly.
                                </span>
                            </div>
                        )}

                        {status === 'error' && (
                            <div className="form-error">
                                Something went wrong. Please try again or contact us directly
                                by email.
                            </div>
                        )}
                    </form>
                </div>

                {/* RIGHT - BUSINESS PANEL */}
                <aside className="contact-info-panel">
                    <div className="panel-decoration panel-decoration-top" />
                    <div className="panel-decoration panel-decoration-bottom" />

                    <div className="panel-top">
                        <span className="panel-eyebrow">
                            PROTAG BARCODE SOLUTION
                            <span className="panel-line" />
                        </span>

                        <h2>
                            Solutions That Fit Your
                            <span> Business</span>
                        </h2>

                        <p>
                            From barcode identification to industrial packaging, we provide
                            requirement-based solutions for businesses across different industries.
                        </p>
                    </div>

                    <div className="product-mini-grid">
                        <div className="mini-product">
                            <div className="mini-icon"><FaTags /></div>
                            <div>
                                <h4>Barcode &amp; Labels</h4>
                                <p>Custom Printing &amp; Materials</p>
                            </div>
                        </div>

                        <div className="mini-product">
                            <div className="mini-icon"><FaBoxOpen /></div>
                            <div>
                                <h4>Stretch Film</h4>
                                <p>Industrial Packaging</p>
                            </div>
                        </div>

                        <div className="mini-product">
                            <div className="mini-icon"><FaTape /></div>
                            <div>
                                <h4>BOPP Tape</h4>
                                <p>Plain &amp; Printed Options</p>
                            </div>
                        </div>

                        <div className="mini-product">
                            <div className="mini-icon"><FaLayerGroup /></div>
                            <div>
                                <h4>LD-HDPE Roll &amp; Sheet</h4>
                                <p>Flexible Packaging</p>
                            </div>
                        </div>

                        <div className="mini-product">
                            <div className="mini-icon"><FaPrint /></div>
                            <div>
                                <h4>Ribbons &amp; Printers</h4>
                                <p>TSC / Citizen / Zebra</p>
                            </div>
                        </div>

                        <div className="mini-product">
                            <div className="mini-icon"><FaShieldAlt /></div>
                            <div>
                                <h4>Void &amp; Security Labels</h4>
                                <p>Tamper Proof Solutions</p>
                            </div>
                        </div>
                    </div>

                    <div className="why-contact">
                        <h3>Why Contact ProTag?</h3>

                        <div className="benefit">
                            <FaCheckCircle />
                            <span>Requirement based product solutions</span>
                        </div>

                        <div className="benefit">
                            <FaCheckCircle />
                            <span>Custom sizes and specifications</span>
                        </div>

                        <div className="benefit">
                            <FaCheckCircle />
                            <span>Reliable industrial packaging products</span>
                        </div>

                        <div className="benefit">
                            <FaCheckCircle />
                            <span>Quick response for business enquiries</span>
                        </div>
                    </div>

                    <div className="direct-contact">
                        <span>Prefer Email?</span>

                        <a href="mailto:protagbarcodesolution@gmail.com">
                            <FaEnvelope />
                            protagbarcodesolution@gmail.com
                        </a>
                    </div>

                    <div className="panel-barcode-art" aria-hidden="true">
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>

                    <div className="panel-tagline">
                        SCAN · IDENTIFY · GROW
                    </div>
                </aside>
            </section>

            {/* TRUST STRIP */}
            <section className="contact-trust-strip">
                <div className="container trust-grid">
                    <div className="trust-item">
                        <FaShieldAlt />
                        <div>
                            <strong>Quality Products</strong>
                            <span>Trusted &amp; Durable</span>
                        </div>
                    </div>

                    <div className="trust-divider" />

                    <div className="trust-item">
                        <FaTruck />
                        <div>
                            <strong>On-time Delivery</strong>
                            <span>Across India</span>
                        </div>
                    </div>

                    <div className="trust-divider" />

                    <div className="trust-item">
                        <FaHeadset />
                        <div>
                            <strong>Expert Support</strong>
                            <span>Always Here</span>
                        </div>
                    </div>

                    <div className="trust-divider" />

                    <div className="trust-item">
                        <FaHandshake />
                        <div>
                            <strong>Long Term Partnership</strong>
                            <span>Your Growth, Our Priority</span>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Contact;
