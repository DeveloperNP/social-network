import React from 'react'
import s from './ProfileInfo.module.css'
import { InjectedFormProps, reduxForm } from 'redux-form'
import { Input, createField } from '../../common/FormsControls/FormsControls.tsx'
import { contacts } from './ProfileInfo.tsx'
import { ProfileType } from '../../../types/types.ts'

export type ProfileDataFormValuesType = ProfileType

type ProfileDataFormValuesTypeKeys = keyof ProfileDataFormValuesType

type ProfileDataFormOwnProps = {
  profile: ProfileType
}

type ProfileDataFormPropsType = InjectedFormProps<ProfileDataFormValuesType, ProfileDataFormOwnProps> & ProfileDataFormOwnProps

const ProfileDataForm = ({handleSubmit, profile, error}: ProfileDataFormPropsType) => {
  return <form onSubmit={ handleSubmit } className={s.formBlock}>
    <div className={s.descriptionBlock}>
      <div className={s.fullName}>
        {createField<ProfileDataFormValuesTypeKeys>(Input, [], 'fullName', 'Full name') }
      </div>
      <div className={s.aboutMe}>
        {createField<ProfileDataFormValuesTypeKeys>(Input, [], 'aboutMe', 'About me') }
      </div>
      <div className={s.lookingForAJobBlock}>
        {createField<ProfileDataFormValuesTypeKeys>(Input, [], 'lookingForAJob', undefined, {type: 'checkbox'})}
        Looking for a job
      </div>
      <div className={s.lookingForAJobDescription}>
        {createField<ProfileDataFormValuesTypeKeys>(Input, [], 'lookingForAJobDescription', 'My skills') }
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

const ProfileDataFormReduxForm = reduxForm<ProfileDataFormValuesType, ProfileDataFormOwnProps>({
  form: 'edit-profile',
  enableReinitialize: true,
  destroyOnUnmount: false})(ProfileDataForm)

export default ProfileDataFormReduxForm