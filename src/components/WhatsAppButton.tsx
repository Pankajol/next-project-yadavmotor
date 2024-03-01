// components/WhatsAppButton.tsx
'use client'


const WhatsAppButton: React.FC = () => {
  const handleWhatsAppClick = () => {
    // Replace the phone number and message with your own
    const phoneNumber = '9821310750';
    const message = 'Hello! I have a question.';

    // Construct the WhatsApp API link
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open the WhatsApp chat link in a new tab
    window.open(whatsappLink, '_blank');
  };

  return (
    <button onClick={handleWhatsAppClick}>Chat on WhatsApp</button>
  );
};

export default WhatsAppButton;
