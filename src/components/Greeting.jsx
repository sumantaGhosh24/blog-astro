import {useState} from "react";

export default function Greeting({messages}) {
  const randomMessage = () => {
    return messages[Math.floor(Math.random() * messages.length)];
  };

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div class="flex items-center gap-5 mb-5">
      <h3 class="text-2xl font-bold">🧑‍🚀 {greeting}, Astronaut!</h3>
      <button onClick={() => setGreeting(randomMessage())} class="btn">
        New Greeting
      </button>
    </div>
  );
}
