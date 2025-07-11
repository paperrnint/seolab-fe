'use client';

import { useState } from 'react';
import { FaCheck } from 'react-icons/fa6';

interface Props {
  initialValue?: boolean;
  label: string;
  checkedLabel: string;
}

export const Checkbox = ({ initialValue, label, checkedLabel }: Props) => {
  const [isChecked, setIsChecked] = useState(initialValue || false);

  return (
    <button
      onClick={() => setIsChecked(!isChecked)}
      className={`flex items-center gap-1 px-2 py-1 rounded-full cursor-pointer transition-all duration-300 ${
        isChecked
          ? 'bg-[#f1f4f7] border-1 border-btn-accent text-btn-accent'
          : 'bg-white border-1 border-subtle text-secondary hover:opacity-60'
      }`}
    >
      <div
        className={`w-3 h-3 rounded-full border-1 flex items-center justify-center transition-all duration-200 ${
          isChecked ? 'border-btn-accent bg-btn-accent' : 'border-subtle'
        }`}
      >
        {isChecked && <FaCheck size={10} className="text-white" />}
      </div>
      <span className="text-[10px] font-bold">{isChecked ? checkedLabel : label}</span>
    </button>
  );
};
