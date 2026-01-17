# Indian Education Exam Cell (IEEC), India
  <b>Welcome to Indian Education Exam Cell, India</b><br/>
  A centralized, intelligent examination paper generation platform
</p>

---

##  Overview

**Indian Education Exam Cell (IEEC)** is a secure, authority-driven software system designed to **generate examination question papers instantly and accurately** for:

* Schools (Class 1–12)
* Colleges & Universities
* Technical Institutions (B.Tech / M.Tech)
* Government Examination Bodies

The platform dynamically generates **well-structured, government-standard question papers** based on:

* Uploaded syllabus & teaching coverage
* Marks distribution
* Class / course / branch
* Cognitive difficulty levels (Bloom’s Taxonomy)

> ⚠️ **Question paper generation authority is strictly centralized and controlled.**

---

## 🖥️ First Page (Landing Interface)

**Header**

* Center-aligned official IEEC logo
* Title: **Indian Education Exam Cell, India**

**Visual Sections**

* AIM
* VISION
* MISSION

> *(Displayed visually through UI components — not written as descriptive text)*

**Primary Actions**

* 🔹 **Register**
* 🔹 **Login**

---

## 🏛️ Registration Module

Organizations eligible for registration:

* 🏫 School
* 🏢 College
* 🎓 University
* 🏛️ Government Body

### Registration Requirements

* Organization name
* Type of authority
* Official email ID (mandatory verification)
* Address & jurisdiction
* Authorized signatory details

> Only verified organizations are allowed to proceed.

---

## 🔐 Authentication & Login

After successful registration:

* Organizations log in based on their category
* Role-based dashboard access is granted

Supported academic structures after login:

### 🏫 Schools

* Class 1–10
* Class 11–12

  * Science
  * Arts
  * Commerce

### 🎓 Graduation

* Subject-wise separation

### 🛠️ B.Tech

* Branch-wise separation (all branches)

### 🔬 M.Tech

* Branch-wise separation (all branches)

---

## 📊 Authority Dashboard (Organization Side)

Each registered authority can:

* View organization profile
* Select:

  * Class / Course / Branch
  * Subject
  * Total marks
* Upload:

  * Complete syllabus
  * Teaching notes / covered topics
* Submit **question paper generation request**

 Once submitted:

* The request is added to the **Chief Exam Cell Officer dashboard**
* All details are emailed automatically

---

## 🧠 AI-Powered Question Paper Generation

The system uses a **strong AI-driven algorithm** grounded in **Bloom’s Taxonomy** to ensure academic quality and balance.

### Bloom’s Cognitive Levels Used

| Level         | Cognitive Process   |
| ------------- | ------------------- |
| Remembering   | Recall & identify   |
| Understanding | Explain & interpret |
| Applying      | Solve & use         |
| Analyzing     | Compare & examine   |
| Evaluating    | Judge & justify     |
| Creating      | Design & generate   |

---

## ⚙️ Conceptual Algorithm (QPGS)

### Inputs

* Uploaded syllabus & notes
* Marks requirement
* Class / course / branch
* Organization type
* Paper design template

### Core Components

* **Question Bank (QB)**

  * Tagged with Bloom’s Level, Topic, Marks, Course Outcome
* **Paper Design Template (PDT)**

  * Section structure
  * Marks distribution
  * Bloom’s level percentage

### Generation Flow

1. Initialize paper structure
2. Calculate target marks per Bloom’s level
3. Filter eligible questions
4. Randomized, balanced selection
5. Continuous validation of difficulty balance
6. Final verification & formatting

### Output

* Government-standard question paper
* `.docx` format (CBSE-style printable)

---

## 👤 Chief Exam Cell Officer (Central Authority)

**Designation:** Chief Exam Cell Officer


### Privileges

* View all registered authorities
* Monitor all requests
* **Sole authority to generate question papers**
* Generate papers per organization standards
* Auto-add generated papers to:

  * Organization dashboard
  * Exam Cell records
* Automatic email notifications

---

## 📁 Question Paper Management

Once generated:

* Paper is stored under:

  * School / College / University / Government Body
  * Class / Course / Branch
* Visible in:

  * Authority dashboard
  * Exam Cell section
* Ready for official printing & conduct

---

## 🛡️ Security & Governance

* Centralized control
* No local paper generation
* Role-based access
* Audit-ready logs
* Official email verification mandatory

---

## 🧰 Tech Stack (Prototype)

* **Frontend:** Next.js, TypeScript, Tailwind CSS
* **AI Layer**
* **Document Export:** `.docx`
* **Design Style:** Government-grade (CBSE / NTA inspired)

---

##  Status

> 🚧 This repository represents the **design, architecture, and conceptual prototype** of Indian Education Exam Cell (IEEC).
> Production deployment, AI training, and large-scale rollout are planned phases.

---

## 1️System Architecture Diagram – Indian Education Exam Cell (IEEC)

###  High-Level Architecture Overview

Indian Education Exam Cell (IEEC) follows a **centralized, authority-driven, secure architecture** where question paper generation power is **strictly controlled by the Chief Exam Cell Officer**, ensuring standardization, confidentiality, and compliance with government examination norms.

The architecture is designed to support:

* Schools (Class 1–12)
* Colleges & Universities
* B.Tech / M.Tech institutions
* Government examination bodies

All entities interact through a controlled workflow, with AI-assisted generation at the core.

---

### 🏗️ Logical Architecture Layers

```
┌──────────────────────────────────────────┐
│            Client / UI Layer              │
│──────────────────────────────────────────│
│ • Landing Page (IEEC Portal)              │
│ • Registration Interface                  │
│ • Login Interface                         │
│ • Authority Dashboard                     │
│ • Chief Exam Cell Officer Dashboard       │
└──────────────────────────────────────────┘
                │
                ▼
┌──────────────────────────────────────────┐
│        Application / Service Layer        │
│──────────────────────────────────────────│
│ • Authentication Service                  │
│ • Role-Based Access Control (RBAC)        │
│ • Organization Management Service         │
│ • Syllabus & Notes Management Service     │
│ • Question Request Management             │
│ • Notification & Email Service            │
└──────────────────────────────────────────┘
                │
                ▼
┌──────────────────────────────────────────┐
│           AI Intelligence Layer           │
│──────────────────────────────────────────│
│ • Bloom’s Taxonomy Engine                 │
│ • Marks Distribution Engine               │
│ • Difficulty Balancing Module             │
│ • Question Selection & Randomization      │
│ • Validation & Consistency Checker        │
└──────────────────────────────────────────┘
                │
                ▼
┌──────────────────────────────────────────┐
│        Central Exam Cell Authority        │
│──────────────────────────────────────────│
│ • Chief Exam Cell Officer Control Panel   │
│ • Approval & Generation Authority         │
│ • Government Format Compliance            │
│ • .DOCX Question Paper Generator          │
└──────────────────────────────────────────┘
                │
                ▼
┌──────────────────────────────────────────┐
│             Data Storage Layer            │
│──────────────────────────────────────────│
│ • Organization Database                   │
│ • User & Role Database                    │
│ • Syllabus & Notes Repository             │
│ • Question Bank (Tagged)                  │
│ • Generated Question Papers               │
│ • Audit Logs & History                    │
└──────────────────────────────────────────┘
```

---

### 🔐 Role-Based Control Flow (Critical Design Principle)

```
School / College / University / Govt Body
        │
        │  (Upload syllabus, marks, class)
        ▼
Authority Dashboard (Request Only)
        │
        │  (No generation rights)
        ▼
Chief Exam Cell Officer Dashboard
        │
        │  (AI-assisted generation)
        ▼
Approved Question Paper (.docx)
        │
        ├──► Added to Authority Dashboard
        └──► Stored in Exam Cell Records
```

✔ **No organization can generate question papers independently**
✔ **Central authority ensures uniformity & security**

---

###  AI Question Generation Architecture (Internal)

```
Input Module
  ├─ Class / Course / Branch
  ├─ Marks Distribution
  ├─ Uploaded Syllabus
  └─ Organization Type

        ▼

Bloom’s Taxonomy Mapper
  ├─ Remembering
  ├─ Understanding
  ├─ Applying
  ├─ Analyzing
  ├─ Evaluating
  └─ Creating

        ▼

Question Selection Engine
  ├─ Topic Filtering
  ├─ Marks Matching
  ├─ Difficulty Balance
  ├─ Randomized Selection

        ▼

Validation Engine
  ├─ Bloom’s Level Balance Check
  ├─ Marks Total Verification
  ├─ Syllabus Coverage Check

        ▼

Formatter & Exporter
  └─ Government-Style .DOCX Output
```

---

###  Security & Governance Architecture

* Centralized generation authority
* Official email verification mandatory
* Role-Based Access Control (RBAC)
* Immutable audit logs
* No local or offline paper generation
* Controlled document export

---

###  Key Architectural Advantages

* **Government-grade standardization**
* **Zero question leakage risk**
* **AI-balanced assessment design**
* **Scalable from school to national level**
* **Audit-ready & legally defensible**

---

>  This architecture is suitable for:
>
> * State Education Boards
> * CBSE / ICSE–style bodies
> * NTA-like national agencies
> * University examination cells

---

## 2️ Database Schema (ER-Level, Production-Ready)

The IEEC database is designed to be **secure, normalized, auditable, and scalable** from district-level schools to national examination bodies. It follows strict **role-based governance** and supports AI-driven question generation.

---

###  Core Entity Relationship Overview

```
ORGANIZATION ──┬── USERS
               ├── SYLLABUS
               ├── QUESTION_REQUEST
               ├── GENERATED_PAPER
               └── AUDIT_LOGS

QUESTION_BANK ──┬── BLOOMS_LEVEL
                 ├── COURSE_OUTCOME
                 └── SUBJECT
```

---

##  Entity Definitions

###  ORGANIZATION

Stores registered authorities.

| Field          | Type             | Description                          |
| -------------- | ---------------- | ------------------------------------ |
| org_id (PK)    | UUID             | Unique organization ID               |
| org_name       | VARCHAR          | Official name                        |
| org_type       | ENUM             | School / College / University / Govt |
| official_email | VARCHAR (UNIQUE) | Verified email                       |
| address        | TEXT             | Official address                     |
| status         | ENUM             | Pending / Approved / Suspended       |
| created_at     | TIMESTAMP        | Registration time                    |

---

### 👤 USERS

All login-enabled users.

| Field         | Type             | Description              |
| ------------- | ---------------- | ------------------------ |
| user_id (PK)  | UUID             | Unique user ID           |
| org_id (FK)   | UUID             | Linked organization      |
| name          | VARCHAR          | Full name                |
| email         | VARCHAR (UNIQUE) | Login email              |
| role          | ENUM             | Authority / ChiefOfficer |
| password_hash | TEXT             | Encrypted password       |
| is_active     | BOOLEAN          | Access control           |
| last_login    | TIMESTAMP        | Last access              |

---

### 📚 SYLLABUS

Uploaded academic content.

| Field            | Type      | Description        |
| ---------------- | --------- | ------------------ |
| syllabus_id (PK) | UUID      | Unique syllabus ID |
| org_id (FK)      | UUID      | Organization       |
| class_level      | VARCHAR   | Class / Course     |
| subject          | VARCHAR   | Subject name       |
| branch           | VARCHAR   | Branch (if any)    |
| syllabus_file    | TEXT      | File path          |
| uploaded_at      | TIMESTAMP | Upload time        |

---

### 📝 QUESTION_REQUEST

Request made by authority.

| Field            | Type      | Description                    |
| ---------------- | --------- | ------------------------------ |
| request_id (PK)  | UUID      | Request ID                     |
| org_id (FK)      | UUID      | Requesting org                 |
| class_level      | VARCHAR   | Selected class                 |
| subject          | VARCHAR   | Subject                        |
| marks            | INT       | Total marks                    |
| syllabus_id (FK) | UUID      | Linked syllabus                |
| status           | ENUM      | Pending / Approved / Generated |
| requested_at     | TIMESTAMP | Request time                   |

---

###  BLOOMS_LEVEL

Cognitive taxonomy mapping.

| Field         | Type    | Description          |
| ------------- | ------- | -------------------- |
| bloom_id (PK) | INT     | Level ID             |
| level_name    | VARCHAR | Remember / Apply etc |
| weightage     | FLOAT   | Percentage           |

---

### 📦 QUESTION_BANK

Tagged questions for AI.

| Field            | Type    | Description          |
| ---------------- | ------- | -------------------- |
| question_id (PK) | UUID    | Question ID          |
| subject          | VARCHAR | Subject              |
| topic            | VARCHAR | Topic                |
| bloom_id (FK)    | INT     | Bloom’s level        |
| marks            | INT     | Question marks       |
| difficulty       | ENUM    | Easy / Medium / Hard |
| question_text    | TEXT    | Actual question      |
| is_active        | BOOLEAN | Availability         |

---

### 📄 GENERATED_PAPER

Final output records.

| Field             | Type      | Description     |
| ----------------- | --------- | --------------- |
| paper_id (PK)     | UUID      | Paper ID        |
| request_id (FK)   | UUID      | Source request  |
| generated_by (FK) | UUID      | Chief Officer   |
| file_path         | TEXT      | .docx location  |
| generated_at      | TIMESTAMP | Generation time |

---

### 📜 AUDIT_LOGS

Compliance & traceability.

| Field        | Type      | Description |
| ------------ | --------- | ----------- |
| log_id (PK)  | UUID      | Log ID      |
| action       | TEXT      | Activity    |
| performed_by | UUID      | User ID     |
| timestamp    | TIMESTAMP | Time        |
| ip_address   | VARCHAR   | Source IP   |

---

## 🔗 Key Relationships

* ORGANIZATION 1──* USERS
* ORGANIZATION 1──* SYLLABUS
* ORGANIZATION 1──* QUESTION_REQUEST
* QUESTION_REQUEST 1──1 GENERATED_PAPER
* BLOOMS_LEVEL 1──* QUESTION_BANK

---

##  Database Design Principles

* Full normalization (3NF)
* Strong foreign key constraints
* Immutable audit trails
* Role isolation
* AI-ready tagging

---

## API Documentation (REST + Authentication)

The IEEC platform exposes **secure, role-based REST APIs** designed for government-grade reliability, auditability, and scalability. All APIs follow REST principles and use JSON for data exchange.

Base URL (Prototype):

```
https://api.ieec.gov.in/v1
```

---

## 🔐 Authentication & Authorization

### Authentication Method

* JWT (JSON Web Token)
* Token-based session management
* Role-Based Access Control (RBAC)

### Roles

* `AUTHORITY_USER` (School / College / University / Govt Body)
* `CHIEF_EXAM_CELL_OFFICER`

---

### 🔑 Auth APIs

#### 1. Register Organization

`POST /auth/register`

**Request Body**

```json
{
  "orgName": "ABC Public School",
  "orgType": "SCHOOL",
  "officialEmail": "info@abcschool.edu",
  "address": "Patna, Bihar",
  "authorizedPerson": "Principal Name"
}
```

**Response**

```json
{ "message": "Registration submitted for verification" }
```

---

#### 2. Login

`POST /auth/login`

```json
{
  "email": "info@abcschool.edu",
  "password": "********"
}
```

```json
{
  "token": "JWT_TOKEN",
  "role": "AUTHORITY_USER"
}
```

---

## 🏛️ Authority Dashboard APIs

### Upload Syllabus

`POST /authority/syllabus`

Headers:

```
Authorization: Bearer <JWT>
```

Body: multipart/form-data

* classLevel
* subject
* branch (optional)
* syllabusFile

---

### Create Question Paper Request

`POST /authority/question-request`

```json
{
  "classLevel": "Class 10",
  "subject": "Science",
  "marks": 80,
  "syllabusId": "uuid"
}
```

**Status:** `PENDING`

---

### View Requests

`GET /authority/question-requests`

---

## 👤 Chief Exam Cell Officer APIs (Restricted)

> ⚠️ Accessible only to `CHIEF_EXAM_CELL_OFFICER`

### View All Requests

`GET /chief/requests?status=PENDING`

---

### Generate Question Paper

`POST /chief/generate-paper`

```json
{
  "requestId": "uuid",
  "bloomDistribution": {
    "remembering": 30,
    "understanding": 20,
    "applying": 20,
    "analyzing": 15,
    "evaluating": 10,
    "creating": 5
  }
}
```

---

### Export Question Paper

`GET /chief/export/{paperId}`

**Response:**

* `.docx` file (CBSE-style format)

---

##  AI Engine APIs (Internal)

### Validate Paper Structure

`POST /ai/validate`

### Generate Questions

`POST /ai/generate`

Inputs:

* syllabus
* marks
* Bloom’s levels

---

##  Notification APIs

### Email Trigger (Internal)

`POST /notify/email`

* Sent to Chief Exam Cell Officer
* Sent to requesting authority

---

## 📜 Audit & Compliance APIs

### View Logs

`GET /admin/audit-logs`

---

##  Security Standards

* HTTPS only
* JWT expiry & refresh
* IP logging
* Rate limiting
* Immutable logs

---

➡️ **Next Section:** AI Question Generation Engine (Detailed Logic & Pseudocode)


