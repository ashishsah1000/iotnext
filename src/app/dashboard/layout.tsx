import { Grid, Card } from "@tremor/react";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="w-[80vw] mx-auto">
          <div className="mt-6">
            <Card>
              <div className="h-80">{children}</div>
            </Card>
          </div>
          <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-6">
            <Card>
              {/* Placeholder to set height */}
              <div className="h-28" />
            </Card>
            <Card>
              {/* Placeholder to set height */}
              <div className="h-28" />
            </Card>
            <Card>
              {/* Placeholder to set height */}
              <div className="h-28" />
            </Card>
          </Grid>
        </div>
      </body>
    </html>
  );
}
