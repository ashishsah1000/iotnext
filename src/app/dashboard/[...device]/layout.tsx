import { Grid, Card } from "@tremor/react";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-[80vw] mx-auto mt-24">
      <div className="mt-6">
        <Card>
          <div>{children}</div>
        </Card>
      </div>
    </div>
  );
}
