// /app/blogs/[slug]/page.jsx
// import blogs from '@/data/blogs';

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default function BlogDetail({ params }) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) return <div>Blog not found</div>;

  return (
    <main className="p-10 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{blog.date}</p>
      <img src={blog.thumbnail} alt={blog.title} className="w-full h-64 object-cover rounded mb-6" />
      <p className="text-lg leading-relaxed">{blog.content}</p>
    </main>
  );
}
