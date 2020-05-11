/* eslint-disable no-console */
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Snapshot } from "utils/Snapshot";
import StatelessTutorSlides from "./StatelessTutorSlides";
import { Worksheet } from "constants/types";

const onSelectWorksheet = (worksheet: Worksheet) =>
  console.log("onSelectWorkseet", worksheet);
const onAddWorksheet = () => console.log("onAddWorksheet");

const [ foo ] = bar;

const Layout = ({ children }) => {
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {children}
    </div>
  );
};

const LayoutItem = ({ children }) => {
  return <div style={{ padding: 20 }}>{children}</div>;
};

const initialWorksheets: Worksheet[] = [
  { pageId: 0 },
  { pageId: 1 },
  { pageId: 2 },
];

const lotsOfWorksheets: Worksheet[] = Array.from(
  new Array(28)
).map((_, index) => ({ pageId: index }));

storiesOf("Tabula", module).add("TutorSlides", () => (
  <div style={{ padding: 20 }}>
    <h1>TutorSlides</h1>

    <h2>Worksheets</h2>
    <Layout>
      <LayoutItem>
        <h3>Initial</h3>
        <Snapshot name="Initial">
          <StatelessTutorSlides
            workSheets={initialWorksheets}
            activeWorksheetId={0}
            imageSlides={[]}
            onSelectWorksheet={onSelectWorksheet}
            onAddWorksheet={onAddWorksheet}
          />
        </Snapshot>
      </LayoutItem>

      <LayoutItem>
        <h3>Worksheet C selected</h3>
        <Snapshot name="Worksheet C selected">
          <StatelessTutorSlides
            workSheets={initialWorksheets}
            activeWorksheetId={2}
            imageSlides={[]}
            onSelectWorksheet={onSelectWorksheet}
            onAddWorksheet={onAddWorksheet}
          />
        </Snapshot>
      </LayoutItem>

      <LayoutItem>
        <h3>Lots of worksheets</h3>
        <Snapshot name="Lots of worksheets">
          <StatelessTutorSlides
            workSheets={lotsOfWorksheets}
            activeWorksheetId={0}
            imageSlides={[]}
            onSelectWorksheet={onSelectWorksheet}
            onAddWorksheet={onAddWorksheet}
          />
        </Snapshot>
      </LayoutItem>
    </Layout>

    <h2>Image library</h2>
    <Layout>
      <LayoutItem>
        <h3>No images</h3>
        <Snapshot name="No images">
          <StatelessTutorSlides
            workSheets={initialWorksheets}
            activeWorksheetId={0}
            imageSlides={[]}
            onSelectWorksheet={onSelectWorksheet}
            onAddWorksheet={onAddWorksheet}
          />
        </Snapshot>
      </LayoutItem>
    </Layout>
  </div>
));
