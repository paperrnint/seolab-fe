import { FaCheck } from 'react-icons/fa6';

import { ValidationText } from '@/types';

export const JoinValidationText = ({ label, isValid }: ValidationText) => {
  const colorClasses = {
    valid: 'text-secondary',
    invalid: 'text-primary opacity-20',
  };

  return (
    <div className={`flex items-center gap-1 text-xs font-bold ${isValid ? colorClasses.valid : colorClasses.invalid}`}>
      <FaCheck />
      <div>{label}</div>
    </div>
  );
};
