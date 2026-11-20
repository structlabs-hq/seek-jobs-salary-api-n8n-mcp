// Run SEEK Jobs Salary API (AU + NZ) on Apify and print the first rows.
const token = process.env.APIFY_TOKEN;
if (!token) throw new Error("Set APIFY_TOKEN first");

const input = {
  "queries": [
    "registered nurse"
  ],
  "country": "AU",
  "pageStart": 1,
  "pageEnd": 2,
  "maxJobs": 40,
  "onlyNewJobs": false
};

const res = await fetch("https://api.apify.com/v2/acts/structlabs~seek-jobs-salary-api/run-sync-get-dataset-items", {
  method: "POST",
  headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
  body: JSON.stringify(input),
});
if (!res.ok) throw new Error(`Apify ${res.status}: ${await res.text()}`);
const items = await res.json();
for (const item of items.slice(0, 5)) console.log(JSON.stringify(item).slice(0, 500));
console.log(`${items.length} items`);
