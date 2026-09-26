import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const Typewriter = ({ text, speed = 60, startDelay = 0, ...props }) => {
  const [displayed, setDisplayed] = useState("");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setIsDone(false);
    let i = 0;
    let interval;

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setIsDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return (
    <Text as="span" {...props}>
      {displayed}
      {!isDone && (
        <Text
          as="span"
          display="inline-block"
          w="2px"
          h="1em"
          bg="currentColor"
          ml="2px"
          verticalAlign="middle"
          style={{ animation: "blink-cursor 0.9s step-end infinite" }}
        />
      )}
      <style>{`
        @keyframes blink-cursor {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </Text>
  );
};