import { ChatApp } from '@/features/chat/ChatApp';
import './chat.css';
import '../styles/globals.css';

const Index = (): JSX.Element => (
  <div className="w-full h-screen">
    <ChatApp />
  </div>
);

export default Index;
