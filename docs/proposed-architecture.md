# Proposed Architecture: React Modernization

## Core Stack
- **Framework**: React 19 (Functional Components + Hooks)
- **Build Tool**: Vite (for near-instant HMR and optimized builds)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS + Framer Motion (for premium animations)
- **State Management**: Zustand (Client State) + TanStack Query (Server State)

## 1. Declarative UI Pattern
Moving away from Angular's imperative service-based logic to a declarative UI. This ensures that the UI is a pure function of the state, making the application easier to debug and test.

## 2. Server State Synchronization
By using **TanStack Query (React Query)**, we address several legacy issues:
- **Automatic Caching**: Reducing redundant API calls for batch lists and configurations.
- **Optimistic Updates**: Allowing the UI to reflect batch status changes immediately before the backend confirms.
- **Background Polling**: Seamlessly updating transaction metrics without full-page reloads.

## 3. Atomic Design System
We are implementing a component library based on Atomic Design principles:
- **Atoms**: Buttons, Inputs, Icons (Lucide React).
- **Molecules**: Form fields, Search bars.
- **Organisms**: Batch tables, Transaction monitors.
- **Templates**: Layouts with Glassmorphism and responsive sidebars.

## 4. Native Visualizations
Replacing Grafana iframes with **Recharts**. This allows for:
- **Full Theme Integration**: Charts that match the app's dark/light mode perfectly.
- **Interactivity**: Clicking on a "Failure Rate" chart segment can directly filter the Transaction Table.
- **Performance**: Reducing the heavy overhead of loading an entire Grafana instance.

---
*Status: Initial prototype under development in `phee-react-app`.*
