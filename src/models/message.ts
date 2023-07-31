export interface Message {
    senderEmail: string;
    receiverEmail: string;
    timestamp: number;
    content: string;
    conversationId: number;
  }
  