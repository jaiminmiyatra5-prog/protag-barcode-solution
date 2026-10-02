import { useState } from 'react';
import {
    FaBuilding,
    FaUser,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaClipboardList,
    FaRulerCombined,
    FaBoxes,
    FaPaperPlane,
    FaCheckCircle,
    FaTags,
    FaBoxOpen,
    FaTape,
    FaPrint,
    FaShieldAlt,
    FaTruck,
    FaHeadset,
    FaHandshake,
    FaChevronDown
} from 'react-icons/fa';
import './Quote.css';

const Quote = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        contactPerson: '',
        contactNumber: '',
        email: '',
        city: '',
        product: [],
        size: '',
        quantity: '',
        requirement: '',
        message: ''
    });

    const [status, setStatus] = useState('');
    const [isSending, setIsSending] = useState(false);
    const [isProductOpen, setIsProductOpen] = useState(false);

    const productOptions = [
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
            product: checked
                ? [...prev.product, value]
                : prev.product.filter((item) => item !== value)
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.product.length === 0) {
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
                        _subject: `Quote Request - ${formData.companyName}`,
                        _captcha: 'false',
                        companyName: formData.companyName,
                        contactPerson: formData.contactPerson,
                        contactNumber: formData.contactNumber,
                        email: formData.email,
                        city: formData.city,
                        product: formData.product.join(', '),
                        size: formData.size,
                        quantity: formData.quantity,
                        requirement: formData.requirement,
                        message: formData.message
                    })
                }
            );

            if (!response.ok) {
                throw new Error('Unable to send quote request');
            }

            setStatus('success');
            setFormData({
                companyName: '',
                contactPerson: '',
                contactNumber: '',
                email: '',
                city: '',
                product: [],
                size: '',
                quantity: '',
                requirement: '',
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
        <section className="quote-page">
            {/* HERO */}
            <section className="quote-hero">
                <div className="quote-hero-glow" />
                <div className="container quote-hero-inner">
                    <div className="quote-hero-copy">
                        <span className="quote-eyebrow">
                            <span className="quote-eyebrow-line" />
                            REQUEST A QUOTE
                        </span>

                        <h1>
                            Get the Right Solution
                            <span> at the Right Price.</span>
                        </h1>

                        <p>
                            Tell us what you need. Our team will review your requirement
                            and share a suitable quotation based on your product,
                            specification and quantity.
                        </p>

                        <div className="quote-hero-points">
                            <span><FaCheckCircle /> Requirement-based pricing</span>
                            <span><FaCheckCircle /> Custom sizes & specifications</span>
                            <span><FaCheckCircle /> B2B-focused support</span>
                        </div>
                    </div>

                    <div className="quote-hero-art" aria-hidden="true">
                        <img src="/contact-hero-products.png" alt="" />
                    </div>
                </div>
            </section>

            {/* QUOTE AREA */}
            <section className="container quote-layout">
                {/* FORM */}
                <div className="quote-form-card">
                    <div className="quote-form-heading">
                        <span>
                            <FaClipboardList /> SHARE YOUR REQUIREMENT
                        </span>
                        <h2>Tell Us What You Need</h2>
                        <p>
                            The more details you share, the more accurately our team can
                            prepare your quotation.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="quote-section-title">
                            <span>01</span>
                            Company Details
                        </div>

                        <div className="quote-form-row">
                            <div className="quote-field">
                                <label htmlFor="companyName">
                                    <FaBuilding /> Company Name <b>*</b>
                                </label>
                                <input
                                    id="companyName"
                                    name="companyName"
                                    type="text"
                                    placeholder="Enter company name"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    autoComplete="organization"
                                    required
                                />
                            </div>

                            <div className="quote-field">
                                <label htmlFor="contactPerson">
                                    <FaUser /> Contact Person <b>*</b>
                                </label>
                                <input
                                    id="contactPerson"
                                    name="contactPerson"
                                    type="text"
                                    placeholder="Your name"
                                    value={formData.contactPerson}
                                    onChange={handleChange}
                                    autoComplete="name"
                                    required
                                />
                            </div>
                        </div>

                        <div className="quote-form-row">
                            <div className="quote-field">
                                <label htmlFor="contactNumber">
                                    <FaPhoneAlt /> Contact Number <b>*</b>
                                </label>
                                <input
                                    id="contactNumber"
                                    name="contactNumber"
                                    type="tel"
                                    placeholder="10-digit mobile number"
                                    value={formData.contactNumber}
                                    onChange={handleChange}
                                    autoComplete="tel"
                                    inputMode="tel"
                                    required
                                />
                            </div>

                            <div className="quote-field">
                                <label htmlFor="email">
                                    <FaEnvelope /> Email ID <b>*</b>
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="business@email.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    autoComplete="email"
                                    required
                                />
                            </div>
                        </div>

                        <div className="quote-field quote-field-full">
                            <label htmlFor="city">
                                <FaMapMarkerAlt /> City / Delivery Location
                            </label>
                            <input
                                id="city"
                                name="city"
                                type="text"
                                placeholder="e.g. Ahmedabad, Gujarat"
                                value={formData.city}
                                onChange={handleChange}
                                autoComplete="address-level2"
                            />
                        </div>

                        <div className="quote-section-title quote-product-title">
                            <span>02</span>
                            Product & Requirement
                        </div>

                        <div className="quote-form-row quote-product-row">
                            <div className="quote-field quote-field-full">
                                <label>
                                    <FaTags /> Product <b>*</b>
                                </label>

                                <div className="dropdown-root quote-dropdown-root">
                                    <button
                                        type="button"
                                        className={`dropdown-trigger ${formData.product.length ? 'has-value' : ''}`}
                                        onClick={() => setIsProductOpen((prev) => !prev)}
                                    >
                                        <span>{formData.product.length ? formData.product.join(', ') : 'Select product'}</span>
                                        <FaChevronDown />
                                    </button>

                                    {isProductOpen && (
                                        <div className="dropdown-menu quote-dropdown-menu">
                                            {productOptions.map((option) => (
                                                <label key={option} className="check-option">
                                                    <input
                                                        type="checkbox"
                                                        name="product"
                                                        value={option}
                                                        checked={formData.product.includes(option)}
                                                        onChange={handleCheckboxChange}
                                                    />
                                                    <span>{option}</span>
                                                </label>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="quote-field">
                                <label htmlFor="size">
                                    <FaRulerCombined /> Size / Specification
                                </label>
                                <input
                                    id="size"
                                    name="size"
                                    type="text"
                                    placeholder="e.g. 50 × 50 mm / 500 mm × 35 micron"
                                    value={formData.size}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="quote-form-row">
                            <div className="quote-field">
                                <label htmlFor="quantity">
                                    <FaBoxes /> Required Quantity
                                </label>
                                <input
                                    id="quantity"
                                    name="quantity"
                                    type="text"
                                    placeholder="e.g. 2,000 pcs / 500 kg per month"
                                    value={formData.quantity}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="quote-field">
                                <label htmlFor="requirement">
                                    <FaBoxOpen /> Requirement Type
                                </label>
                                <select
                                    id="requirement"
                                    name="requirement"
                                    value={formData.requirement}
                                    onChange={handleChange}
                                >
                                    <option value="">Select type</option>
                                    <option value="One Time Requirement">One Time Requirement</option>
                                    <option value="Regular Monthly Requirement">Regular Monthly Requirement</option>
                                    <option value="Trial / Sample">Trial / Sample</option>
                                    <option value="Urgent Requirement">Urgent Requirement</option>
                                </select>
                            </div>
                        </div>

                        <div className="quote-field quote-field-full">
                            <label htmlFor="message">
                                <FaClipboardList /> Additional Details
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                placeholder="Mention material, adhesive, core size, printing, GSM/micron, colour, application, delivery timeline or any other important details..."
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </div>

                        <button
                            type="submit"
                            className="quote-submit-btn"
                            disabled={isSending}
                        >
                            {isSending ? (
                                <>
                                    Sending Quote Request...
                                    <span className="quote-spinner" />
                                </>
                            ) : (
                                <>
                                    Request My Quote
                                    <FaPaperPlane />
                                </>
                            )}
                        </button>

                        <p className="quote-note">
                            By submitting this form, you are sharing your business requirement
                            with ProTag Barcode Solution for quotation and follow-up.
                        </p>

                        {status === 'success' && (
                            <div className="quote-success">
                                <FaCheckCircle />
                                <span>
                                    Your quote request has been sent successfully. Our team
                                    will review your requirement and contact you shortly.
                                </span>
                            </div>
                        )}

                        {status === 'error' && (
                            <div className="quote-error">
                                Something went wrong. Please try again or email us directly at
                                protagbarcodesolution@gmail.com.
                            </div>
                        )}
                    </form>
                </div>

                {/* PREMIUM SIDE PANEL */}
                <aside className="quote-side-panel">
                    <div className="side-top">
                        <span className="side-eyebrow">WHY REQUEST A QUOTE?</span>
                        <h2>Built Around Your Requirement.</h2>
                        <p>
                            We focus on specification, quantity and application—not just
                            a generic product price.
                        </p>
                    </div>

                    <div className="quote-benefit-list">
                        <div className="quote-benefit">
                            <span className="benefit-icon"><FaTags /></span>
                            <div>
                                <strong>Product Matching</strong>
                                <small>Suitable product based on your application</small>
                            </div>
                        </div>

                        <div className="quote-benefit">
                            <span className="benefit-icon"><FaRulerCombined /></span>
                            <div>
                                <strong>Custom Specifications</strong>
                                <small>Sizes, micron, material and printing options</small>
                            </div>
                        </div>

                        <div className="quote-benefit">
                            <span className="benefit-icon"><FaBoxes /></span>
                            <div>
                                <strong>Quantity-Based Pricing</strong>
                                <small>Pricing considered around your actual volume</small>
                            </div>
                        </div>

                        <div className="quote-benefit">
                            <span className="benefit-icon"><FaTruck /></span>
                            <div>
                                <strong>Business Supply Support</strong>
                                <small>Reliable B2B supply and communication</small>
                            </div>
                        </div>
                    </div>

                    <div className="side-products">
                        <span>OUR CORE SOLUTIONS</span>
                        <div className="side-product-tags">
                            <em><FaTags /> Barcode Labels</em>
                            <em><FaBoxOpen /> Stretch Film</em>
                            <em><FaTape /> BOPP Tape</em>
                            <em><FaPrint /> Ribbons & Printers</em>
                            <em><FaShieldAlt /> Security Labels</em>
                        </div>
                    </div>

                    <div className="side-bottom">
                        <div className="side-contact-icon"><FaHeadset /></div>
                        <div>
                            <strong>Need help with specifications?</strong>
                            <a href="mailto:protagbarcodesolution@gmail.com">
                                protagbarcodesolution@gmail.com
                            </a>
                        </div>
                    </div>

                </aside>
            </section>

            {/* TRUST STRIP */}
            <section className="quote-trust">
                <div className="container quote-trust-grid">
                    <div>
                        <FaShieldAlt />
                        <span><b>Quality Products</b><small>Trusted & Durable</small></span>
                    </div>
                    <div>
                        <FaTruck />
                        <span><b>On-time Delivery</b><small>Across India</small></span>
                    </div>
                    <div>
                        <FaHeadset />
                        <span><b>Expert Support</b><small>Business Focused</small></span>
                    </div>
                    <div>
                        <FaHandshake />
                        <span><b>Long-term Partnership</b><small>Your Growth, Our Priority</small></span>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Quote;
