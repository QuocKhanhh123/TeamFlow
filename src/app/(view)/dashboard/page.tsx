"use client"
import useEffect from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
import { DashboardHeader} from '@/app/components/dashboard/dashboard-header'
import { DashboardShell } from '@/app/components/dashboard/dashboard-shell'
import { ProjectList } from '@/app/components/dashboard/project-list'
export default function Dashboard() {
    return (
       <DashboardShell>
      <DashboardHeader heading="Dự án" text="Quản lý tất cả các dự án của bạn.">
      </DashboardHeader>
      <div className="grid gap-4">
        <ProjectList />
      </div>
    </DashboardShell>
    )
}
