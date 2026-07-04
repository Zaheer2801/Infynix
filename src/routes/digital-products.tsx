import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/digital-products")({
  component: () => <Outlet />,
});
