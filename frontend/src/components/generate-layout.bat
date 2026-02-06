@echo off
cd frontend\src\components
mkdir Layout
echo import React from 'react'; > Layout\index.jsx
echo import { Input, Menu } from 'antd'; >> Layout\index.jsx
echo export default function AppLayout({ children }) { >> Layout\index.jsx
echo return ( >> Layout\index.jsx
echo   ^<div style={{ display: 'flex', minHeight: '100vh' }}^> >> Layout\index.jsx
echo     ^<Menu mode="inline" style={{ width: 256 }} items={[{label:"首页",key:'1'},{label:"功能页",key:'2'}]} /^> >> Layout\index.jsx
echo     ^<div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}^> >> Layout\index.jsx
echo       ^<div style={{ padding: 16, borderBottom: '1px solid #f0f0f0' }}^> >> Layout\index.jsx
echo         ^<Input placeholder="请输入关键词搜索" style={{ maxWidth: 300 }} /^> >> Layout\index.jsx
echo       ^</div^> >> Layout\index.jsx
echo       ^<div style={{ padding: 24 }}^>{children}^</div^> >> Layout\index.jsx
echo     ^</div^> >> Layout\index.jsx
echo   ^</div^> >> Layout\index.jsx
echo );} >> Layout\index.jsx