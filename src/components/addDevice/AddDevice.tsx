import { Card, Metric, Text, Button } from "@tremor/react";
import { TextInput } from "@tremor/react";
import { SearchIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { validateString } from "@/helpers/validate";

export default function AddDevice() {
  const [error, seterror] = useState("");
  const [inputText, setInputText] = useState("");
  const handleInputChange = (e: any) => {
    const value = e.target.value;
    seterror(validateString(value));
  };
  return (
    <Card
      className="max-w-xs mx-auto "
      decoration="top"
      decorationColor="indigo"
    >
      <Text>Add a new device</Text>
      <Metric>0 / 6</Metric>
      <TextInput
        className="my-2 outline-none"
        onChange={(e) => handleInputChange(e)}
      />

      {error.length > 0 ? (
        <span className="text-xs text-red-400">{error}</span>
      ) : (
        <></>
      )}
      <Button className="mt-4">Create a Device</Button>
    </Card>
  );
}
