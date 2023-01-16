import { Layout } from "@/components/Layout";

type Props = {
  data: {
    posts: {
      id: number;
      title: string;
      text: string;
    }[]
  }
}

export const getStaticProps = async() => {
  const response = await fetch('http://localhost:3000/api/mockData');
  const data = await response.json();

  return {
    props: {
      data
    }
  }
}

export default function DynamicRouting({ data }: Props) {
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
        <ul>
          {data.posts.map((item) => (
            <li key={item.id}>
              <p>{item.title}</p>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}