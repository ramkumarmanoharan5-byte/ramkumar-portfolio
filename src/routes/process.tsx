import { createFileRoute, redirect } from "@tanstack/react-router";

// The Process page is now "Why Me". Keep old links working.
export const Route = createFileRoute("/process")({
  beforeLoad: () => {
    throw redirect({ to: "/why-me", statusCode: 301 });
  },
});
