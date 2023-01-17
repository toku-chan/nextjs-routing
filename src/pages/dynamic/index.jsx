// TODO: 型定義していないので次回行う。型エラーを回避するためjsxにした。
import { Layout } from "@/components/Layout";
import Link from "next/link";

export const getStaticProps = async() => {
  // ここはサーバー側で実行される
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  // returnするものはクライアント側から見えるので、重要な情報とかは渡さないようにする
  return {
    props: {
      data
    }
  }
}

export default function DynamicRouting({ data }) {
  return (
    <Layout>
      <section>
        <h2>動的ルーティング</h2>
        <p>動的ルーディングを色々試してみる</p>
      </section>
      <section>
        <h2>idによって動的に生成されたルートページ一覧</h2>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <Link href={`/dynamic/${item.id}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}