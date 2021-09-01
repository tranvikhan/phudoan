import React from "react";
import Container from "./Container";

export default function Body({ children }: any) {
  return (
    <Container>
      <div className="flex flex-col lg:space-y-20 space-y-16 lg:my-20 my-8">
        {children}
      </div>
    </Container>
  );
}
