import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma'; // Adjust according to your setup

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    if (req.method === 'GET') {
        try {
            const article = await prisma.article.findUnique({
                where: { id: Number(id) },
            });

            if (!article) {
                return res.status(404).json({ message: 'Article not found' });
            }

            return res.status(200).json(article);
        } catch (error) {
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    return res.setHeader('Allow', ['GET']).status(405).end(`Method ${req.method} Not Allowed`);
}
