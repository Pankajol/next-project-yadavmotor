// components/WhatsAppButton.tsx
'use client'


const WhatsAppButton: React.FC = () => {
  const handleWhatsAppClick = () => {
    // Replace the phone number and message with your own
    const phoneNumber = '+918779406764';
    const message = 'plz asked any think about repairing';

    // Construct the WhatsApp API link
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open the WhatsApp chat link in a new tab
    window.open(whatsappLink, '_blank');
  };

  return (
    <button onClick={handleWhatsAppClick}><img className="w-96 h-32" src="https://support.unicart.com/wp-content/uploads/2018/05/whatsapp-1-1.jpg" alt="chat on whatsapp" /></button>
  );
};

export default WhatsAppButton;
