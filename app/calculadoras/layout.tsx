import Header from "../Header";

export default function CalculadorasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <footer className="bg-brand-deep py-10 text-center text-sm text-sky-100">
        <div className="mx-auto max-w-6xl px-6">
          <p className="font-semibold tracking-wide text-white">
            PRÁTICA · SOLUÇÕES EMPRESARIAIS
          </p>
          <p className="mt-2 text-sky-200/80">
            © 2025 — Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
