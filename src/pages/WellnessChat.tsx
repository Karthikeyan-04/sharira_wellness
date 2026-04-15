import React, { useState } from 'react';
import { Send, Leaf, Sparkles, ChevronRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const WellnessChat: React.FC = () => {
  const [input, setInput] = useState('');

  const messages = [
    {
      id: 1,
      type: 'ai',
      text: 'Namaste Priya 🙏 I\'m your Sarira wellness assistant. Based on your Vata dosha profile, I notice you\'ve been reporting slightly higher stress levels recently. How can I support your balance today?',
    },
    {
      id: 2,
      type: 'user',
      text: 'What treatments are good for stress relief for Vata?',
    },
    {
      id: 3,
      type: 'ai',
      text: 'For Vata types, grounding and warm oil treatments are most effective for stress. I highly recommend a traditional Shirodhara session:',
      suggestion: {
        title: 'Shirodhara Oil Therapy',
        meta: '90 Minutes • Ayurvedic Specialty',
        price: '₹4,500'
      }
    }
  ];

  return (
    <div className="flex flex-col h-[100dvh] lg:h-[calc(100vh-40px)] w-full max-w-4xl mx-auto bg-cream lg:py-6 relative z-10">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-white border-b border-gray-100 shrink-0 shadow-sm z-20">
        <div className="flex items-center gap-3">
          <Link to="/" className="p-2 -ml-2 text-forest-dark hover:bg-gray-100 rounded-full transition-colors">
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </Link>
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center text-white shadow-sm shrink-0 leading-none">
              <Leaf className="w-5 h-5" />
            </div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
          <div className="min-w-0 flex-1 flex flex-col justify-center">
            <h2 className="font-display text-lg sm:text-lg text-forest-dark flex items-center gap-1.5 truncate leading-none mb-1">
              Sarira AI Assistant
              <Sparkles className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
            </h2>
            <p className="text-[10px] sm:text-[11px] text-gray-500 font-medium truncate leading-none">Online</p>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto space-y-6 p-4 scrollbar-hide">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] space-y-3`}>
              <div className={`p-5 rounded-[24px] text-sm leading-relaxed ${msg.type === 'user'
                ? 'bg-forest-dark text-white rounded-br-none'
                : 'bg-white text-forest-dark border border-gray-100 rounded-bl-none shadow-sm'
                }`}>
                {msg.text}
              </div>

              {msg.suggestion && (
                <div className="bg-white p-4 rounded-2xl border border-sage/20 border-dashed space-y-4 animate-in fade-in zoom-in duration-500">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-display text-lg text-forest-dark">{msg.suggestion.title}</h4>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{msg.suggestion.meta}</p>
                    </div>
                    <span className="text-forest font-bold">{msg.suggestion.price}</span>
                  </div>
                  <Link to="/treatment-detail" className="w-full flex items-center justify-center gap-2 bg-sage text-white py-2 rounded-xl text-xs font-bold hover:bg-forest transition-colors">
                    View & Book
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-3  border-t border-gray-100 shrink-0 relative">
        <div className="flex items-center gap-3">
          <div className="flex-1 bg-white rounded-full flex items-center px-4 py-1 border border-transparent focus-within:border-sage/30 focus-within:bg-white transition-colors">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Message..."
              className="flex-1 bg-transparent border-none focus:outline-none focus:ring-0 text-sm font-medium text-forest-dark py-2.5"
            />
          </div>
          <button className="w-11 h-11 bg-forest-dark text-white rounded-full flex items-center justify-center hover:bg-forest transition-all shadow-sm shrink-0 transform active:scale-95">
            <Send className="w-4 h-4 translate-x-px" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WellnessChat;
