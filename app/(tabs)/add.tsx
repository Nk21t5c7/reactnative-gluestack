import Form from "@/components/form";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";

export default function TabTwoScreen() {
  return (
    <VStack className="flex-1 p-4">
      <Box className="h-[60px] flex justify-center ">
        <Text className="text-3xl text-center">Add a Memo</Text>
      </Box>
      <Form />
    </VStack>
  );
}

