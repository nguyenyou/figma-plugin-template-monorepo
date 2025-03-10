import { run } from "backend";

figma.showUI(__html__, { width: 450, height: 700, themeColors: true });

// Listen for selection changes
figma.on("selectionchange", async () => {
  await run();
});
