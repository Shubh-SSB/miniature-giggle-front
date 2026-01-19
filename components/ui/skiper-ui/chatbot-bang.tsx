"use client";

import React from "react";

interface ChatBotBangProps {
  open: boolean;
  onClose: () => void;
}

const ChatBotBang: React.FC<ChatBotBangProps> = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed bottom-28 right-12 z-40 w-72 rounded-2xl border border-amber-200/50 bg-black/80 p-4 text-left shadow-xl backdrop-blur-md">
      <div className="mb-3 flex items-center justify-between gap-2">
        <div className="text-lg font-semibold text-amber-100">Chatbot</div>
        <button
          type="button"
          className="rounded-full px-2 py-1 text-xs font-semibold text-amber-200 hover:bg-amber-200/10"
          onClick={onClose}
        >
          Close
        </button>
      </div>
      <div className="mb-3 space-y-2 text-sm text-amber-50/90">
        <p className="rounded-lg bg-amber-50/5 p-2">
          Hi! Need help with digital eye care?
        </p>
        <p className="rounded-lg bg-amber-50/5 p-2">
          Ask about screen time, night mode, or exercises.
        </p>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Type your question"
          className="w-full rounded-lg border border-amber-200/30 bg-black/60 px-3 py-2 text-sm text-amber-50 placeholder:text-amber-50/50 focus:border-amber-200 focus:outline-none"
        />
        <button
          type="button"
          className="rounded-lg bg-amber-300 px-3 py-2 text-xs font-semibold text-black hover:bg-amber-200"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBotBang;
