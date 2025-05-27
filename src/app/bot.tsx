import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi, Buddy! Ask for services, price and call?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { from: "user", text: input };
    const reply = { from: "bot", text: getBotReply(input) };
    setMessages([...messages, userMessage, reply]);
    setInput("");
  };

  const getBotReply = (msg: string) => {
    const lower = msg.toLowerCase();
    if (lower.includes("services")) return "We offer branding, pitch decks, and landing page design.";
    if (lower.includes("price") || lower.includes("cost")) return "Pricing starts from $500 depending on scope.";
    if (lower.includes("call")) return "Sure! Book a free strategy call via the CTA above.";
    return "I'm not sure yet, but I’ll learn that soon!";
  };

 return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            onClick={() => setOpen(true)}
            className="bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90"
          >
            <MessageCircle className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            key="chatbox"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="w-72 sm:w-80 bg-background border border-border rounded-xl shadow-xl overflow-hidden"
          >
            <div className="flex justify-between items-center px-4 py-3 border-b border-border bg-muted">
              <span className="font-semibold text-sm">Chat with WreefBot</span>
              <button onClick={() => setOpen(false)}>
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>

            <div className="h-64 overflow-y-auto px-4 py-3 text-sm space-y-2">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`px-3 py-2 rounded-lg max-w-[80%] ${
                      msg.from === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center border-t border-border px-3 py-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                className="flex-1 text-sm px-2 py-1 bg-transparent focus:outline-none"
              />
              <button
                onClick={handleSend}
                className="text-sm font-medium text-primary hover:underline"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
