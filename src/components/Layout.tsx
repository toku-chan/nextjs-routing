import Link from "next/link"
import React from "react"

export const Layout = ({
  children
}: {
  children: React.ReactNode
}) => (
  <>
    <div>{children}</div>
    <Link href="/">Homeに戻る</Link>
  </>
)