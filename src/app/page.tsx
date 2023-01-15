import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section>
        <h1>ディレクトリ説明</h1>
        <p>next.jsのルーティングについて、もう少し深ぼって学ぶ</p>
        <a href="https://nextjs.org/docs/routing/introduction" target="_blank" rel="noreferrer">Next.js公式 Routingが書かれているドキュメント</a>
      </section>
      <section>
        <h2>気になったこと</h2>
        <p>実際に手を動かして、結果を確認してみる</p>
        <ul>
          <li>
            <Link href="/test-index">
              app/pageが存在するとき、pagesディレクトリにondex.tsxを作成したら、ルーティングはどうなるのか？
            </Link>
          </li>
        </ul>
      </section>
    </main>
  )
}
