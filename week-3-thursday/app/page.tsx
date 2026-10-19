
"use client";

import { useState, type FormEvent } from "react";

type Property = {
  id: number;
  name: string;
  location: string;
  status: string;
};

type Tenant = {
  id: number;
  name: string;
  property: string;
  email: string;
  status: string;
};

type Request = {
  id: number;
  title: string;
  property: string;
  priority: string;
  status: string;
};

const properties: Property[] = [
  { id: 1, name: "Sunrise Apartments", location: "Bole", status: "Active" },
  { id: 2, name: "Green Villa", location: "CMC", status: "Active" },
  { id: 3, name: "City Residence", location: "Kazanchis", status: "Occupied" },
];

const tenants: Tenant[] = [
  { id: 1, name: "Abel Tesfaye", property: "Sunrise Apartments", email: "abel@example.com", status: "Active" },
  { id: 2, name: "Sara Bekele", property: "Green Villa", email: "sara@example.com", status: "Active" },
  { id: 3, name: "Daniel Alemu", property: "City Residence", email: "daniel@example.com", status: "Inactive" },
];

const initialRequests: Request[] = [
  { id: 1, title: "Water leakage", property: "Sunrise Apartments", priority: "High", status: "Pending" },
  { id: 2, title: "Broken window", property: "Green Villa", priority: "Medium", status: "In Progress" },
  { id: 3, title: "Electrical repair", property: "City Residence", priority: "High", status: "Completed" },
];

const pages = ["Dashboard", "Properties", "Tenants", "Maintenance"];

export default function Home() {
  const [selectedPage, setSelectedPage] = useState("Dashboard");
  const [search, setSearch] = useState("");
  const [requests, setRequests] = useState<Request[]>(initialRequests);
  const [showForm, setShowForm] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newProperty, setNewProperty] = useState(properties[0].name);
  const [newPriority, setNewPriority] = useState("Medium");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const filteredProperties = properties.filter((property) =>
    `${property.name} ${property.location}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const openRequests = requests.filter(
    (request) => request.status !== "Completed"
  ).length;

  function addRequest(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!newTitle.trim()) {
      setError("Please enter a maintenance issue title.");
      return;
    }

    if (newTitle.trim().length < 3) {
      setError("The title must contain at least 3 characters.");
      return;
    }

    const request: Request = {
      id: Date.now(),
      title: newTitle.trim(),
      property: newProperty,
      priority: newPriority,
      status: "Pending",
    };

    setRequests((previous) => [...previous, request]);
    setNewTitle("");
    setNewPriority("Medium");
    setShowForm(false);
    setSuccess("Maintenance request created successfully!");
  }

  function completeRequest(id: number) {
    setRequests((previous) =>
      previous.map((request) =>
        request.id === id
          ? { ...request, status: "Completed" }
          : request
      )
    );
    setSuccess("Maintenance request marked as completed.");
  }

  function navigate(page: string) {
    setSelectedPage(page);
    setError("");
    setSuccess("");
    setShowForm(false);
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 md:flex">
      {/* Sidebar */}
      <aside className="bg-slate-900 p-6 text-white md:min-h-screen md:w-64 md:shrink-0">
        <h1 className="mb-2 text-2xl font-bold">PropertyHub</h1>
        <p className="mb-8 text-sm text-slate-400">Management System</p>

        <nav className="flex flex-wrap gap-2 md:flex-col" aria-label="Main navigation">
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => navigate(page)}
              aria-current={selectedPage === page ? "page" : undefined}
              className={`rounded-lg px-4 py-3 text-left transition ${
                selectedPage === page
                  ? "bg-blue-600 text-white"
                  : "text-slate-300 hover:bg-slate-700 hover:text-white"
              }`}
            >
              {page}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="min-w-0 flex-1 p-5 sm:p-8 md:p-10">
        <header className="mb-8">
          <h2 className="text-3xl font-bold">{selectedPage}</h2>
          <p className="mt-2 text-gray-500">
            Welcome to your Property Management System
          </p>
        </header>

        {/* Feedback Messages */}
        {error && (
          <div role="alert" className="mb-5 rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
            {error}
          </div>
        )}

        {success && (
          <div role="status" className="mb-5 rounded-lg border border-green-200 bg-green-50 p-4 text-green-700">
            {success}
          </div>
        )}

        {/* Dashboard */}
        {selectedPage === "Dashboard" && (
          <>
            <div className="mb-8 grid gap-5 sm:grid-cols-3">
              {[
                { title: "Total Properties", value: properties.length },
                { title: "Active Tenants", value: tenants.filter(t => t.status === "Active").length },
                { title: "Open Requests", value: openRequests },
              ].map((stat) => (
                <div key={stat.title} className="rounded-xl bg-white p-6 shadow-sm">
                  <p className="text-sm text-gray-500">{stat.title}</p>
                  <h3 className="mt-3 text-3xl font-bold">{stat.value}</h3>
                </div>
              ))}
            </div>

            <section className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="mb-5 text-xl font-semibold">Recent Properties</h3>

              {properties.map((property) => (
                <div key={property.id} className="flex flex-wrap items-center justify-between gap-3 border-b py-4 last:border-0">
                  <div>
                    <h4 className="font-semibold">{property.name}</h4>
                    <p className="text-sm text-gray-500">{property.location}</p>
                  </div>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700">
                    {property.status}
                  </span>
                </div>
              ))}
            </section>
          </>
        )}

        {/* Properties */}
        {selectedPage === "Properties" && (
          <section className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="mb-5 text-xl font-semibold">All Properties</h3>

            <input
              type="search"
              aria-label="Search properties"
              placeholder="Search by name or location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="mb-5 w-full rounded-lg border border-gray-300 p-3 outline-blue-500"
            />

            {filteredProperties.length === 0 ? (
              <p className="py-6 text-center text-gray-500">
                No properties found. Try another search.
              </p>
            ) : (
              filteredProperties.map((property) => (
                <div key={property.id} className="flex flex-wrap items-center justify-between gap-3 border-b py-4 last:border-0">
                  <div>
                    <h4 className="font-semibold">{property.name}</h4>
                    <p className="text-sm text-gray-500">{property.location}</p>
                  </div>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                    {property.status}
                  </span>
                </div>
              ))
            )}
          </section>
        )}

        {/* Tenants */}
        {selectedPage === "Tenants" && (
          <section className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="mb-5 text-xl font-semibold">Tenant Directory</h3>

            {tenants.map((tenant) => (
              <div key={tenant.id} className="flex flex-wrap items-center justify-between gap-4 border-b py-4 last:border-0">
                <div>
                  <h4 className="font-semibold">{tenant.name}</h4>
                  <p className="text-sm text-gray-500">{tenant.property}</p>
                  <p className="text-sm text-gray-500">{tenant.email}</p>
                </div>
                <span className={`rounded-full px-3 py-1 text-sm ${
                  tenant.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-200 text-gray-600"
                }`}>
                  {tenant.status}
                </span>
              </div>
            ))}
          </section>
        )}

        {/* Maintenance */}
        {selectedPage === "Maintenance" && (
          <section className="rounded-xl bg-white p-6 shadow-sm">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <h3 className="text-xl font-semibold">Maintenance Requests</h3>

              <button
                onClick={() => {
                  setShowForm(!showForm);
                  setError("");
                  setSuccess("");
                }}
                className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
              >
                {showForm ? "Cancel" : "+ New Request"}
              </button>
            </div>

            {/* Add Request Form */}
            {showForm && (
              <form onSubmit={addRequest} noValidate className="mb-8 space-y-4 rounded-xl border border-gray-200 bg-gray-50 p-5">
                <h4 className="text-lg font-semibold">Create Maintenance Request</h4>

                <div>
                  <label htmlFor="issue" className="mb-2 block text-sm font-medium">
                    Issue Title
                  </label>
                  <input
                    id="issue"
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="Example: Broken door"
                    maxLength={100}
                    className="w-full rounded-lg border border-gray-300 bg-white p-3"
                  />
                </div>

                <div>
                  <label htmlFor="property" className="mb-2 block text-sm font-medium">
                    Property
                  </label>
                  <select
                    id="property"
                    value={newProperty}
                    onChange={(e) => setNewProperty(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 bg-white p-3"
                  >
                    {properties.map((property) => (
                      <option key={property.id} value={property.name}>
                        {property.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="priority" className="mb-2 block text-sm font-medium">
                    Priority
                  </label>
                  <select
                    id="priority"
                    value={newPriority}
                    onChange={(e) => setNewPriority(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 bg-white p-3"
                  >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
                >
                  Submit Request
                </button>
              </form>
            )}

            {/* Request List */}
            {requests.map((request) => (
              <div key={request.id} className="flex flex-wrap items-center justify-between gap-4 border-b py-5 last:border-0">
                <div>
                  <h4 className="font-semibold">{request.title}</h4>
                  <p className="mt-1 text-sm text-gray-500">{request.property}</p>

                  <p className="mt-2 text-sm">
                    Priority:{" "}
                    <span className={`font-medium ${
                      request.priority === "High"
                        ? "text-red-600"
                        : request.priority === "Medium"
                        ? "text-orange-600"
                        : "text-green-600"
                    }`}>
                      {request.priority}
                    </span>
                  </p>

                  <p className="mt-1 text-sm text-blue-600">
                    Status: {request.status}
                  </p>
                </div>

                {request.status !== "Completed" && (
                  <button
                    onClick={() => completeRequest(request.id)}
                    className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
                  >
                    Mark Completed
                  </button>
                )}
              </div>
            ))}
          </section>
        )}

        <footer className="mt-10 text-center text-sm text-gray-400">
          PropertyHub — Mini Front-End Application
        </footer>
      </main>
    </div>
  );
}
