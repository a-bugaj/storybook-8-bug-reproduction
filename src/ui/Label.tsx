import { FC, memo, ReactNode} from 'react';

interface LabelProps {
  label: ReactNode;
}

const Label:FC<LabelProps> = ({ label }) => {
  return (
    <div>
      {label}
    </div>
  );
};

export default memo(Label);