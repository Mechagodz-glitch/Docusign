'use client';
import { AppShell } from '../../components/AppShell';
import { Card } from '@pandadoc-clone/ui';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const stats = [
  { label: 'Drafts', value: 12 },
  { label: 'Sent', value: 18 },
  { label: 'Viewed', value: 27 },
  { label: 'Completed', value: 9 },
  { label: 'Expired', value: 3 },
];

export default function DashboardPage() {
  const chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Documents',
        data: [5, 9, 6, 10, 14, 8, 12],
        borderColor: '#006699',
        tension: 0.4,
      },
    ],
  };

  return (
    <AppShell>
      <div className="grid gap-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {stats.map((stat) => (
            <Card key={stat.label} className="text-sm">
              <div className="text-gray-500">{stat.label}</div>
              <div className="text-2xl font-semibold">{stat.value}</div>
            </Card>
          ))}
        </div>
        <Card>
          <h2 className="font-semibold mb-2">Weekly activity</h2>
          <Line data={chartData} />
        </Card>
        <Card>
          <h2 className="font-semibold mb-2">Recently updated</h2>
          <ul className="space-y-2 text-sm">
            <li>Proposal for Delta Corp · Updated 2h ago</li>
            <li>Master Service Agreement · Updated 4h ago</li>
            <li>Onboarding Packet · Updated yesterday</li>
          </ul>
        </Card>
      </div>
    </AppShell>
  );
}
