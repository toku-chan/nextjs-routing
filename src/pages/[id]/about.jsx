// あえてServerSidePropsでやってみた
import Link from "next/link";

export const getServerSideProps = async(ctx) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${ctx.params.id}`);
  const data = await response.json();

  return {
    props: {
      data
    }
  }
}

export default function UserAbout({
  data
}) {
  return (
    <section>
      <div key={data.id}>
        <p>{data.name}</p>
        <p>{data.username}</p>
        <p>{data.email}</p>
        <p>{data.phone}</p>
        <p>{data.website}</p>
        <p>{data.company.name}</p>
        <p>{data.company.catchPhrase}</p>
        <p>{data.company.bs}</p>
      </div>
      <Link href="/user-root">usernameのルートページに戻る</Link>
    </section>
  )
}