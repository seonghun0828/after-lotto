import InitialContent from './innitialContent';
import DrawingContent from './DrawingContent';

interface LandingContentProps {
  isDrawing: boolean;
  className?: string;
}

export default function LandingContent({ isDrawing, className }: LandingContentProps) {
  return (
    <div className={`border-y-[#FF7C78] border-y-2 pt-[24px] pb-[28px] ${className}`}>
      {!isDrawing ? <InitialContent /> : <DrawingContent />}
    </div>
  );
}
