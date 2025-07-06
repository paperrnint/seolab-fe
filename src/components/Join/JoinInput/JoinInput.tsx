import { Input } from '@/components/Input/Input';
import { JoinValidationText } from '../JoinValidationText/JoinValidationText';

interface Validation {
  label: string;
  isValid: boolean;
}

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  button?: React.ReactNode;
  rightIcon?: React.ReactNode;
  required?: boolean;
  validations?: Validation[];
  isValid?: boolean; // 모든 validation 통과
}

export const JoinInput = ({
  label,
  button,
  rightIcon,
  required = false,
  validations,
  isValid = true,
  ...props
}: Props) => {
  const requiredClass = required ? 'after:content-["*"] after:text-emp after:ml-1' : '';
  const colorClasses = {
    valid: 'text-secondary',
    invalid: 'text-primary opacity-20',
  };

  return (
    <div>
      <label className={`block py-1 font-bold ${requiredClass}`}>{label}</label>
      <div className="flex gap-2">
        <Input rightIcon={rightIcon} {...props} />
        {button && button}
      </div>
      <div className="flex gap-2 py-2 px-1">
        {validations?.map((validation, i) => (
          <JoinValidationText key={i} label={validation.label} isValid={validation.isValid} />
        ))}
      </div>
    </div>
  );
};
