export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  price: number;
  originalPrice?: number;
  rating: number;
  studentsCount: number;
  image: string;
  category: string;
  lessons: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchMode: () => void;
}