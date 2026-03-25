import React from 'react';
import type { MoveFeedbackType } from '../../hooks/useStockfish';
import { AlertTriangle, XCircle, AlertCircle, CheckCircle, Star, ThumbsUp } from 'lucide-react';

interface MoveFeedbackProps {
  type: MoveFeedbackType;
  visible: boolean;
}

const feedbackStyles: Record<string, { bg: string, text: string, icon: React.ReactNode, label: string }> = {
  brilliant: { bg: 'bg-cyan-500', text: 'text-white', icon: <Star size={18} fill="currentColor" />, label: '¡Brillante!' },
  excellent: { bg: 'bg-emerald-500', text: 'text-white', icon: <CheckCircle size={18} />, label: 'Excelente' },
  good: { bg: 'bg-blue-500', text: 'text-white', icon: <ThumbsUp size={18} />, label: 'Buena jugada' },
  inaccuracy: { bg: 'bg-yellow-500', text: 'text-white', icon: <AlertCircle size={18} />, label: 'Imprecisión' },
  mistake: { bg: 'bg-orange-500', text: 'text-white', icon: <AlertTriangle size={18} />, label: 'Error' },
  blunder: { bg: 'bg-red-600', text: 'text-white', icon: <XCircle size={18} />, label: 'Grave Error' },
};

export default function MoveFeedback({ type, visible }: MoveFeedbackProps) {
  if (!visible || !type || !feedbackStyles[type]) return null;

  const style = feedbackStyles[type];

  return (
    <div className={`absolute top-4 right-4 z-50 flex items-center gap-2 px-4 py-2 rounded-full shadow-xl font-bold uppercase tracking-wider text-sm ${style.bg} ${style.text} animate-in slide-in-from-top-4 fade-in duration-300`}>
      {style.icon}
      <span>{style.label}</span>
    </div>
  );
}
