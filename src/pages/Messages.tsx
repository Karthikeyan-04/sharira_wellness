import React, { useState } from 'react';
import { Search, MoreVertical, Send, User, Circle } from 'lucide-react';

const ContactItem = ({ name, lastMsg, time, unread, isActive, onClick, isOnline }: any) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all ${
      isActive ? 'bg-sage/10' : 'hover:bg-gray-50'
    }`}
  >
    <div className="relative">
      <div className="w-12 h-12 rounded-2xl bg-cream flex items-center justify-center text-forest-dark shrink-0 overflow-hidden">
        <User className="w-6 h-6" />
      </div>
      {isOnline && <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-sage rounded-full border-2 border-white" />}
    </div>
    <div className="flex-1 text-left min-w-0">
      <div className="flex justify-between items-center mb-0.5">
        <h4 className="font-bold text-forest-dark truncate">{name}</h4>
        <span className="text-[10px] text-gray-400 font-medium">{time}</span>
      </div>
      <p className={`text-xs truncate ${unread ? 'text-forest font-bold' : 'text-gray-400 font-light'}`}>
        {lastMsg}
      </p>
    </div>
    {unread > 0 && (
      <div className="w-5 h-5 bg-sage text-white text-[10px] font-bold rounded-full flex items-center justify-center">
        {unread}
      </div>
    )}
  </button>
);

const Messages: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const contacts = [
    { id: 0, name: 'Dr. Elena Vance', lastMsg: 'Our session tomorrow will focus on...', time: '10:30 AM', unread: 2, isOnline: true },
    { id: 1, name: 'Julian Marcus', lastMsg: 'I\'ve attached the meditation guide...', time: 'Yesterday', unread: 0, isOnline: false },
    { id: 2, name: 'Sarah Chen', lastMsg: 'The nutritional plan is updated in...', time: 'Mon', unread: 0, isOnline: true },
    { id: 3, name: 'Zen Retreat Support', lastMsg: 'Your booking for the weekend...', time: 'Jan 15', unread: 0, isOnline: false },
  ];

  return (
    <div className="h-[calc(100vh-140px)] lg:h-[calc(100vh-40px)] flex border border-gray-100 rounded-[40px] bg-white overflow-hidden shadow-sm">
      {/* Sidebar */}
      <div className="w-full sm:w-80 border-r border-gray-100 flex flex-col shrink-0">
        <div className="p-6 border-b border-gray-50">
           <h2 className="font-display text-3xl text-forest-dark mb-4">Messages</h2>
           <div className="relative">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
             <input 
               type="text" 
               placeholder="Search chats..." 
               className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-xl text-xs font-light focus:outline-none focus:ring-1 focus:ring-sage/20"
             />
           </div>
        </div>
        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {contacts.map((c) => (
            <ContactItem 
              key={c.id} 
              {...c} 
              isActive={activeTab === c.id}
              onClick={() => setActiveTab(c.id)}
            />
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="hidden sm:flex flex-1 flex-col bg-cream/20">
        {/* Chat Header */}
        <div className="p-6 bg-white border-b border-gray-50 flex items-center justify-between">
           <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-sage/10 flex items-center justify-center text-sage">
                <User className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-forest-dark">{contacts[activeTab].name}</h3>
                <p className="text-[10px] text-sage font-bold uppercase tracking-widest flex items-center gap-1">
                   <Circle className="w-2 h-2 fill-sage" />
                   Online now
                </p>
              </div>
           </div>
           <button className="w-10 h-10 rounded-full hover:bg-gray-50 flex items-center justify-center text-gray-400">
             <MoreVertical className="w-5 h-5" />
           </button>
        </div>

        {/* Message Feed */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="flex justify-start">
            <div className="max-w-[70%] bg-white p-4 rounded-2xl rounded-bl-none shadow-sm text-sm text-forest-dark leading-relaxed">
              Hello! I've been reviewing your wellness journal from this week. You mentioned feeling some tension in your shoulders during your morning meditation. Would you like to adjust our focus for tomorrow's session?
            </div>
          </div>
          <div className="flex justify-end">
            <div className="max-w-[70%] bg-forest-dark text-white p-4 rounded-2xl rounded-br-none text-sm leading-relaxed">
              Yes, please. I think some restorative yoga poses or specifically targeted breathwork for that area would be very helpful. I've been working longer hours lately.
            </div>
          </div>
          <div className="flex justify-start">
            <div className="max-w-[70%] bg-white p-4 rounded-2xl rounded-bl-none shadow-sm text-sm text-forest-dark leading-relaxed">
              That makes perfect sense. Our session tomorrow will focus on breathwork and thoracic mobility to release that workspace tension. I'm also sending over a quick 2-minute stretch you can do at your desk today.
            </div>
          </div>
          <p className="text-center text-[10px] text-gray-400 font-bold uppercase tracking-widest">Today</p>
        </div>

        {/* Input */}
        <div className="p-6 bg-white border-t border-gray-50">
           <div className="flex items-center gap-4 bg-gray-50 p-2 pl-4 rounded-2xl">
              <input 
                type="text" 
                placeholder="Type your message..." 
                className="flex-1 bg-transparent border-none focus:outline-none focus:ring-0 text-sm font-light text-forest-dark py-2"
              />
              <button className="w-10 h-10 bg-forest-dark text-white rounded-xl flex items-center justify-center hover:bg-forest transition-all">
                <Send className="w-5 h-5" />
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
