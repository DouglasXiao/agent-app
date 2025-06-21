import React, { useState } from 'react';
import { WelcomeChat } from './WelcomeChat';
import { ChatLayout } from './ChatLayout';
import { ChatMessage } from './ChatApp';

export const ChatInterface: React.FC = () => {
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const handleChatStart = (newSessionId: string, initialMessages: ChatMessage[]) => {
    setSessionId(newSessionId);
    setMessages(initialMessages);
  };

  if (!sessionId) {
    return <WelcomeChat onChatStart={handleChatStart} />;
  }

  return (
    <ChatLayout
      sessionId={sessionId}
      initialMessages={messages}
      onNewSession={() => {
        setSessionId(null);
        setMessages([]);
      }}
    />
  );
};
