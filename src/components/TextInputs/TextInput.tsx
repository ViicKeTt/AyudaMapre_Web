/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldErrors, } from 'react-hook-form'

export const RequiredSpan = () => <span className="text-danger">*</span>

export const LabelRequired = (text: string) => {
  return (
    <label className="form-label colorRed" htmlFor="">
      {text} <span>*</span>
    </label>
  )
}
//-------> Los buenos

export const InputLabelComponent = (text: string) => (
  <label className="form-label">{text}</label>
)

type inputTypes = {
  register: any
  name: string
  errors: FieldErrors,
  label: string
  type: string
  inputProps?: any // optional
  disabled: boolean
  trigger: () => void
  required: boolean
  className?: string
}
const formValidacion = (errors: FieldErrors, errorsKey: string) => {
  return errors[errorsKey] ? errors[errorsKey]?.message : ''
}
export const InputComponent = ({ register, name, errors, label = '', type = 'text', inputProps, disabled, trigger, required = false, className = '' }: inputTypes) => {

  return (
    <>
      <input
        required={required}
        disabled={disabled}
        type={type}
        error={errors && !!errors[name]}
        id={name}
        label={label}
        variant='standard'
        {...register(name)}
        {...(inputProps && { inputProps: inputProps })}
        onChange={() => trigger && trigger()}
        fullWidth
        className={className}
      />
      {errors && formValidacion(errors, name)}
    </>
  )

}

{/* <InputComponent
  register={register}
  label='Evaluación Neurológica'
  errors={errors}
  name='neurologicalEvaluation'
  trigger={() => console.log('hola')}
  disabled={false}
  inputProps={''}
  type=''
  required={false}
/> */}