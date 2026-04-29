export default function RiskDisclosurePage() {
  return (
    <main className="min-h-screen bg-background p-6 md:p-10">
      <article className="mx-auto max-w-3xl bg-white rounded-2xl border border-border p-6 md:p-8 space-y-4">
        <h1 className="text-2xl font-semibold">투자위험고지</h1>
        <p className="text-sm text-muted-foreground">
          모든 금융투자는 원금 손실 가능성이 있으며 과거 수익률이 미래 수익을 보장하지 않습니다.
        </p>
        <section className="space-y-2 text-sm leading-6">
          <p>1. 주식, 파생, 가상자산 거래는 시장 변동성으로 인해 큰 손실이 발생할 수 있습니다.</p>
          <p>2. 레버리지 상품은 손익 변동 폭이 확대되어 손실 위험이 더 큽니다.</p>
          <p>3. 투자 의사결정은 사용자 본인의 판단과 책임 하에 이루어져야 합니다.</p>
        </section>
      </article>
    </main>
  );
}
