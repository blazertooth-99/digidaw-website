import Navigation from "../components/navigation";
import type { Metadata } from "next";

export const metadata = {
  title: "Home || Digidaw",
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    console.log("Layout render!!!");
  return (
    <>
      <Navigation />
      {children}
    </>
  );
}
