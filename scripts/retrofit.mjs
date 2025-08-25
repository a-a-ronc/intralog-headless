
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, posix as path } from "node:path";

const pairs = [
  {
    from: "app/solutions/conveyor/page.tsx",
    to: "app/solutions/by-technology/conveyor-and-sortation/page.tsx",
    slugOld: "/solutions/conveyor",
    slugNew: "/solutions/by-technology/conveyor-and-sortation",
    title: "Conveyor & Sortation",
  },
  {
    from: "app/solutions/vlm/page.tsx",
    to: "app/solutions/by-technology/goods-to-person-vlms/page.tsx",
    slugOld: "/solutions/vlm",
    slugNew: "/solutions/by-technology/goods-to-person-vlms",
    title: "Goods-to-Person / VLMs",
  },
  {
    from: "app/solutions/pallet-shuttle/page.tsx",
    to: "app/solutions/by-technology/pallet-shuttle-systems/page.tsx",
    slugOld: "/solutions/pallet-shuttle",
    slugNew: "/solutions/by-technology/pallet-shuttle-systems",
    title: "Pallet Shuttle Systems",
  },
];

/** Transforms the page code so it still works in the new location */
function transform(tsx, { slugOld, slugNew, title }) {
  let out = tsx;

  // 1) Update any hard-coded links from old slug to new slug
  const linkRegex = new RegExp(slugOld.replace(/\//g, "\\/"), "g");
  out = out.replace(linkRegex, slugNew);

  // 2) Normalize images: ../../public/foo.png -> /foo.png (Next serves from /public)
  //    Also handle ../public and ./public cases
  out = out.replace(/(['"`])(?:\.{1,3}\/)+public\/([^'"`]+)\1/g, (_m, quote, p2) => {
    return `${quote}/${p2}${quote}`;
  });

  // 3) Optional: convert deep relative component imports to alias (if present)
  //    "../../../components/X" or "@/components/X" -> "@/components/X"
  out = out.replace(
    /from\s+['"`](?:\.{1,3}\/)+components\/([^'"`]+)['"`]/g,
    "from \"@/components/$1\""
  );

  // 4) If a SolutionPage import exists but not via alias, prefer alias
  out = out.replace(
    /import\s+SolutionPage\s+from\s+['"`](?!@\/components\/)[^'"`]*components\/SolutionPage['"`];?/,
    'import SolutionPage from "@/components/SolutionPage";'
  );

  // 5) Best-effort metadata title tweak (don't break if it already matches)
  out = out.replace(
    /export\s+const\s+metadata\s*=\s*{[^}]*title\s*:\s*['"`][^'"`]+['"`][^}]*}/,
    `export const metadata = { title: "${title} | Intralog" }`
  );

  return out;
}

function ensureDir(p) {
  const dir = dirname(p);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
}

let migrated = 0;
for (const spec of pairs) {
  if (!existsSync(spec.from)) {
    console.warn("source missing, skipping:", spec.from);
    continue;
  }

  const tsx = readFileSync(spec.from, "utf8");
  const newCode = transform(tsx, spec);

  ensureDir(spec.to);
  if (!existsSync(spec.to)) writeFileSync(spec.to, newCode, "utf8");
  else console.log("exists, overwriting:", spec.to), writeFileSync(spec.to, newCode, "utf8");

  migrated++;
  console.log("migrated ->", spec.to);
}

// Also write redirect stubs at the OLD routes so legacy links still work
for (const { from, slugNew } of pairs) {
  // replace the old page.tsx with a redirect page
  const redirectCode = `import { redirect } from "next/navigation";
export default function Page(){ redirect("${slugNew}"); }
`;
  writeFileSync(from, redirectCode, "utf8");
  console.log("redirect stub written at", from);
}

console.log("done. migrated:", migrated);
