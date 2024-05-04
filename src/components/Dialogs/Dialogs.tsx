import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem.tsx'
import MessageItem from './MessageItem/MessageItem.tsx'
import { InjectedFormProps, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../utils/validators/validators.ts'
import { Textarea, createField } from '../common/FormsControls/FormsControls.tsx'
import { InitialStateType } from '../../redux/dialogs-reducer.ts'

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = ({handleSubmit}: InjectedFormProps<AddMessageFormValuesType>) => {
  return (    
      <form onSubmit={handleSubmit} className={s.newMessage}>
        {createField<AddMessageFormValuesTypeKeys>(Textarea, [required, maxLength50], 'newMessageText', 'Enter your message')}
        <button>Send message</button>
      </form>
  )
}

const AddMessageReduxForm = reduxForm<AddMessageFormValuesType>({form: 'dialogAddMessageForm'})(AddMessageForm)



type DialogsPropsType = {
  pageData: InitialStateType
  addMessageClearForm: (newMessageText: string) => void
}

type AddMessageFormValuesType = {
  newMessageText: string
}

type AddMessageFormValuesTypeKeys = keyof AddMessageFormValuesType

const Dialogs = ({pageData, addMessageClearForm}: DialogsPropsType): React.JSX.Element => {
  let dialogsElements = pageData.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name} avatar={d.avatar} />)
  let messagesElements = pageData.messages.map(m => <MessageItem key={m.id} message={m.message} />)

  let addNewMessage = (formData: AddMessageFormValuesType) => {
    addMessageClearForm(formData.newMessageText)
  }
  
  return (
    <div className={s.dialogsWrapper}>
      <div className={s.dialogs}>
        {dialogsElements}
      </div>
      <div className={s.messagesBlock}>
        <div className={s.messages}>
          {messagesElements}
        </div>
        <AddMessageReduxForm onSubmit={addNewMessage} />
      </div>
    </div>
  )
}

export default Dialogs