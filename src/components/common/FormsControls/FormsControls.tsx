import React from 'react'
import { Field, WrappedFieldMetaProps, WrappedFieldProps } from 'redux-form'
import s from './FormsControls.module.css'
import { FieldValidatorType } from '../../../utils/validators/validators'

type FormControlPropsType = {
  meta: WrappedFieldMetaProps
  children: React.ReactNode
}

const FormControl = ({meta, ...props}: FormControlPropsType) => {  
  const hasError = meta.touched && meta.error
  return(
    <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
      <div>
        {props.children}
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>    
  )
}

export const Textarea = (props: WrappedFieldProps) => {  
  const {input, meta, ...restProps} = props
  return(
      <FormControl {...props}>
        <textarea {...input} {...restProps} />
      </FormControl>
  )
}

export const Input = (props: WrappedFieldProps) => {  
  const {input, meta, ...restProps} = props
  return(
      <FormControl {...props}>
        <input {...input} {...restProps} />
      </FormControl>
  )
}

export function createField<FormKeysType extends string> (component: (props: WrappedFieldProps) => React.JSX.Element,
                                                          validators: Array<FieldValidatorType>,
                                                          name: FormKeysType,
                                                          placeholder: string | undefined,
                                                          props = {}, text = '') {                              
  return (
    <div>
      <Field component={component} validate={validators}
             name={name} placeholder={placeholder} {...props}
      /> {text}
    </div>
  )
}