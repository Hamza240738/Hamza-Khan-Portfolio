import { useEffect } from 'react';

const ChatbotEnhancer = () => {
  useEffect(() => {
    const initializeChatbot = () => {
      // Wait for the OmniDimension widget to load
      const checkWidget = setInterval(() => {
        const widgetButton = document.getElementById('omnidimension-widget-button');
        if (widgetButton) {
          clearInterval(checkWidget);
          enhanceChatbot();
        }
      }, 100);

      // Clear interval after 10 seconds to avoid infinite checking
      setTimeout(() => clearInterval(checkWidget), 10000);
    };

    const enhanceChatbot = () => {
      // Add welcome message and quick replies when chat opens
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'childList') {
            const chatWindow = document.getElementById('omnidimension-chat-window');
            const chatMessages = document.getElementById('omnidimension-chat-messages');
            
            if (chatWindow && chatMessages && !chatMessages.querySelector('.omnidimension-welcome-message')) {
              addWelcomeMessage(chatMessages);
              addQuickReplies(chatMessages);
            }
          }
        });
      });

      // Start observing
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    };

    const addWelcomeMessage = (chatMessages: Element) => {
      const welcomeMessage = document.createElement('div');
      welcomeMessage.className = 'omnidimension-welcome-message';
      welcomeMessage.innerHTML = `
        Hi, I'm Hamza 👋 — a UI/UX designer. Feel free to explore my portfolio, 
        check out my projects, or get in touch with me. What would you like to see first?
      `;
      chatMessages.insertBefore(welcomeMessage, chatMessages.firstChild);
    };

    const addQuickReplies = (chatMessages: Element) => {
      const quickReplies = document.createElement('div');
      quickReplies.className = 'omnidimension-quick-replies';
      
      const buttons = [
        { text: '✨ View Projects', action: 'projects' },
        { text: '👤 About Me', action: 'about' },
        { text: '📩 Contact', action: 'contact' },
        { text: '⭐ Highlights', action: 'highlights' }
      ];

      buttons.forEach(button => {
        const btn = document.createElement('button');
        btn.className = 'omnidimension-quick-reply-btn';
        btn.textContent = button.text;
        btn.onclick = () => handleQuickReply(button.action);
        quickReplies.appendChild(btn);
      });

      chatMessages.appendChild(quickReplies);
    };

    const handleQuickReply = (action: string) => {
      const responses = {
        projects: `Here are my featured projects:
        
🎨 **AI Financial Dashboard** - https://ai-financial-dashboard.lovable.app
💰 **Omnifood** - https://omnifood.lovable.app  
🚀 **Nebula Stride** - https://nebula-stride-ui.lovable.app
🎯 **Figma Project UI** - https://figma-project-ui.lovable.app
📊 **Silicon Graphics** - https://silicon-graphics.lovable.app

Each project showcases different aspects of my UI/UX design skills!`,

        about: `I'm Muhammad Hamza Khan, a passionate UI/UX designer from Pakistan 🇵🇰

🎓 **Background**: Certified by Saylani Welfare
🎨 **Specialties**: Web Apps, Mobile Interfaces, Brand Identity
🛠️ **Tools**: Figma, Adobe Creative Suite, Framer, Webflow
✨ **Focus**: Creating visually striking digital experiences that balance creativity with usability

I love crafting interfaces that not only look amazing but also provide exceptional user experiences!`,

        contact: `Let's connect! Here are the best ways to reach me:

📧 **Email**: [hamzakhan@example.com](mailto:hamzakhan@example.com)
💼 **LinkedIn**: [linkedin.com/in/hamzakhan](https://linkedin.com/in/hamzakhan)
🎨 **Behance**: [behance.net/hamzakhan](https://behance.net/hamzakhan)

I'm always excited to discuss new projects, collaborations, or just chat about design! Feel free to reach out anytime.`,

        highlights: `Here are my absolute favorite projects that showcase my best work:

🏆 **AI Financial Dashboard** - Modern fintech interface with advanced data visualization
⭐ **Omnifood** - Complete food delivery app with beautiful UX flow
🎯 **Nebula Stride** - Innovative business dashboard with stunning visuals

These projects represent the perfect blend of aesthetics and functionality that I strive for in every design!`
      };

      // Add user message
      addMessage(responses[action as keyof typeof responses], 'bot');
      
      // Hide quick replies after selection
      const quickReplies = document.querySelector('.omnidimension-quick-replies');
      if (quickReplies) {
        quickReplies.remove();
      }
    };

    const addMessage = (text: string, sender: 'user' | 'bot') => {
      const chatMessages = document.getElementById('omnidimension-chat-messages');
      if (chatMessages) {
        const message = document.createElement('div');
        message.className = `omnidimension-message-${sender}`;
        message.innerHTML = text.replace(/\n/g, '<br>');
        chatMessages.appendChild(message);
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }
    };

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initializeChatbot);
    } else {
      initializeChatbot();
    }
  }, []);

  return null; // This component doesn't render anything
};

export default ChatbotEnhancer;