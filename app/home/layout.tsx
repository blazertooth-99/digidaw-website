import { Footer } from "../components/footer";
import Navigation from "../components/navigation";

export const metadata = {
  title: "Welcome || Digidaw",
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
        {children}
      <Footer />
    </>
  );
}
