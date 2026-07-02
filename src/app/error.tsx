"use client";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage(_props: ErrorPageProps) {
  void _props;
  return null;
}
