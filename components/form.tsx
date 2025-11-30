import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
} from "@/components/ui/form-control";
import { Input, InputField } from "@/components/ui/input";
import React from "react";
import { Keyboard } from "react-native";

import { VStack } from "@/components/ui/vstack";
import { addMemo } from "@/stores/memos";
import { Button, ButtonText } from "./ui/button";
export default function Form() {
  const [data, setData] = React.useState({
    title: "",
    content: "",
  });

  const handleSubmit = () => { 
    if(data.title && data.content) {
      addMemo(data.title, data.content);
      setData({ title: "", content: "" });
    }
    Keyboard.dismiss();
  };
  return (
    <VStack className="p-4 bg-white">
      <FormControl
        size="md"
        isDisabled={false}
        isReadOnly={false}
        isRequired={true}
      >
        <FormControlLabel>
          <FormControlLabelText>Title</FormControlLabelText>
        </FormControlLabel>
        <Input className="my-1" size="md">
          <InputField
            type="text"
            placeholder="title"
            value={data.title}
            onChangeText={(text) =>
              setData((prev) => ({
                ...prev,
                title: text,
              }))
            }
          />
        </Input>
      </FormControl>

      <FormControl
        size="md"
        isDisabled={false}
        isReadOnly={false}
        isRequired={true}
      >
        <FormControlLabel>
          <FormControlLabelText>Content</FormControlLabelText>
        </FormControlLabel>
        <Input className="my-1" size="md">
          <InputField
            type="text"
            placeholder="content"
            value={data.content}
            onChangeText={(text) =>
              setData((prev) => ({
                ...prev,
                content: text,
              }))
            }
          />
        </Input>
      </FormControl>

      <Button
        className=" mt-4"
        size="sm"
        variant="outline"
        onPress={handleSubmit}
      >
        <ButtonText>Submit</ButtonText>
      </Button>
    </VStack>
  );
}
