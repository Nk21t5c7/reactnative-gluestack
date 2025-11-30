import Card from "@/components/card";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { removeMemo, seedMemos, useMemos } from '@/stores/memos';
import React from "react";
import { FlatList } from "react-native";
export const sampleMemos = [
  {
    id: '2025-11-28T09:00:00.000Z',
    title: 'Shopping',
    content: 'Milk, Eggs, Bread, Butter',
  },
  {
    id: '2025-11-28T10:00:00.000Z',
    title: 'Today\'s Tasks',
    content: 'Check emails, Write report, Meeting',
  }
];


export default function HomeScreen() {
  const memos = useMemos();
  React.useEffect(() => {
    seedMemos(sampleMemos);
  }, []);
  const handleDelete = (id: string) => {
    removeMemo(id);
  };
  return (
    <VStack className="flex-1 p-4">
      <Box className="h-[60px] flex justify-center ">
        <Text className="text-3xl text-center">Memos</Text>

      </Box>
      <FlatList
    data={memos}
    keyExtractor={(m) => m.id}
    // contentContainerStyle={{ paddingBottom: 16 }}
    renderItem={({ item }) => (
      <Card
        key={item.id}
        title={item.title}
        content={item.content}
        handleDelete={() => handleDelete(item.id)}
      />
    )}
  />
    </VStack>
  );
}
