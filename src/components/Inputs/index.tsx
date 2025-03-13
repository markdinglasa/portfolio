import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { InputProps, InputType, SFC } from "../../types";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";

import { cn } from "../../utils";
import { useToggle } from "../../hooks";
import { colors } from "../../styles";

export const CustomInput: SFC<InputProps> = ({
  ClassName,
  disabled,
  errors,
  label,
  name,
  touched,
  type = InputType.text,
  value,
  onChange,
  placeholder,
  onFocus,
  onBlur,
  onClick,
  isRequired,
}) => {
  const [isPassword, togglePassword] = useToggle(false);

  return (
    <div className="py-2">
      <FormControl
        sx={{ width: "100%", padding: 0 }}
        variant="outlined"
        className={`flex items-start justify-center py-2 border ${errors && errors[name] ? "mb-2" : ""}`}
      >
        <InputLabel
          shrink
          htmlFor={`outlined-adornment-${name}`}
          className=" border-red"
          sx={{ color: colors.palette.neutral['050'],}}
        >
          {label} {isRequired && <span className="text-red-500">*</span>}
        </InputLabel>

        <OutlinedInput
          className={cn("text-salte-100 ", ClassName)}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
          onClick={onClick}
          value={value}
          sx={{
            color: colors.palette.neutral['100'],
            borderRadius: 2,
            width: "100%",
            border:'1px solid #585959'
          }}
          size="small"
          id={`outlined-adornment-${name}`}
          type={isPassword ? InputType.text : type}
    
          endAdornment={
            type === InputType.password && (
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    isPassword ? "hide the password" : "display the password"
                  }
                  onClick={togglePassword}
                  edge="end"
                >
                  {isPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }
          label={label}
        />
        {errors && errors[name] && touched && touched[name] ? (
          <FormHelperText id={`component-error-text-${name}`}>
            <span className="text-red-400">{errors[name]}</span>
          </FormHelperText>
        ) : null}
      </FormControl>
    </div>
  );
};
