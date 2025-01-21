import React, { useState, useEffect } from 'react'
import { useTranslationContext } from '../translationContext';

function MessageForm(props) {
    const { t, i18n } = useTranslationContext(),
    txt_dir=i18n.language == 'en' ? "text-start":"text-end";

    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        message: ''
    });


    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    useEffect(() => {
        const { fullName, phoneNumber, email, message } = formData;
        if (fullName && phoneNumber && email && message) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }, [formData]);

    return (
        <>
            {props.align != 'ups' ?
                <form className={`row ${txt_dir}`}>
                    <section className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                        <div className='w-100 my-3'>
                            <h6>{t('fName')}</h6>
                            <input required className='bg-transparent form-control w-100' type='text' name='fullName' value={formData.fullName} onChange={handleInputChange} />
                        </div>
                        <div className='w-100 my-3'>
                            <h6>{t('phoneNo')}</h6>
                            <input required className='bg-transparent form-control w-100' type='tel' name='phoneNumber' value={formData.phoneNumber} onChange={handleInputChange} />
                        </div>
                        <div className='w-100 my-3'>
                            <h6>{t('mail')}</h6>
                            <input required className='bg-transparent form-control w-100' type='email' name='email' value={formData.email} onChange={handleInputChange} />
                        </div>
                    </section>

                    <section className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                        <div className="my-3">
                            <h6>{t('message')}</h6>
                            <textarea required style={{ resize: 'none' }} rows={'8'} className='bg-transparent form-control w-100' name='message'
                                value={formData.message} onChange={handleInputChange}></textarea>
                        </div>
                    </section>

                    <button className='btn w-25 mx-auto py-3 fs-5' type='submit' disabled={isButtonDisabled}>
                        {t('sub')}
                    </button>
                </form> : <form className={txt_dir}>
                    <section className='row'>
                        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 my-3'>
                            <h6>{t('fName')}</h6>
                            <input required className='bg-transparent form-control w-100' type='text' name='fullName' value={formData.fullName} onChange={handleInputChange} />
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 my-3'>
                            <h6>{t('phoneNo')}</h6>
                            <input required className='bg-transparent form-control w-100' type='tel' name='phoneNumber' value={formData.phoneNumber} onChange={handleInputChange} />
                        </div>
                    </section>

                    <section className=''>
                        <div className='w-100 my-3'>
                            <h6>{t('mail')}</h6>
                            <input required className='bg-transparent form-control w-100' type='email' name='email' value={formData.email} onChange={handleInputChange} />
                        </div>
                        <div className="my-3">
                            <h6>{t('message')}</h6>
                            <textarea required style={{ resize: 'none' }} rows={'8'} className='bg-transparent form-control w-100' name='message'
                                value={formData.message} onChange={handleInputChange}></textarea>
                        </div>
                    </section>

                    <button className='btn px-5 mx-auto py-3 fs-5' type='submit' disabled={isButtonDisabled}>
                        {t('sub')}
                    </button>
                </form>
            }
        </>
    );
}

export default MessageForm;
