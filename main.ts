import { walk } from "jsr:@std/fs/walk";
import { stringify } from "jsr:@std/csv";

const files = await Array.fromAsync(walk("./files", {
  includeDirs: false,
  skip: [/gitkeep/],
}));

const parsed = files.map((entry) => ({
  category: entry.path.split("/")[1],
  institution_or_organization: entry.path.split("/")[2],
  file_name: entry.name,
}));

const csv = stringify(parsed, {
  columns: ["category", "institution_or_organization", "file_name"],
});

console.log(csv);
