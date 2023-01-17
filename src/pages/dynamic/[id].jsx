// TODO: 型定義していないので次回行う。型エラーを回避するためjsxにした。
import Link from "next/link";

export const getStaticPaths = async() => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  const paths = data.map((item) => ({
    params: {
      id: item.id.toString() //文字列でないとエラーになる
    }
  }));

  return {
    paths,
    fallback: false
  }
}


export const getStaticProps = async(ctx) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${ctx.params.id}`);
  const data = await response.json();

  // returnするものはクライアント側から見えるので、重要な情報とかは渡さないようにする
  return {
    props: {
      data
    }
  }
}

export default function Id(props) {
  return (
    <div>
      <p>{props.data.name}</p>
      <Link href="/dynamic">dynamicのルートページに戻る</Link>
    </div>
  )
}