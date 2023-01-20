import Link from "next/link";

export const getStaticPaths = async() => {
  // https://jsonplaceholder.typicode.com/
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

  return {
    props: {
      data
    }
  }
}

export default function UserAddress({
  data
}) {
  return (
    <section>
      <div key={data.id}>
        <p>{data.address.street}</p>
        <p>{data.address.suite}</p>
        <p>{data.address.city}</p>
        <p>{data.address.zipcode}</p>
        <p>{data.address.geo.lat}</p>
        <p>{data.address.geo.lng}</p>
      </div>
      <Link href="/user-root">usernameのルートページに戻る</Link>
    </section>
  )
}