import { useState } from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { resumeUrl } from '@/data/resume';
import { useToast } from '@/hooks/use-toast';

export const ResumeDownload = ({ variant = 'outline', className = '' }: { variant?: 'outline' | 'link'; className?: string }) => {
  const [busy, setBusy] = useState(false);
  const { toast } = useToast();
  const download = async () => {
    setBusy(true);
    try {
      const response = await fetch(resumeUrl);
      if (!response.ok) throw new Error('Resume unavailable');
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Sophie-Roach-Resume.pdf';
      document.body.appendChild(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 10000);
    } catch {
      toast({ title: 'Resume download unavailable', description: 'Please try again.', variant: 'destructive' });
    } finally {
      setBusy(false);
    }
  };
  return <Button variant={variant} className={className} disabled={busy} onClick={download}><Download />{busy ? 'Downloading…' : 'Download Resume'}</Button>;
};