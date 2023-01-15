import { Layout } from "@/components/Layout";

export default function DynamicRouting() {
  return (
    <Layout>
      <section>
        <h2>動的ルーティング</h2>
        <p>動的ルーディングを色々試してみる</p>
      </section>
      <section>
        <h2>idによって動的に生成されたルートページ一覧</h2>
        <p>
          動的に作られるページ<br />
          モックデータを準備してidを元にページの生成をする
        </p>
        {/* TODO: 2023/01/16(月)
          * * 動的ルートを作成するためにモックデータを作成
          * * JSONデータで、構成は {id: number, title: string, text: string} でやってみる
         */}
      </section>
    </Layout>
  )
}