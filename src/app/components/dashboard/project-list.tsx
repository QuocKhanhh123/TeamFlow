"use client"

import Link from "next/link"

const mockProjects = [
  {
    id: "1",
    name: "Website bán hàng",
    description: "Một dự án web bán hàng với React và Tailwind.",
    status: "active",
    taskCount: 8,
  },
  {
    id: "2",
    name: "Ứng dụng quản lý công việc",
    description: "Ứng dụng giúp theo dõi tiến độ dự án cá nhân.",
    status: "completed",
    taskCount: 12,
  },
  {
    id: "3",
    name: "API cho dịch vụ đặt phòng",
    description: "Xây dựng RESTful API với FastAPI.",
    status: "on-hold",
    taskCount: 5,
  },
] as const

function Badge({ children, variant }: { children: React.ReactNode; variant?: "default" | "success" | "secondary" }) {
  const base = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
  const variants = {
    default: "bg-blue-100 text-blue-800",
    success: "bg-green-100 text-green-800",
    secondary: "bg-gray-100 text-gray-800",
  }
  return <span className={`${base} ${variants[variant ?? "default"]}`}>{children}</span>
}

function Button({
  children,
  variant = "default",
  size = "md",
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "ghost"
  size?: "sm" | "md"
}) {
  const base = "inline-flex items-center justify-center rounded-md font-medium transition focus:outline-none"
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    ghost: "bg-transparent hover:bg-gray-100 text-gray-700",
  }
  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
  }

  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  )
}

export function ProjectList() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {mockProjects.map((project) => (
        <div
          key={project.id}
          className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900"
        >
          {/* CardHeader */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <Badge
                variant={
                  project.status === "active"
                    ? "default"
                    : project.status === "completed"
                    ? "success"
                    : "secondary"
                }
              >
                {project.status === "active"
                  ? "Đang hoạt động"
                  : project.status === "completed"
                  ? "Hoàn thành"
                  : "Tạm dừng"}
              </Badge>
            </div>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{project.description}</p>
          </div>

          {/* CardContent */}
          <div className="p-4 pt-2">
            <p className="text-sm text-gray-500 dark:text-gray-400">{project.taskCount} công việc</p>
          </div>

          {/* CardFooter */}
          <div className="p-4 flex justify-between border-t border-gray-200 dark:border-gray-700">
            <Button variant="ghost" size="sm">
              Chỉnh sửa
            </Button>
            <Link href={`/projects/${project.id}`}>
              <Button size="sm">Xem chi tiết</Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}
