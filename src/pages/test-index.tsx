/* eslint-disable react/no-unescaped-entities */
import { Layout } from "@/components/Layout"

export default function TestIndex() {
  return (
    <Layout>
      <section>
        <h2>実験</h2>
        <p>appディレクトリがあるときに、pagesディレクトリで「index.tsx」を作成</p>
        <p>このとき、ルーティングはどうなるかな…？</p>
        <p>※「app/page.tsx」が「/」になっている</p>
      </section>
      <section>
        <h2>結果</h2>
        <p>
          error - Conflicting app and page file was found, please remove the conflicting files to continue:<br/>
          error - "src/pages/index.tsx" - "src/app/page.tsx"
        </p>
        <p>app/page.tsxがルーティングになっていて、コンフリクトしているよ、というエラーが表示された</p>
        <p>「pages/index.tsx」のままでは使えないので、「test-index.tsx」に変えておく</p>
      </section>
    </Layout>
  )
}