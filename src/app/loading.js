export default function Loading() {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-100">
      <div className="w-10 h-10 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
    </div>
  );
}