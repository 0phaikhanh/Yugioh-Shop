// src/components/Statistics.js
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Statistics = () => {
    const [revenue, setRevenue] = useState(0);
    const [chartData, setChartData] = useState({});
    
    useEffect(() => {
        // Giả lập dữ liệu doanh thu (thay thế bằng API thực tế nếu có)
        const revenueData = [
            { date: '2024-11-01', amount: 100000 },
            { date: '2024-11-02', amount: 150000 },
            { date: '2024-11-03', amount: 120000 },
        ];

        setRevenue(revenueData.reduce((acc, data) => acc + data.amount, 0)); // Tính tổng doanh thu

        // Dữ liệu biểu đồ (Doanh thu theo ngày)
        setChartData({
            labels: revenueData.map(data => data.date),
            datasets: [
                {
                    label: 'Doanh thu theo ngày',
                    data: revenueData.map(data => data.amount),
                    borderColor: 'rgba(75,192,192,1)',
                    fill: false,
                },
            ],
        });
    }, []);

    return (
        <div className="statistics">
            <h2>Thống kê doanh thu</h2>
            <Line data={chartData} />
            <p>Doanh thu trong tháng: {revenue} VND</p>

            <div className="stats-summary">
                <h3>Tổng quan</h3>
                <p>Tổng doanh thu: {revenue} VND</p>
                <p>Sản phẩm bán chạy nhất: Thẻ bài Yu-Gi-Oh! 1</p>
                <p>Tỷ lệ thanh toán thành công: 85%</p>
                <p>Tỷ lệ hủy đơn hàng: 15%</p>
            </div>
        </div>
    );
};

export default Statistics;
//Để sử dụng react-chartjs-2 và chart.js, bạn cần cài đặt chúng. Chạy lệnh sau để cài đặt các thư viện cần thiết:
//npm install chart.js react-chartjs-2