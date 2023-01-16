const mockData = {
  posts: [
    {id: 1, title: "first", text: "1つ目の動的ぺーじ"},
    {id: 2, title: "second", text: "2つ目の動的ぺーじ"},
    {id: 3, title: "third", text: "3つ目の動的ぺーじ"},
    {id: 4, title: "forth", text: "4つ目の動的ぺーじ"},
  ]
};

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(mockData)
}
