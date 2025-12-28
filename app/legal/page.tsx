import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";
import { Container } from "@/app/components/ui/Container";

export const metadata = {
  title: "Legal Notice | Yogetsu Akasaka",
  description:
    "Legal notice based on the Act on Specified Commercial Transactions (特定商取引法に基づく表記)",
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="py-4 border-b border-border last:border-b-0">
      <h3 className="text-sm font-medium text-primary mb-2">{title}</h3>
      <div className="text-muted text-sm leading-relaxed">{children}</div>
    </div>
  );
}

export default function LegalPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            {/* Japanese Section */}
            <section className="mb-16">
              <h1 className="text-3xl md:text-4xl font-light mb-2">
                特定商取引法に基づく表記
              </h1>
              <p className="text-muted text-sm mb-8">
                Legal Notice Based on the Act on Specified Commercial
                Transactions
              </p>

              <div className="bg-surface rounded-2xl p-6 md:p-8 border border-border">
                <Section title="ショップ名 / Shop Name">
                  YOGETSU AKASAKA OFFICIAL WEBSITE
                </Section>

                <Section title="販売業者 / Seller">赤坂陽一</Section>

                <Section title="運営統括責任者名 / Operation Manager">
                  赤坂陽一
                </Section>

                <Section title="所在地 / Address">
                  〒158-0081
                  <br />
                  東京都世田谷区深沢6-12-12 浅見ハウス103
                  <br />
                  <span className="text-xs text-muted/60">
                    6-12-12-103 Fukazawa, Setagaya-ku, Tokyo 158-0081, Japan
                  </span>
                </Section>

                <Section title="電話番号 / Phone">090-5528-3124</Section>

                <Section title="メールアドレス / Email">
                  <a
                    href="mailto:yogetsuakasaka@gmail.com"
                    className="text-primary hover:underline"
                  >
                    yogetsuakasaka@gmail.com
                  </a>
                </Section>

                <Section title="ホームページURL / Website">
                  <a
                    href="https://www.yogetsuakasaka.com"
                    className="text-primary hover:underline"
                  >
                    https://www.yogetsuakasaka.com
                  </a>
                </Section>
              </div>
            </section>

            {/* Payment & Fees Section */}
            <section className="mb-16">
              <h2 className="text-2xl font-light mb-6">
                商品代金以外の必要料金
              </h2>
              <p className="text-sm text-muted/80 mb-4">
                Additional Fees Beyond Product Price
              </p>

              <div className="bg-surface rounded-2xl p-6 md:p-8 border border-border">
                <p className="text-muted text-sm mb-6">
                  商品はすべてデジタルコンテンツのため、配送料は発生いたしません。
                  <br />
                  <span className="text-muted/60">
                    As all products are digital content, no shipping fees will
                    be charged.
                  </span>
                </p>

                <h3 className="text-sm font-medium text-primary mb-4">
                  決済手数料 / Payment Processing Fees (KOMOJU)
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted">
                  <div>au PAY: 3.5%〜</div>
                  <div>Bank Transfer / 銀行振込: 2.75%〜</div>
                  <div>Convenience Store / コンビニ決済: 2.75%〜</div>
                  <div>Credit/Debit Card: 3.25%〜</div>
                  <div>Mobile Payment: 6.6%〜</div>
                  <div>Pay Later (Paidy) / あと払い: 3.5%〜</div>
                  <div>Pay-easy: 2.75%〜</div>
                  <div>Rakuten Pay / 楽天ペイ: 4.4%〜</div>
                  <div>Smartphone Payment: 3.5%〜</div>
                </div>

                <p className="text-xs text-muted/60 mt-4">
                  ※決済手数料は、決済方法により異なります。ご利用の際に、最終金額をご確認ください。
                  <br />
                  *Payment processing fees vary depending on the payment method.
                </p>
              </div>
            </section>

            {/* Delivery & Payment Terms */}
            <section className="mb-16">
              <h2 className="text-2xl font-light mb-6">
                商品の提供・お支払いについて
              </h2>
              <p className="text-sm text-muted/80 mb-4">
                Product Delivery & Payment Terms
              </p>

              <div className="bg-surface rounded-2xl p-6 md:p-8 border border-border space-y-6">
                <Section title="商品の提供方法 / Product Delivery Method">
                  商品の受け取りは、ダウンロードリンクの送付、またはアカウントへのアクセス権付与を通じて行います。具体的な提供方法については、ご購入後にメールにてご案内いたします。
                  <br />
                  <span className="text-muted/60">
                    Products will be delivered through download links or by
                    granting access rights to your account. Specific delivery
                    methods will be explained via email after purchase.
                  </span>
                </Section>

                <Section title="販売価格 / Sales Price">
                  各商品・サービスページに記載しています。
                  <br />
                  <span className="text-muted/60">
                    Listed on each product and service page.
                  </span>
                </Section>

                <Section title="支払方法 / Payment Methods">
                  クレジットカード決済、銀行振込など各種対応しています。詳細は各商品ページをご参照ください。
                  <br />
                  <span className="text-muted/60">
                    Credit card payment, bank transfer, and various other
                    methods are available.
                  </span>
                </Section>

                <Section title="支払期限 / Payment Deadline">
                  <ul className="space-y-1">
                    <li>
                      クレジットカード / Credit Card: 決済時（カード会社により異なります）
                    </li>
                    <li>
                      銀行振込 / Bank Transfer: ご注文後7日以内 / Within 7 days
                    </li>
                    <li>
                      コンビニ決済 / Convenience Store: ご注文後3日以内 / Within
                      3 days
                    </li>
                  </ul>
                </Section>

                <Section title="引渡し時期 / Delivery Time">
                  デジタルコンテンツは決済確認後、即時ダウンロード可能となります。
                  <br />
                  <span className="text-muted/60">
                    Digital content will be available for immediate download
                    after payment confirmation.
                  </span>
                </Section>
              </div>
            </section>

            {/* Returns & Disclaimer */}
            <section className="mb-16">
              <h2 className="text-2xl font-light mb-6">返品・免責事項</h2>
              <p className="text-sm text-muted/80 mb-4">
                Returns & Disclaimer
              </p>

              <div className="bg-surface rounded-2xl p-6 md:p-8 border border-border space-y-6">
                <Section title="返品・交換 / Returns and Exchanges">
                  イベントチケット、デジタルコンテンツは性質上、原則として返品・交換は承っておりません。万が一、コンテンツに不具合がある場合は、お問い合わせフォームよりご連絡ください。
                  <br />
                  <span className="text-muted/60">
                    Due to the nature of digital content, returns and exchanges
                    are not possible. If there are any issues with the content,
                    please contact us through the inquiry form.
                  </span>
                </Section>

                <Section title="表現および商品に関する注意書き / Disclaimer">
                  当サイトに掲載している情報は、最新の内容を心がけていますが、商品やサービスの内容、仕様、外観などは予告なく変更する場合があります。また、提供内容や成果には個人差があり、効果を保証するものではありません。
                  <br />
                  <span className="text-muted/60">
                    While we strive to provide the most up-to-date information,
                    product and service content, specifications, and appearance
                    may change without prior notice. Results and effectiveness
                    may vary between individuals and are not guaranteed.
                  </span>
                </Section>

                <Section title="個人情報の取り扱い / Handling of Personal Information">
                  当社は、お客様の個人情報を適切に管理し、法令に基づき開示が必要な場合を除き、第三者に開示または提供することはありません。
                  <br />
                  <span className="text-muted/60">
                    We properly manage customer personal information and will
                    not disclose or provide it to third parties except when
                    disclosure is required by law.
                  </span>
                </Section>
              </div>
            </section>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
