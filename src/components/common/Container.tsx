import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      {children}
    </div>
  );
};

export default Container;