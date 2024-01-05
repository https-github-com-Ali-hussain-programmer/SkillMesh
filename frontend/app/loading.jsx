import { Spinner } from "@chakra-ui/react";
export default function Loading() {
  return (
    <>
      <div className="h-[100vh] flex items-center justify-center">
        <Spinner size="lg" />
      </div>
      ;
    </>
  );
}
