# Refrigeration Monitoring Dashboard

A web-based IoT monitoring application for refrigeration systems, built with React and TypeScript.

The project aims to simulate an industrial monitoring platform where users can monitor refrigeration equipment, track temperature measurements, review system alerts, and analyze operational data.

**Project status:** 🚧 In Development

## Overview

Refrigeration Monitoring Dashboard is a portfolio project inspired by industrial refrigeration and monitoring solutions.

The application is designed to provide a centralized interface for monitoring refrigeration equipment and visualizing operational data.

The long-term goal is to develop a full-stack application with a React frontend and a Python backend.

## Technology Stack

### Frontend

- React
- TypeScript
- Vite
- Material UI
- React Router
- TanStack Query
- Recharts

### Testing

- Vitest
- React Testing Library
- Jest DOM

### Planned Backend

- Python
- Flask
- SQLAlchemy
- SQLite

## Current Features

- React + TypeScript application setup
- Feature-based project structure
- Material UI theme configuration
- Global application providers
- Sidebar navigation
- Nested routing with React Router
- Four application routes:
  - Dashboard
  - Equipment
  - Alerts & Events
  - Temperature Monitoring

## Planned Features

- Dashboard with operational KPIs
- Equipment inventory and status monitoring
- Temperature monitoring and historical charts
- Alerts and events management
- Realistic simulated IoT sensor data
- REST API integration
- Flask backend
- SQLite database
- Automated component and integration tests
- Responsive user interface

## Project Structure

```text
src/
├── app/
│   ├── providers/
│   ├── theme/
│   └── App.tsx
│
├── components/
│   ├── common/
│   └── layout/
│       ├── AppLayout.tsx
│       └── Sidebar.tsx
│
├── features/
│   ├── dashboard/
│   ├── equipment/
│   ├── alerts/
│   └── monitoring/
│
├── services/
│   └── api/
│
├── mocks/
├── types/
└── main.tsx
```

## Getting Started

### Prerequisites

- Node.js
- npm
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/dmytriigithub/refrigeration-monitoring-dashboard.git
```

Navigate to the project directory:

```bash
cd refrigeration-monitoring-dashboard
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

### Production Build

To create a production build:

```bash
npm run build
```

## Development Goals

This project is being developed to strengthen practical skills in:

- React application architecture
- TypeScript and type-safe development
- Component-based UI development
- API integration and server-state management
- Data visualization
- Automated testing
- Full-stack application development

## Motivation

The project is inspired by industrial refrigeration, automation, and IoT monitoring systems.

It combines my hands-on experience working with automated dairy farm equipment and my interest in software engineering.

The goal is to build a practical application that demonstrates how modern web technologies can be used to monitor industrial equipment and visualize operational data.

---

**Author:** Dmytro

**Repository:** [Refrigeration Monitoring Dashboard](https://github.com/dmytriigithub/refrigeration-monitoring-dashboard)
