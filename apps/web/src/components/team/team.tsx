'use client';

import { useState } from 'react';
import {
  Plus,
  Search,
  Filter,
  Grid3X3,
  Square,
  Maximize2,
  Trash2,
  MoreHorizontal,
  UserPlus,
  Mail,
  Shield,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ChevronDown
} from 'lucide-react';

// Mock data for team members
const mockTeamMembers = [
  {
    id: '1',
    name: 'Tobiloba Asu-Johnson',
    email: 'tobi@vaxen.global',
    role: 'OWNER',
    dateAdded: '2024-10-28T14:18:11Z',
    avatar: '/avatars/tobi.jpg',
    status: 'active'
  },
  {
    id: '2',
    name: 'Alexandra Martinez',
    email: 'alexandra@vaxen.finance',
    role: 'MANAGER',
    dateAdded: '2024-10-28T15:30:15Z',
    avatar: '/avatars/alexandra.jpg',
    status: 'active'
  },
  {
    id: '3',
    name: 'Sarah Johnson',
    email: 'sarah@vaxen.finance',
    role: 'ADMIN',
    dateAdded: '2024-10-25T09:15:30Z',
    avatar: '/avatars/sarah.jpg',
    status: 'active'
  },
  {
    id: '4',
    name: 'Michael Chen',
    email: 'michael@vaxen.finance',
    role: 'USER',
    dateAdded: '2024-10-20T16:45:22Z',
    avatar: '/avatars/michael.jpg',
    status: 'pending'
  },
  {
    id: '5',
    name: 'Emily Rodriguez',
    email: 'emily@vaxen.finance',
    role: 'USER',
    dateAdded: '2024-10-18T11:30:45Z',
    avatar: '/avatars/emily.jpg',
    status: 'active'
  }
];

// Mock data for pending approvals
const mockPendingApprovals = [
  {
    id: '1',
    name: 'Alex Thompson',
    email: 'alex@vaxen.finance',
    role: 'USER',
    dateRequested: '2024-10-29T10:15:30Z',
    invitedBy: 'Sarah Johnson',
    avatar: '/avatars/alex.jpg'
  },
  {
    id: '2',
    name: 'Lisa Wang',
    email: 'lisa@vaxen.finance',
    role: 'ADMIN',
    dateRequested: '2024-10-28T14:22:15Z',
    invitedBy: 'Tobiloba Asu-Johnson',
    avatar: '/avatars/lisa.jpg'
  }
];

export function Team() {
  const [activeTab, setActiveTab] = useState('members');
  const [searchTerm, setSearchTerm] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter members based on search term
  const filteredMembers = mockTeamMembers.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filteredMembers.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentMembers = filteredMembers.slice(startIndex, endIndex);

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'OWNER':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'MANAGER':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'ADMIN':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'USER':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Team Management</h1>
          <p className="text-sm text-slate-300 mt-1">
            Manage your team members and their permissions
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 bg-slate-800/50 p-1 rounded-lg w-fit">
        <button
          onClick={() => setActiveTab('members')}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
            activeTab === 'members'
              ? 'gradient-primary text-white shadow-lg'
              : 'text-slate-300 hover:text-white hover:bg-slate-700'
          }`}
        >
          Members
        </button>
        <button
          onClick={() => setActiveTab('pending')}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
            activeTab === 'pending'
              ? 'gradient-primary text-white shadow-lg'
              : 'text-slate-300 hover:text-white hover:bg-slate-700'
          }`}
        >
          Pending Approvals
          {mockPendingApprovals.length > 0 && (
            <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              {mockPendingApprovals.length}
            </span>
          )}
        </button>
      </div>

      {/* Content based on active tab */}
      {activeTab === 'members' && (
        <div className="space-y-6">
          {/* Members Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">Members</h2>
            <div className="flex items-center space-x-3">
              <button className="flex items-center px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors">
                <UserPlus className="h-4 w-4 mr-2" />
                Add member
              </button>
              <div className="flex items-center space-x-2">
                <button className="p-2 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-700 transition-colors">
                  <Search className="h-4 w-4" />
                </button>
                <button className="p-2 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-700 transition-colors">
                  <Filter className="h-4 w-4" />
                </button>
                <button className="p-2 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-700 transition-colors">
                  <Grid3X3 className="h-4 w-4" />
                </button>
                <button className="p-2 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-700 transition-colors">
                  <Square className="h-4 w-4" />
                </button>
                <button className="p-2 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-700 transition-colors">
                  <Maximize2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search members..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Members Table */}
          <div className="gradient-card border border-slate-600 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="gradient-primary">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium text-white">Name</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-white">Email</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-white">Role</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-white">Date Added</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-white">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  {currentMembers.map((member) => (
                    <tr key={member.id} className="hover:bg-slate-800/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center">
                            <span className="text-sm font-medium text-white">
                              {member.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-white">{member.name}</div>
                            <div className="text-xs text-slate-400 capitalize">{member.status}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-300">{member.email}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getRoleColor(member.role)}`}>
                          {member.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-300">
                        {formatDate(member.dateAdded)}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <button className="p-1 text-slate-400 hover:text-red-400 transition-colors">
                            <Trash2 className="h-4 w-4" />
                          </button>
                          <button className="p-1 text-slate-400 hover:text-white transition-colors">
                            <MoreHorizontal className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-slate-300">Rows per page</span>
              <select
                value={rowsPerPage}
                onChange={(e) => setRowsPerPage(Number(e.target.value))}
                className="px-2 py-1 bg-slate-800 border border-slate-600 rounded text-white text-sm"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-slate-300">
                {startIndex + 1}-{Math.min(endIndex, filteredMembers.length)} of {filteredMembers.length}
              </span>
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="p-1 text-slate-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="p-1 text-slate-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'pending' && (
        <div className="space-y-6">
          {/* Pending Approvals Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">Pending Approvals</h2>
            <div className="flex items-center space-x-2">
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                Approve All
              </button>
              <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                Reject All
              </button>
            </div>
          </div>

          {/* Pending Approvals Table */}
          <div className="gradient-card border border-slate-600 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="gradient-primary">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium text-white">Name</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-white">Email</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-white">Role</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-white">Invited By</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-white">Date Requested</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-white">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  {mockPendingApprovals.map((approval) => (
                    <tr key={approval.id} className="hover:bg-slate-800/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center">
                            <span className="text-sm font-medium text-white">
                              {approval.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div className="text-sm font-medium text-white">{approval.name}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-300">{approval.email}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getRoleColor(approval.role)}`}>
                          {approval.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-300">{approval.invitedBy}</td>
                      <td className="px-6 py-4 text-sm text-slate-300">
                        {formatDate(approval.dateRequested)}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <button className="px-3 py-1 bg-green-600 text-white text-xs rounded hover:bg-green-700 transition-colors">
                            Approve
                          </button>
                          <button className="px-3 py-1 bg-red-600 text-white text-xs rounded hover:bg-red-700 transition-colors">
                            Reject
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {mockPendingApprovals.length === 0 && (
            <div className="text-center py-12">
              <div className="text-slate-400 text-lg">No pending approvals</div>
              <div className="text-slate-500 text-sm mt-2">All team member requests have been processed</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}