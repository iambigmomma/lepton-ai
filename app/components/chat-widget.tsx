"use client"

import Script from "next/script"

export function ChatWidget() {
  return (
    <Script
      src="https://agent-418e5da51749d8e2f2d6-3zw9c.ondigitalocean.app/static/chatbot/widget.js"
      strategy="afterInteractive"
      data-agent-id="a11a6834-f41c-11ef-bf8f-4e013e2ddde4"
      data-chatbot-id="JHWao2iGpZPM9ihNXCvw7IDKU3DKDxfs"
      data-name="lepton-docs-chatbot Chatbot"
      data-primary-color="#031B4E"
      data-secondary-color="#E5E8ED"
      data-button-background-color="#0061EB"
      data-starting-message="Hello! I am the Lepton AI Docs Chatbot. How can I help you today?"
      data-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIzx-w_ioIIMjDRguyMVyfQs3aqotpB9-yBw&s"
    />
  )
}
