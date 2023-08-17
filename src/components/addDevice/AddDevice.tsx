import { Card, Metric, Text, Button } from "@tremor/react";

export default function AddDevice() {
  return (
    <Card
      className="max-w-xs mx-auto"
      decoration="top"
      decorationColor="indigo"
    >
      <Text>Add a new device</Text>
      <Metric>0 / 6</Metric>
      <Button className="mt-4">Create a Device</Button>
    </Card>
  );
}
