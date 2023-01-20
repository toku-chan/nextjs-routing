import Link from "next/link";
import { Layout } from "@/components/Layout";

export const getStaticProps = async() => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  return {
    props: {
      data
    }
  }
};

export default function UserName({
  data
}) {
  return (
    <Layout>
      <h1>UserNameごとのリンクに遷移</h1>
      <p>本当はusernameでURLを作りたかったけど、できなかった</p>
      <p>idでないとデータの取得ができなかったため。多分usernameでのデータが準備されていないからだと思う。</p>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <p>{item.name}</p>
            <ul>
              <li>
                <Link href={`/${item.id}/about`}>TOP（SSR）</Link>
              </li>
              <li>
                <Link href={`/${item.id}/address`}>住所（SSG）</Link>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
