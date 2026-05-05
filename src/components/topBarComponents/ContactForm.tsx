import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useDarkMode } from '@/hooks/useDarkMode';
import { useNotification } from '@/context/NotificationContext';
import emailjs from '@emailjs/browser';

interface ContactFormProps {
  onClose: () => void;
}

export function ContactForm({ onClose }: ContactFormProps) {
  const { isDarkMode } = useDarkMode();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const { addNotification } = useNotification();

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '');
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
        {
          to_email: import.meta.env.VITE_EMAILJS_TO_EMAIL || '',
          from_name: formData.fullName,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }
      );

      addNotification('Message sent successfully!', 'success', 4000);
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        message: '',
      });
      onClose();
    } catch (error) {
      addNotification(
        error instanceof Error ? error.message : 'Failed to send message. Please try again.',
        'error',
        4000
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        'space-y-4',
        isDarkMode ? 'text-slate-100' : 'text-slate-900'
      )}
    >
      <div>
        <Label
          htmlFor="fullName"
          className={cn(
            'mb-2',
            isDarkMode ? 'text-slate-200' : 'text-[#565d6d]'
          )}
        >
          Full Name
        </Label>
        <Input
          id="fullName"
          name="fullName"
          type="text"
          value={formData.fullName}
          onChange={handleChange}
          className={cn(
            isDarkMode ? 'bg-[#0f172a] text-slate-100 focus:border-[#0081b8] placeholder:text-slate-500' : 'bg-white text-slate-900 placeholder:text-slate-400'
          )}
          required
        />
      </div>

      <div>
        <Label
          htmlFor="email"
          className={cn(
            'mb-2',
            isDarkMode ? 'text-slate-200' : 'text-[#565d6d]'
          )}
        >
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={cn(
            isDarkMode ? 'bg-[#0f172a] text-slate-100 focus:border-[#0081b8] placeholder:text-slate-500' : 'bg-white text-slate-900 placeholder:text-slate-400'
          )}
        />
      </div>

      <div>
        <Label
          htmlFor="subject"
          className={cn(
            'mb-2',
            isDarkMode ? 'text-slate-200' : 'text-[#565d6d]'
          )}
        >
          Subject
        </Label>
        <Input
          id="subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          className={cn(
            isDarkMode ? 'bg-[#0f172a] text-slate-100 focus:border-[#0081b8] placeholder:text-slate-500' : 'bg-white text-slate-900 focus:border-[#7d9995] placeholder:text-slate-400'
          )}
          required
        />
      </div>

      <div>
        <Label
          htmlFor="message"
          className={cn(
            'mb-2',
            isDarkMode ? 'text-slate-200' : 'text-[#565d6d]'
          )}
        >
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Your message..."
          className={cn(
            isDarkMode ? 'bg-[#0f172a] text-slate-100 focus:border-[#0081b8] placeholder:text-gray-300' : 'bg-white text-slate-900 focus:border-[#7d9995] placeholder:text-slate-400'
          )}
        />
      </div>

      <div className="flex gap-3 justify-end pt-4">
        <Button
          type="button"
          variant="ghost"
          onClick={onClose}
          disabled={isLoading}
          className={cn(
            isDarkMode ? 'text-slate-200 hover:text-[#0081b8]' : 'text-slate-900 hover:text-[#7d9995]'
          )}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          variant="default"
          disabled={isLoading}
          className={cn(
            isDarkMode ? 'bg-[#0081b8] hover:bg-[#00648F]' : 'bg-[#7d9995] hover:bg-[#5c726f]'
          )}
        >
          {isLoading ? 'Sending...' : 'Send Message'}
        </Button>
      </div>
    </form>
  );
}
