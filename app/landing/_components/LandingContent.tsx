import { ReactNode } from 'react';

interface LandingContentProps {
  children: ReactNode;
  className?: string;
}

export default function LandingContent({ children, className }: LandingContentProps) {
  return (
    <div className={`border-y-[#FF7C78] border-y-2 pt-[24px] pb-[28px] ${className}`}>
      {children}
    </div>
  );
}
