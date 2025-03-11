import { walk } from "jsr:@std/fs/walk";
import { stringify } from "jsr:@std/csv";

const files = await Array.fromAsync(walk("./files", {
  includeDirs: false,
  skip: [/gitkeep/],
}));

const parsed = files.map((entry) => ({
  type: entry.path.split("/")[1],
  category: entry.path.split("/")[2],
  file_name: entry.name,
}));

const csv = stringify(parsed, {
  columns: ["type", "category", "file_name"],
});

console.log(csv);
