import React from 'react'
import s from './ProfileInfo.module.css'
import { reduxForm } from 'redux-form'
import { Input, createField } from '../../common/FormsControls/FormsControls.js'
import { contacts } from './ProfileInfo.tsx'

const ProfileDataForm = ({handleSubmit, profile, error}) => {
  return <form onSubmit={ handleSubmit } className={s.formBlock}>
    <div className={s.descriptionBlock}>
      <div className={s.fullName}>
        {createField(Input, [], 'fullName', 'Full name') }
      </div>
      <div className={s.aboutMe}>
        {createField(Input, [], 'aboutMe', 'About me') }
      </div>
      <div className={s.lookingForAJobBlock}>
        {createField(Input, [], 'lookingForAJob', null, {type: 'checkbox'})}
        Looking for a job
      </div>
      <div className={s.lookingForAJobDescription}>
        {createField(Input, [], 'lookingForAJobDescription', 'My skills') }
      </div>
    </div>

    <div className={s.contacts}>
      <span className={s.contactsHeader}>Contacts:</span>
      <div className={s.linksBlock}>
        {Object.keys(profile.contacts).map(key => {
          return <div key={key} className={s.imgPlusTextBlock}>    
          <img className={s.smallIcon} src={contacts[key]} alt='link-img' />
          {createField(Input, [], 'contacts.' + key, key)}
        </div>
        })}
      </div>
    </div>

    <div>
      <button>Save</button>
      {error &&
        <div className={s.formSummaryError}>
          {error}
        </div>
      }
    </div>
  </form>
}

const ProfileDataFormReduxForm = reduxForm({
  form: 'edit-profile',
  enableReinitialize: true,
  destroyOnUnmount: false})(ProfileDataForm)

export default ProfileDataFormReduxForm