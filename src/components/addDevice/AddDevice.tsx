import { Card, Metric, Text, Button } from "@tremor/react";
import { TextInput } from "@tremor/react";
import { SearchIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { validateString } from "@/helpers/validate";
import { createNewEquipment } from "@/axios/equipment";

export default function AddDevice() {
  const [error, seterror] = useState("");
  const [inputText, setInputText] = useState("");
  const [detatilsText, setdetatilsText] = useState("");
  const handleSubmit = async () => {
    if (inputText.length > 0 && detatilsText.length > 0) {
      console.log("sending request", { inputText, detatilsText });
      const res = await createNewEquipment(inputText, detatilsText);
      console.log("equipment created response", res);
    }
  };
  return (
    <Card
      className="max-w-xs mx-auto "
      decoration="top"
      decorationColor="indigo"
    >
      <Text>Add a new device</Text>

      <TextInput
        placeholder="Name of equipment"
        className="my-2 outline-none"
        onChange={(e) => setInputText(e.target.value)}
      />
      <TextInput
        className="my-2 outline-none"
        placeholder="Details of equipment"
        onChange={(e) => setdetatilsText(e.target.value)}
      />

      {error.length > 0 ? (
        <span className="text-xs text-red-400">{error}</span>
      ) : (
        <></>
      )}
      <div className="flex gap-2 items-center">
        <Button className="mt-4" onClick={() => handleSubmit()}>
          Create a Device
        </Button>
        <Metric>0 / 6</Metric>
      </div>
    </Card>
  );
}
