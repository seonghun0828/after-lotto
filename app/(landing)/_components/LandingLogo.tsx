import Image from 'next/image';
import Logo from '@/public/svgs/logo.svg';

interface LandingLogoProps {
  className?: string;
}

export default function LandingLogo({ className }: LandingLogoProps) {
  return (
    <div className={`relative w-full h-[84px] ${className}`}>
      <Image src={Logo} fill alt='after lotto logo' />
    </div>
  );
}
