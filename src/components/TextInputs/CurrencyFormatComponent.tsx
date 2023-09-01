/* eslint-disable @typescript-eslint/no-explicit-any */
import CurrencyInput from 'react-currency-input-field'
import { CurrencyInputOnChangeValues } from 'react-currency-input-field/dist/components/CurrencyInputProps'

interface controllerProps {
  id?: string
  controller?: any
  control?: any
  name?: string
  required?: boolean
  requiredMessage?: string | undefined 
  className?: string | undefined
  value?: string | number | undefined
  defaultValues?: string 
  placeholder?: string | undefined
  disabled?: boolean
  readOnly?: boolean	
  style?: React.CSSProperties | undefined 
  onValueChange?: ((value: string | undefined, name?: string | undefined, values?: CurrencyInputOnChangeValues | undefined) => void) | undefined
}

export const CurrencyInputController = ({
  controller,
  control,
  name,
  required,
  className, 
}: controllerProps) => {
  const Controller = controller

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        // required: {
        // value: required,
        // message: requiredMessage,
        // },
        valueAsNumber: true,
      }}
      key={Math.random()}
      render={({
        field: { onChange, onBlur, value, name },
        fieldState,
      }: any) => (
        <CurrencyInput
          prefix={'$'}
          required={required}
          placeholder="$0.00"
          value={value}
          className={`form-control ${className} ${fieldState?.errors?.[name] ? 'is-invalid' : ''}`}
          onValueChange={(e: any) => onChange(e)} 
          onBlur={onBlur}
        />
      )}
    />
  )
}

export const CurrencyInputComponent = ({
  id, 
  style,
  readOnly,
  disabled,
  required,
  name = '',
  className,
  placeholder,
  value: values,
  defaultValues,
  onValueChange, 
}: controllerProps) => {
  return (
    <CurrencyInput
      id={id}
      name={name}
      placeholder={placeholder}
      defaultValue={defaultValues}
      decimalsLimit={2}
      allowNegativeValue={false}
      readOnly={readOnly}
      value={values}
      prefix="$"
      required={required}
      className={`form-control ${className}`}
      disabled={disabled}
      onValueChange={onValueChange}
      max={20000}
      decimalSeparator='.'
      groupSeparator=','
      min="0"
      style={style}
      decimalScale={2}
      // fixedDecimalLength={2} 
      maxLength={11}
      intlConfig={{ locale: 'en-US', currency: 'GBP' }}
    />
  )
}