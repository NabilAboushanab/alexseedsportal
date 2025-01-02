// استيراد الوحدات المطلوبة
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');  // إضافة CORS

// تهيئة تطبيق Express
const app = express();
const prisma = new PrismaClient();

// إضافة Middleware لتحليل البيانات بتنسيق JSON
app.use(express.json());

// إعدادات CORS
app.use(cors({
  origin: 'http://localhost:3000', // استبدل "example.com" بالنطاق الخاص بك
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

// تعريف مسارات API

// المسار لجلب جميع المستخدمين
app.get('/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      include: { posts: true } // تضمين المشاركات المتعلقة بكل مستخدم
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching users' });
  }
});

// المسار لإنشاء مستخدم جديد
app.post('/users', async (req, res) => {
  const { name, email } = req.body;
  try {
    const newUser = await prisma.user.create({
      data: {
        name,
        email
      }
    });
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Error creating user' });
  }
});

// المسار لجلب مستخدم معين بناءً على ID
app.get('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(id) },
      include: { posts: true } // تضمين المشاركات المتعلقة بهذا المستخدم
    });
    res.json(user);
  } catch (error) {
    res.status(404).json({ error: 'User not found' });
  }
});

// المسار لإنشاء مشاركة جديدة لمستخدم
app.post('/users/:id/posts', async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        authorId: parseInt(id) // ربط المشاركة بالمستخدم بناءً على ID
      }
    });
    res.json(newPost);
  } catch (error) {
    res.status(500).json({ error: 'Error creating post' });
  }
});

// المسار لجلب جميع المشاركات
app.get('/posts', async (req, res) => {
  try {
    const posts = await prisma.post.findMany({
      include: { author: true } // تضمين بيانات الكاتب لكل مشاركة
    });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching posts' });
  }
});

// تشغيل الخادم
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
