import Header from "../Header";
import SiteFooter from "../components/SiteFooter";
import { CalcPopupProvider } from "./CalcPopup";

export default function CalculadorasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CalcPopupProvider>
      <div className="flex min-h-screen flex-col bg-slate-50">
        <Header />
        <div className="h-20" aria-hidden />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </div>
    </CalcPopupProvider>
  );
}
