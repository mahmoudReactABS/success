import React from 'react'
import { useTranslationContext } from '../translationContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';
function Error() {
 const { t, i18n } = useTranslationContext(),
 navigate = useNavigate();
 return (
  <section className='my-4 text-center'>
   <FontAwesomeIcon icon={faTriangleExclamation} className='text-warning' style={{fontSize:'120px'}} />
   <h1>{t('errorText')}</h1>
   <button onClick={()=>navigate('/')} className='btn btn-lg'>{t('home')}</button>
  </section>
 )
}

export default Error
