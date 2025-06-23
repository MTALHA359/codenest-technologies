'use client';

import { useEffect, useState } from "react";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({ title: "", description: "", technologies: "", imageUrl: "", liveUrl: "" });

  useEffect(() => {
    fetch("/api/projects")
      .then(res => res.json())
      .then(setProjects);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const techArray = form.technologies.split(",").map(t => t.trim());

    const res = await fetch("/api/projects", {
      method: "POST",
      body: JSON.stringify({ ...form, technologies: techArray }),
    });

    const newProject = await res.json();
    setProjects([newProject, ...projects]);
    setForm({ title: "", description: "", technologies: "", imageUrl: "", liveUrl: "" });
  };

  const deleteProject = async (id) => {
    await fetch(`/api/projects/${id}`, { method: "DELETE" });
    setProjects(projects.filter(p => p._id !== id));
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Manage Projects</h2>

      {/* Add New Project Form */}
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6 space-y-2">
        <input type="text" placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="border p-2 w-full" />
        <input type="text" placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="border p-2 w-full" />
        <input type="text" placeholder="Technologies (comma separated)" value={form.technologies} onChange={(e) => setForm({ ...form, technologies: e.target.value })} className="border p-2 w-full" />
        <input type="text" placeholder="Image URL" value={form.imageUrl} onChange={(e) => setForm({ ...form, imageUrl: e.target.value })} className="border p-2 w-full" />
        <input type="text" placeholder="Live URL" value={form.liveUrl} onChange={(e) => setForm({ ...form, liveUrl: e.target.value })} className="border p-2 w-full" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add Project</button>
      </form>

      {/* List All Projects */}
      <div className="grid grid-cols-1 gap-4">
        {projects.map((project) => (
          <div key={project._id} className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tech:</strong> {project.technologies.join(", ")}</p>
            <a href={project.liveUrl} target="_blank" className="text-blue-600 underline">Live Site</a>
            <button onClick={() => deleteProject(project._id)} className="mt-2 bg-red-500 text-white px-2 py-1 rounded">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
