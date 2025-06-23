import { ChatApp } from '@/features/chat/ChatApp';
import { Helmet } from '@edenx/runtime/head';
import './chat.css';
import '../styles/globals.css';

export const AutopeLogo =
  'https://lf3-static.bytednsdoc.com/obj/eden-cn/lm_sth/ljhwZthlaukjlkulzlp/autope/logo/prompt-pilot.png';

const Index = (): JSX.Element => (
  <div className="w-full h-screen">
    <Helmet>
      <link rel="icon" href={AutopeLogo} />
      <title>MultiModalAgents</title>
      <meta name="description" content="This is a multi-modal agent app" />
    </Helmet>
    <ChatApp />
  </div>
);

export default Index;
