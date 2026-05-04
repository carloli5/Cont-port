import { useNotification } from '@/context/NotificationContext';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Info } from 'lucide-react';

export function NotificationContainer() {
  const { notifications, removeNotification } = useNotification();

  return (
    <div className="fixed top-25 right-6 z-[9999] space-y-2 pointer-events-none">
      <AnimatePresence>
        {notifications.map((notification) => {
          const icon = notification.type === 'success' 
            ? <CheckCircle2 className="h-4 w-4 fill-[#698b81] stroke-[#f2ebe5]" />
            : notification.type === 'error'
            ? <AlertCircle className="h-4 w-4 fill-[#bd6d5d] stroke-[#f2ebe5]" />
            : <Info className="h-4 w-4 fill-[#565d6d] stroke-[#f2ebe5]" />;

          return (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.2 }}
              onClick={() => removeNotification(notification.id)}
              className="pointer-events-auto cursor-pointer"
            >
              <Alert
                variant={
                  notification.type === 'success'
                    ? 'success'
                    : notification.type === 'error'
                    ? 'destructive'
                    : 'default'
                }
                className="border-none"
              >
                {icon}
                <AlertDescription className="font-medium">
                  {notification.message}
                </AlertDescription>
              </Alert>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
