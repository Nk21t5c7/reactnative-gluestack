import React from "react";
import { Box } from "./ui/box";
import { Button, ButtonText } from "./ui/button";
import { Text } from "./ui/text";
const Card: React.FC<{ title: string; content: string; handleDelete: () => void }> = ({
  title,
  content,
  handleDelete,
}) => {
  return (
    <Box className="p-4 border-1 border-slate-300 rounded-md bg-white my-2">
      <Text size="lg">{title}</Text>
      <Text className="">{content}</Text>
      <Button className="w-fit self-end mt-4" size="sm" variant="outline" onPress={handleDelete}>
        <ButtonText>Delete</ButtonText>
      </Button>
    </Box>
  );
};

export default Card;
