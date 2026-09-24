import { Text } from "@chakra-ui/react";

export default function ErrorFallback({ error }) {
  return <Text color="red.400">Failed to load: {error.message}</Text>;
}
