import { forwardRef } from 'react';

import { Input } from '@/components/common/ui/Input/Input';

import { JoinValidationText } from '../JoinValidationText/JoinValidationText';

interface Validation {
  label: string;
  isValid: boolean;
}

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  rightComponent?: React.ReactNode;
  required?: boolean;
  validations?: Validation[];
  isValid?: boolean; // 모든 validation 통과
}

export const JoinInput = forwardRef<HTMLInputElement, Props>(
  ({ label, rightComponent, required = false, validations, isValid = true, ...props }, ref) => {
    const requiredClass = required ? 'after:content-["*"] after:text-emp after:ml-1' : '';

    return (
      <div>
        <label className={`block py-1 font-bold ${requiredClass}`}>{label}</label>
        <div className="flex gap-2">
          <Input ref={ref} rightIcon={rightComponent} {...props} />
        </div>
        <div className="flex gap-2 py-2 px-1">
          {validations?.map((validation, i) => (
            <JoinValidationText key={i} label={validation.label} isValid={validation.isValid} />
          ))}
        </div>
      </div>
    );
  }
);

JoinInput.displayName = 'JoinInput';
