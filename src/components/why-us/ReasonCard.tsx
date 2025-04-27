
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ReasonCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const ReasonCard = ({ icon: Icon, title, description, index }: ReasonCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2 }}
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-lg shadow-md text-right"
  >
    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-emerald-500" />
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

export default ReasonCard;
