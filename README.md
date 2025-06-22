# 📊 InsightX: AI-Powered Business Intelligence Dashboard

[![Lovable Deploy](https://img.shields.io/badge/Deployed%20on-Lovable-blueviolet)](https://lovable.dev/projects/72bc5529-ffa5-4203-b8b2-dc08be9f57d7)
[![Tech Stack](https://img.shields.io/badge/Stack-Full--Stack%20%7C%20AI%20%7C%20ML%20%7C%20BI-blue)](#)
[![GitHub last commit](https://img.shields.io/github/last-commit/Rishita-rm/InsightX-AI-Powered-Business-Intelligence-Dashboard)](#)

## Project info

🚀 Live Demo: [InsightX on Lovable](https://lovable.dev/projects/72bc5529-ffa5-4203-b8b2-dc08be9f57d7)

---

## 🧩 What is InsightX?

InsightX is an AI-powered business intelligence dashboard that allows users to upload datasets, clean them intelligently, generate insights automatically using GPT, and interactively explore their data — all in one modern full-stack web app.

---

## 💡 Why InsightX?

> “Small business owners, analysts, or anyone with data can struggle to make sense of CSV files or raw tables. InsightX removes the guesswork by letting AI instantly show you trends, top performers, predictions, and even answer natural language questions — just like a data scientist would.”

With InsightX, anyone can:
- 📤 Upload a CSV or Excel file
- 🧹 Automatically clean and preview data
- 🤖 Get AI-generated summaries and charts
- 🔍 Filter, query, and explore interactively
- 📈 Predict trends (churn, demand, etc.)
- 🧠 Ask questions like “Who are my top customers?”

---

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```
---

## ⚙️ Tech Stack

| Layer     | Tech Used                                       |
|-----------|-------------------------------------------------|
| Frontend  | React + Tailwind CSS + ShadCN-UI + Vite         |
| Backend   | FastAPI or Flask                                |
| AI/ML     | OpenAI GPT-4, Scikit-learn, LangChain (optional)|
| Data      | Pandas, SQL (Postgres/SQLite)                   |
| Deployment| Lovable, Vercel, Render, Docker (optional)      |

---

## 🚀 Features

### ✅ 1. Upload & Auto-Clean Data
- Upload CSV/Excel files
- AI handles nulls, renames columns, detects types
- Preview cleaned dataset

### ✅ 2. AI-Generated Insights
- “What are the top trends?”
- “Which regions are underperforming?”
- “Who are my best customers?”
- GPT generates answers and charts

### ✅ 3. Interactive Dashboard
- Filters: Date, Region, Category
- KPIs: Revenue, Sales, Customer Segments
- Optional Cohort or Funnel view

### ✅ 4. Predictive Analytics (Optional)
- Select target (e.g. churn)
- Run ML model (sklearn)
- Download results as CSV

### ✅ 5. Chat With Your Data
- Type queries:  
  “Show monthly sales trend”  
  “Least profitable category last quarter?”  
- Powered by LangChain or PandasAI

---

## 🛠️ Local Development

```bash
git clone <YOUR_REPO_URL>
cd InsightX-AI-Powered-Business-Intelligence-Dashboard
npm install
npm run dev
```
---

## 🧠 Future Add-ons
- User Auth (Supabase/Firebase)
- Scheduled PDF Reports (Celery + WeasyPrint)
- Feedback Button (Google Form)
