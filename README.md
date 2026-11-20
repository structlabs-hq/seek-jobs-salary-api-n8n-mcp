# SEEK Jobs Salary API (AU + NZ) — n8n Workflow & MCP Server

SEEK jobs API for AI agents and automation. Australia and New Zealand job market data. Search live SEEK jobs in Australia and New Zealand over pure JSON HTTP.

- **Apify Actor:** [SEEK Jobs Salary API (AU + NZ)](https://apify.com/structlabs/seek-jobs-salary-api)
- **MCP server:** `https://mcp.apify.com/?actors=structlabs/seek-jobs-salary-api`
- **n8n workflow:** [`n8n/seek-jobs-salary-api-workflow.json`](n8n/seek-jobs-salary-api-workflow.json)
- **Pricing:** Gold: $1.615 per 1,000 jobs + $0.05 per 1,000 starts. [Full pricing](https://apify.com/structlabs/seek-jobs-salary-api)

## Quick start with n8n

1. Download [`n8n/seek-jobs-salary-api-workflow.json`](n8n/seek-jobs-salary-api-workflow.json).
2. In n8n: **Workflows → Import from File**.
3. Add `APIFY_TOKEN` to the n8n environment (Settings → Environment Variables).
4. Open the workflow, adjust the schedule, and run once to test.
5. The HTTP Request node calls `run-sync-get-dataset-items` and returns the rows directly.

## Quick start with Python

```bash
export APIFY_TOKEN=apify_api_...
python examples/quickstart.py
```

## Quick start with Node.js

```bash
export APIFY_TOKEN=apify_api_...
node examples/quickstart.mjs
```

## Input

```json
{
  "queries": [
    "registered nurse"
  ],
  "country": "AU",
  "pageStart": 1,
  "pageEnd": 2,
  "maxJobs": 40,
  "onlyNewJobs": false
}
```

## Sample output

Real sanitized rows from a verified cloud run (emails and phone numbers masked):

```json
[
  {
    "job_id": "95955816",
    "title": "Registered Nurse",
    "company": "St Vincent's Hospital Sydney",
    "advertiser": "St Vincent\u2019s Public Hospital Sydney",
    "country": "AU",
    "location": "Darlinghurst, Sydney NSW",
    "remote_status": "On-site",
    "salary_min": 86183.34,
    "salary_max": 114771.98,
    "salary_currency": "AUD",
    "salary_period": "annual",
    "salary_min_annual": 86183.34,
    "salary_max_annual": 114771.98,
    "salary_label": "$86183.34 - $114771.98 p.a. + super",
    "work_type": "Full time",
    "classification": "Healthcare & Medical",
    "sub_classification": "Nursing - Community, Maternal & Child Health",
    "bullet_points": [
      "Deliver care that enables older Australians to maintain their independence",
      "Autonomy of community nursing while working within a supportive team",
      "Build rewarding relationships with clients and their families"
    ],
    "posted_at": "2026-11-17T22:07:23Z",
    "url": "https://www.seek.com.au/job/95955816",
    "source": "seek.com.au",
    "scraped_at": "2026-11-20T14:21:50.647830+00:00"
  },
  {
    "job_id": "96024786",
    "title": "Registered Nurses",
    "company": "Greenstaff Medical",
    "advertiser": "Greenstaff Medical",
    "country": "AU",
    "location": "Mount Gravatt, Brisbane QLD",
    "remote_status": "On-site",
    "salary_min": 60,
    "salary_max": 90,
    "salary_currency": "AUD",
    "salary_period": "hourly",
    "salary_min_annual": 124800,
    "salary_max_annual": 187200,
    "salary_label": "$60 \u2013 $90 per hour",
    "work_type": "Casual/Vacation",
    "classification": "Healthcare & Medical",
    "sub_classification": "Nursing - General Medical & Surgical",
    "bullet_points": [
      "Referral Bonus: Earn up to $500",
      "Joining Bonus of $500",
      "Contract bonus up to $750"
    ],
    "posted_at": "2026-11-20T09:20:52Z",
    "url": "https://www.seek.com.au/job/96024786",
    "source": "seek.com.au",
    "scraped_at": "2026-11-20T14:21:50.647830+00:00"
  },
  {
    "job_id": "95977316",
    "title": "Registered Nurse - Ward G71",
    "company": "North Metropolitan Health Service",
    "advertiser": "North Metropolitan Health Service",
    "country": "AU",
    "location": "Nedlands, Perth WA",
    "remote_status": "On-site",
    "salary_min": 85848,
    "salary_max": 112644,
    "salary_currency": "AUD",
    "salary_period": "annual",
    "salary_min_annual": 85848,
    "salary_max_annual": 112644,
    "salary_label": "RN Level 1 $85,848 -$112,644 p.a pro rata",
    "work_type": "Full time",
    "classification": "Healthcare & Medical",
    "sub_classification": "Nursing - General Medical & Surgical",
    "bullet_points": [
      "Salary packaging to increase take-home pay",
      "Professional and career development opportunities",
      "Paid leave entitlements"
    ],
    "posted_at": "2026-11-18T16:01:01Z",
    "url": "https://www.seek.com.au/job/95977316",
    "source": "seek.com.au",
    "scraped_at": "2026-11-20T14:21:50.647830+00:00"
  }
]
```

## MCP configuration

Copy [`mcp/mcp_config.json`](mcp/mcp_config.json) into your MCP client (Claude Desktop, Cursor, Windsurf):

```json
{
  "mcpServers": {
    "apify-seek-jobs-salary-api": {
      "url": "https://mcp.apify.com/?actors=structlabs/seek-jobs-salary-api"
    }
  }
}
```

Then ask your agent to run the Actor and return the dataset rows.

## Links

- Apify Store: https://apify.com/structlabs/seek-jobs-salary-api
- n8n: https://n8n.io
- MCP: https://modelcontextprotocol.io

## License

MIT
