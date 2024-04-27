import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem.tsx'
import MessageItem from './MessageItem/MessageItem.tsx'
import { reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../utils/validators/validators.js'
import { Textarea, createField } from '../common/FormsControls/FormsControls.js'
import { InitialStateType } from '../../redux/dialogs-reducer.ts'

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = ({handleSubmit}) => {
  return (    
      <form onSubmit={handleSubmit} className={s.newMessage}>
        {createField(Textarea, [required, maxLength50], 'newMessageText', 'Enter your message')}
        <button>Send message</button>
      </form>
  )
}

const AddMessageReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)



type DialogsPropsType = {
  pageData: InitialStateType
  addMessageClearForm: (newMessageText: string) => void
}

const Dialogs = ({pageData, addMessageClearForm}: DialogsPropsType): React.JSX.Element => {
  let dialogsElements = pageData.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name} avatar={d.avatar} />)
  let messagesElements = pageData.messages.map(m => <MessageItem key={m.id} message={m.message} />)

  let addNewMessage = (formData) => {
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