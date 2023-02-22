"use client";

import { FloatingWhatsApp } from "react-floating-whatsapp";

export function FloatingButton() {
  return (
    <FloatingWhatsApp
      phoneNumber="+555180108034"
      accountName="Casagrande Fotografia"
      chatMessage="Olá! Tudo bem? Como posso ajudar?"
      placeholder="Enviar mensagem"
      avatar="/images/logo-horizontal.png"
      buttonClassName="cursor-pointer"
      statusMessage="Online"
      allowEsc
      notification
      notificationSound
      className="cursor-pointer"
    />
  );
}
