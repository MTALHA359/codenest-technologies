import blogs from '../data/blogs'; // use correct path
import Link from 'next/link';

export default function BlogPage() {
  return (
    <main className="p-10 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Latest Blogs</h1>
      <div className="space-y-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="border p-4 rounded shadow-md">
            <img src={blog.thumbnail} alt={blog.title} className="w-full h-52 object-cover rounded" />
            <div className="mt-4">
              <h2 className="text-2xl font-semibold">{blog.title}</h2>
              <p className="text-sm text-gray-500">
                By {blog.author} • {blog.date} • {blog.readingTime}
              </p>
              <p className="mt-2 text-sm text-gray-600">Category: {blog.category}</p>
              <div className="mt-1">
                {blog.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-gray-200 px-2 py-1 rounded mr-2">{tag}</span>
                ))}
              </div>
              <Link href={`/blogs/${blog.slug}`} className="text-blue-600 mt-3 inline-block">
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
