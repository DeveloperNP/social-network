import { Field } from 'redux-form';
import s from './FormsControls.module.css'

const FormControl = ({input, meta, ...props}) => {  
  const hasError = meta.touched && meta.error;
  return(
    <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
      <div>
        {props.children}
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>    
  )
}

export const Textarea = (props) => {  
  const {input, meta, ...restProps} = props;
  return(
      <FormControl {...props}>
        <textarea {...input} {...restProps} />
      </FormControl>
  )
}

export const Input = (props) => {  
  const {input, meta, ...restProps} = props;
  return(
      <FormControl {...props}>
        <input {...input} {...restProps} />
      </FormControl>
  )
}

export const createField = (component, validators, name, placeholder, props = {}, text = '') => {
  return (
    <div>
      <Field component={component} validate={validators}
            name={name} placeholder={placeholder} {...props}
      /> {text}
    </div>
  )
}