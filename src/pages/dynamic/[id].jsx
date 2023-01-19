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

// getStaticProps の引数 context について理解を深めたい
// context はいくつか持っている
// context.params = 動的ルートを使用するためのパラメータを持っている
// context.preview = これは true または undefined を持っていて、true の時にpreviewモードになる ← preview mode がよくわかっていない
// context.previewData = setPreviewData によって設定されたデータが含まれている ← preview mode がよくわかっていない
// context.locale = 有効なlocaleが含まれている（有効な場合） ← locale が有効な時ってなに？
// context.locales = サポートされているlocale全てが含まれている（有効な場合） ← locale が有効な時ってなに？
// context.defaultLocale = 構成されたlocaleが含まれている（有効な場合） ← locale が有効な時ってなに？
export const getStaticProps = async(ctx) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${ctx.params.id}`);
  const data = await response.json();

  if(data.name === 'Leanne Graham') {
    return {
      props: {
        notFound: true
      }
    }
  }

  // returnするものはクライアント側から見えるので、重要な情報とかは渡さないようにする
  return {
    props: {
      data
    }
  }
}

export const Custom404 = () => {
  return <h1>404 - Page Not Found</h1>
}

export default function Id(props) {

  if(!props.data) {
    return (
      <>
        <Custom404 />
        <Link href="/dynamic">dynamicのルートページに戻る</Link>
      </>
    )
  }

  return (
    <div>
      <p>{props.data.name}</p>
      <Link href="/dynamic">dynamicのルートページに戻る</Link>
    </div>
  )
}